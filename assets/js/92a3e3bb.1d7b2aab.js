/*! For license information please see 92a3e3bb.1d7b2aab.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[76308],{57238:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(24246),d=n(71670);const i={id:"pressable",title:"Pressable"},t=void 0,l={id:"pressable",title:"Pressable",description:"Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.",source:"@site/../docs/pressable.md",sourceDirName:".",slug:"/pressable",permalink:"/docs/next/pressable",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/pressable.md",tags:[],version:"current",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"pressable",title:"Pressable"},sidebar:"components",previous:{title:"Modal",permalink:"/docs/next/modal"},next:{title:"RefreshControl",permalink:"/docs/next/refreshcontrol"}},o={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Example",id:"example",level:2},{value:"Props",id:"props",level:2},{value:'<code>android_disableSound</code> <div class="label android">Android</div>',id:"android_disablesound-android",level:3},{value:'<code>android_ripple</code> <div class="label android">Android</div>',id:"android_ripple-android",level:3},{value:"<code>children</code>",id:"children",level:3},{value:"<code>unstable_pressDelay</code>",id:"unstable_pressdelay",level:3},{value:"<code>delayLongPress</code>",id:"delaylongpress",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:"<code>hitSlop</code>",id:"hitslop",level:3},{value:"<code>onHoverIn</code>",id:"onhoverin",level:3},{value:"<code>onHoverOut</code>",id:"onhoverout",level:3},{value:"<code>onLongPress</code>",id:"onlongpress",level:3},{value:"<code>onPress</code>",id:"onpress",level:3},{value:"<code>onPressIn</code>",id:"onpressin",level:3},{value:"<code>onPressOut</code>",id:"onpressout",level:3},{value:"<code>pressRetentionOffset</code>",id:"pressretentionoffset",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"<code>testOnly_pressed</code>",id:"testonly_pressed",level:3},{value:"Type Definitions",id:"type-definitions",level:2},{value:"RippleConfig",id:"rippleconfig",level:3}];function h(e){const s=Object.assign({p:"p",pre:"pre",code:"code",h2:"h2",ul:"ul",li:"li",a:"a",ol:"ol",blockquote:"blockquote",div:"div",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,d.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"<Pressable onPress={onPressFunction}>\n  <Text>I'm pressable!</Text>\n</Pressable>\n"})}),"\n",(0,r.jsx)(s.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsxs)(s.p,{children:["On an element wrapped by ",(0,r.jsx)(s.code,{children:"Pressable"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"#onpressin",children:(0,r.jsx)(s.code,{children:"onPressIn"})})," is called when a press is activated."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"#onpressout",children:(0,r.jsx)(s.code,{children:"onPressOut"})})," is called when the press gesture is deactivated."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["After pressing ",(0,r.jsx)(s.a,{href:"#onpressin",children:(0,r.jsx)(s.code,{children:"onPressIn"})}),", one of two things will happen:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["The person will remove their finger, triggering ",(0,r.jsx)(s.a,{href:"#onpressout",children:(0,r.jsx)(s.code,{children:"onPressOut"})})," followed by ",(0,r.jsx)(s.a,{href:"#onpress",children:(0,r.jsx)(s.code,{children:"onPress"})}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["If the person leaves their finger longer than 500 milliseconds before removing it, ",(0,r.jsx)(s.a,{href:"#onlongpress",children:(0,r.jsx)(s.code,{children:"onLongPress"})})," is triggered. (",(0,r.jsx)(s.a,{href:"#onpressout",children:(0,r.jsx)(s.code,{children:"onPressOut"})})," will still fire when they remove their finger.)"]}),"\n"]}),"\n",(0,r.jsx)("img",{src:"/docs/assets/d_pressable_pressing.svg",width:"1000",alt:"Diagram of the onPress events in sequence."}),"\n",(0,r.jsxs)(s.p,{children:["Fingers are not the most precise instruments, and it is common for users to accidentally activate the wrong element or miss the activation area. To help, ",(0,r.jsx)(s.code,{children:"Pressable"})," has an optional ",(0,r.jsx)(s.code,{children:"HitRect"})," you can use to define how far a touch can register away from the wrapped element. Presses can start anywhere within a ",(0,r.jsx)(s.code,{children:"HitRect"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"PressRect"})," allows presses to move beyond the element and its ",(0,r.jsx)(s.code,{children:"HitRect"}),' while maintaining activation and being eligible for a "press"\u2014think of sliding your finger slowly away from a button you\'re pressing down on.']}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views."}),"\n"]}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:"/docs/assets/d_pressable_anatomy.svg",width:"1000",alt:"Diagram of HitRect and PressRect and how they work."}),(0,r.jsx)("figcaption",{children:(0,r.jsxs)(s.p,{children:["You can set ",(0,r.jsx)("code",{children:"HitRect"})," with ",(0,r.jsx)("code",{children:"hitSlop"})," and set ",(0,r.jsx)("code",{children:"PressRect"})," with ",(0,r.jsx)("code",{children:"pressRetentionOffset"}),"."]})})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Pressable"})," uses React Native's ",(0,r.jsx)(s.code,{children:"Pressability"})," API. For more information around the state machine flow of Pressability and how it works, check out the implementation for ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Pressability/Pressability.js#L350",children:"Pressability"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.div,{class:"snack-player","data-snack-name":"Pressable","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7BPressable%2C%20StyleSheet%2C%20Text%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BtimesPressed%2C%20setTimesPressed%5D%20%3D%20useState(0)%3B%5Cn%5Cn%20%20let%20textLog%20%3D%20''%3B%5Cn%20%20if%20(timesPressed%20%3E%201)%20%7B%5Cn%20%20%20%20textLog%20%3D%20timesPressed%20%2B%20'x%20onPress'%3B%5Cn%20%20%7D%20else%20if%20(timesPressed%20%3E%200)%20%7B%5Cn%20%20%20%20textLog%20%3D%20'onPress'%3B%5Cn%20%20%7D%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CPressable%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20setTimesPressed(current%20%3D%3E%20current%20%2B%201)%3B%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20style%3D%7B(%7Bpressed%7D)%20%3D%3E%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20pressed%20%3F%20'rgb(210%2C%20230%2C%20255)'%20%3A%20'white'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20styles.wrapperCustom%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%7B(%7Bpressed%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E%7Bpressed%20%3F%20'Pressed!'%20%3A%20'Press%20Me'%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%3C%2FPressable%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.logBox%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20testID%3D%5C%22pressable_press_console%5C%22%3E%7BtextLog%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2016%2C%5Cn%20%20%7D%2C%5Cn%20%20wrapperCustom%3A%20%7B%5Cn%20%20%20%20borderRadius%3A%208%2C%5Cn%20%20%20%20padding%3A%206%2C%5Cn%20%20%7D%2C%5Cn%20%20logBox%3A%20%7B%5Cn%20%20%20%20padding%3A%2020%2C%5Cn%20%20%20%20margin%3A%2010%2C%5Cn%20%20%20%20borderWidth%3A%20StyleSheet.hairlineWidth%2C%5Cn%20%20%20%20borderColor%3A%20'%23f0f0f0'%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23f9f9f9'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,r.jsx)(s.h2,{id:"props",children:"Props"}),"\n",(0,r.jsxs)(s.h3,{id:"android_disablesound-android",children:[(0,r.jsx)(s.code,{children:"android_disableSound"})," ",(0,r.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,r.jsx)(s.p,{children:"If true, doesn't play Android system sound on press."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Default"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"false"})})]})})]}),"\n",(0,r.jsxs)(s.h3,{id:"android_ripple-android",children:[(0,r.jsx)(s.code,{children:"android_ripple"})," ",(0,r.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,r.jsx)(s.p,{children:"Enables the Android ripple effect and configures its properties."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"pressable#rippleconfig",children:"RippleConfig"})})})})]}),"\n",(0,r.jsx)(s.h3,{id:"children",children:(0,r.jsx)(s.code,{children:"children"})}),"\n",(0,r.jsx)(s.p,{children:"Either children or a function that receives a boolean reflecting whether the component is currently pressed."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"react-node",children:"React Node"})})})})]}),"\n",(0,r.jsx)(s.h3,{id:"unstable_pressdelay",children:(0,r.jsx)(s.code,{children:"unstable_pressDelay"})}),"\n",(0,r.jsxs)(s.p,{children:["Duration (in milliseconds) to wait after press down before calling ",(0,r.jsx)(s.code,{children:"onPressIn"}),"."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"number"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"delaylongpress",children:(0,r.jsx)(s.code,{children:"delayLongPress"})}),"\n",(0,r.jsxs)(s.p,{children:["Duration (in milliseconds) from ",(0,r.jsx)(s.code,{children:"onPressIn"})," before ",(0,r.jsx)(s.code,{children:"onLongPress"})," is called."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Default"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"500"})})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"disabled",children:(0,r.jsx)(s.code,{children:"disabled"})}),"\n",(0,r.jsx)(s.p,{children:"Whether the press behavior is disabled."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Default"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"false"})})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"hitslop",children:(0,r.jsx)(s.code,{children:"hitSlop"})}),"\n",(0,r.jsx)(s.p,{children:"Sets additional distance outside of element in which a press can be detected."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"rect",children:"Rect"})," or number"]})})})]}),"\n",(0,r.jsx)(s.h3,{id:"onhoverin",children:(0,r.jsx)(s.code,{children:"onHoverIn"})}),"\n",(0,r.jsx)(s.p,{children:"Called when the hover is activated to provide visual feedback."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"md ({ nativeEvent: [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) }) => void"})})})})]}),"\n",(0,r.jsx)(s.h3,{id:"onhoverout",children:(0,r.jsx)(s.code,{children:"onHoverOut"})}),"\n",(0,r.jsx)(s.p,{children:"Called when the hover is deactivated to undo visual feedback."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"md ({ nativeEvent: [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) }) => void"})})})})]}),"\n",(0,r.jsx)(s.h3,{id:"onlongpress",children:(0,r.jsx)(s.code,{children:"onLongPress"})}),"\n",(0,r.jsxs)(s.p,{children:["Called if the time after ",(0,r.jsx)(s.code,{children:"onPressIn"})," lasts longer than 500 milliseconds. This time period can be customized with ",(0,r.jsx)(s.a,{href:"#delaylongpress",children:(0,r.jsx)(s.code,{children:"delayLongPress"})}),"."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"md ({nativeEvent: [PressEvent](pressevent)}) => void"})})})})]}),"\n",(0,r.jsx)(s.h3,{id:"onpress",children:(0,r.jsx)(s.code,{children:"onPress"})}),"\n",(0,r.jsxs)(s.p,{children:["Called after ",(0,r.jsx)(s.code,{children:"onPressOut"}),"."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"md ({nativeEvent: [PressEvent](pressevent)}) => void"})})})})]}),"\n",(0,r.jsx)(s.h3,{id:"onpressin",children:(0,r.jsx)(s.code,{children:"onPressIn"})}),"\n",(0,r.jsxs)(s.p,{children:["Called immediately when a touch is engaged, before ",(0,r.jsx)(s.code,{children:"onPressOut"})," and ",(0,r.jsx)(s.code,{children:"onPress"}),"."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"md ({nativeEvent: [PressEvent](pressevent)}) => void"})})})})]}),"\n",(0,r.jsx)(s.h3,{id:"onpressout",children:(0,r.jsx)(s.code,{children:"onPressOut"})}),"\n",(0,r.jsx)(s.p,{children:"Called when a touch is released."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"md ({nativeEvent: [PressEvent](pressevent)}) => void"})})})})]}),"\n",(0,r.jsx)(s.h3,{id:"pressretentionoffset",children:(0,r.jsx)(s.code,{children:"pressRetentionOffset"})}),"\n",(0,r.jsxs)(s.p,{children:["Additional distance outside of this view in which a touch is considered a press before ",(0,r.jsx)(s.code,{children:"onPressOut"})," is triggered."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Default"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"rect",children:"Rect"})," or number"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"{bottom: 30, left: 20, right: 20, top: 20}"})})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"style",children:(0,r.jsx)(s.code,{children:"style"})}),"\n",(0,r.jsx)(s.p,{children:"Either view styles or a function that receives a boolean reflecting whether the component is currently pressed and returns view styles."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"view-style-props",children:"View Style"})," or ",(0,r.jsx)(s.code,{children:"md ({ pressed: boolean }) => [View Style](view-style-props)"})]})})})]}),"\n",(0,r.jsx)(s.h3,{id:"testonly_pressed",children:(0,r.jsx)(s.code,{children:"testOnly_pressed"})}),"\n",(0,r.jsx)(s.p,{children:"Used only for documentation or testing (e.g. snapshot testing)."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Default"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"false"})})]})})]}),"\n",(0,r.jsx)(s.h2,{id:"type-definitions",children:"Type Definitions"}),"\n",(0,r.jsx)(s.h3,{id:"rippleconfig",children:"RippleConfig"}),"\n",(0,r.jsxs)(s.p,{children:["Ripple effect configuration for the ",(0,r.jsx)(s.code,{children:"android_ripple"})," property."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"Type"})})}),(0,r.jsx)(s.tbody,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"object"})})})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Properties:"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Required"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"color"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"colors",children:"color"})}),(0,r.jsx)(s.td,{children:"No"}),(0,r.jsx)(s.td,{children:"Defines the color of the ripple effect."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"borderless"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"No"}),(0,r.jsx)(s.td,{children:"Defines if ripple effect should not include border."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"radius"}),(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:"No"}),(0,r.jsx)(s.td,{children:"Defines the radius of the ripple effect."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"foreground"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"No"}),(0,r.jsx)(s.td,{children:"Set to true to add the ripple effect to the foreground of the view, instead of the background. This is useful if one of your child views has a background of its own, or you're e.g. displaying images, and you don't want the ripple to be covered by them."})]})]})]})]})}const a=function(e={}){const{wrapper:s}=Object.assign({},(0,d.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},71426:(e,s,n)=>{var r=n(27378),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,n){var r,i={},c=null,h=null;for(r in void 0!==n&&(c=""+n),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(h=s.ref),s)t.call(s,r)&&!o.hasOwnProperty(r)&&(i[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:d,type:e,key:c,ref:h,props:i,_owner:l.current}}s.Fragment=i,s.jsx=c,s.jsxs=c},24246:(e,s,n)=>{e.exports=n(71426)},71670:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>i});var r=n(27378);const d=r.createContext({});function i(e){const s=r.useContext(d);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const t={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||t:i(e),r.createElement(d.Provider,{value:l},s)}}}]);