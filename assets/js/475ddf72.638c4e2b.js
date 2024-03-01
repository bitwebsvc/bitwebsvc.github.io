/*! For license information please see 475ddf72.638c4e2b.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[56464],{32772:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var d=r(24246),t=r(71670);const o={id:"touchablenativefeedback",title:"TouchableNativeFeedback"},s=void 0,a={id:"touchablenativefeedback",title:"TouchableNativeFeedback",description:"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.",source:"@site/versioned_docs/version-0.71/touchablenativefeedback.md",sourceDirName:".",slug:"/touchablenativefeedback",permalink:"/docs/0.71/touchablenativefeedback",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/touchablenativefeedback.md",tags:[],version:"0.71",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"touchablenativefeedback",title:"TouchableNativeFeedback"},sidebar:"components",previous:{title:"DrawerLayoutAndroid",permalink:"/docs/0.71/drawerlayoutandroid"},next:{title:"InputAccessoryView",permalink:"/docs/0.71/inputaccessoryview"}},i={},l=[{value:"Example",id:"example",level:2},{value:"Props",id:"props",level:2},{value:"TouchableWithoutFeedback Props",id:"touchablewithoutfeedback-props",level:3},{value:"<code>background</code>",id:"background",level:3},{value:"<code>useForeground</code>",id:"useforeground",level:3},{value:'<code>hasTVPreferredFocus</code> <div class="label android">Android</div>',id:"hastvpreferredfocus-android",level:3},{value:'<code>nextFocusDown</code> <div class="label android">Android</div>',id:"nextfocusdown-android",level:3},{value:'<code>nextFocusForward</code> <div class="label android">Android</div>',id:"nextfocusforward-android",level:3},{value:'<code>nextFocusLeft</code> <div class="label android">Android</div>',id:"nextfocusleft-android",level:3},{value:'<code>nextFocusRight</code> <div class="label android">Android</div>',id:"nextfocusright-android",level:3},{value:'<code>nextFocusUp</code> <div class="label android">Android</div>',id:"nextfocusup-android",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>SelectableBackground()</code>",id:"selectablebackground",level:3},{value:"<code>SelectableBackgroundBorderless()</code>",id:"selectablebackgroundborderless",level:3},{value:"<code>Ripple()</code>",id:"ripple",level:3},{value:"<code>canUseNativeForeground()</code>",id:"canusenativeforeground",level:3}];function c(e){const n=Object.assign({blockquote:"blockquote",p:"p",a:"a",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",strong:"strong"},(0,t.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",(0,d.jsx)(n.a,{href:"/docs/0.71/pressable",children:"Pressable"})," API."]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"A wrapper for making views respond properly to touches (Android only). On Android this component uses native state drawable to display touch feedback."}),"\n",(0,d.jsx)(n.p,{children:"At the moment it only supports having a single View instance as a child node, as it's implemented by replacing that View with another instance of RCTView node with some additional properties set."}),"\n",(0,d.jsxs)(n.p,{children:["Background drawable of native feedback touchable can be customized with ",(0,d.jsx)(n.code,{children:"background"})," property."]}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.div,{class:"snack-player","data-snack-name":"TouchableNativeFeedback Android Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20TouchableNativeFeedback%2C%5Cn%20%20StatusBar%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BrippleColor%2C%20setRippleColor%5D%20%3D%20useState(randomHexColor())%3B%5Cn%20%20const%20%5BrippleOverflow%2C%20setRippleOverflow%5D%20%3D%20useState(false)%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CTouchableNativeFeedback%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20setRippleColor(randomHexColor())%3B%5Cn%20%20%20%20%20%20%20%20%20%20setRippleOverflow(!rippleOverflow)%3B%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20background%3D%7BTouchableNativeFeedback.Ripple(%5Cn%20%20%20%20%20%20%20%20%20%20rippleColor%2C%5Cn%20%20%20%20%20%20%20%20%20%20rippleOverflow%2C%5Cn%20%20%20%20%20%20%20%20)%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.touchable%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETouchableNativeFeedback%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableNativeFeedback%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20randomHexColor%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20'%23000000'.replace(%2F0%2Fg%2C%20function%20()%20%7B%5Cn%20%20%20%20return%20Math.round(Math.random()%20*%2016).toString(16)%3B%5Cn%20%20%7D)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20paddingTop%3A%20StatusBar.currentHeight%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23ecf0f1'%2C%5Cn%20%20%20%20padding%3A%208%2C%5Cn%20%20%7D%2C%5Cn%20%20touchable%3A%20%7Bflex%3A%200.5%2C%20borderColor%3A%20'black'%2C%20borderWidth%3A%201%7D%2C%5Cn%20%20text%3A%20%7BalignSelf%3A%20'center'%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,d.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,d.jsx)(n.h3,{id:"touchablewithoutfeedback-props",children:(0,d.jsx)(n.a,{href:"/docs/0.71/touchablewithoutfeedback#props",children:"TouchableWithoutFeedback Props"})}),"\n",(0,d.jsxs)(n.p,{children:["Inherits ",(0,d.jsx)(n.a,{href:"/docs/0.71/touchablewithoutfeedback#props",children:"TouchableWithoutFeedback Props"}),"."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"background",children:(0,d.jsx)(n.code,{children:"background"})}),"\n",(0,d.jsxs)(n.p,{children:["Determines the type of background drawable that's going to be used to display feedback. It takes an object with ",(0,d.jsx)(n.code,{children:"type"})," property and extra data depending on the ",(0,d.jsx)(n.code,{children:"type"}),". It's recommended to use one of the static methods to generate that dictionary."]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"backgroundPropType"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"useforeground",children:(0,d.jsx)(n.code,{children:"useForeground"})}),"\n",(0,d.jsx)(n.p,{children:"Set to true to add the ripple effect to the foreground of the view, instead of the background. This is useful if one of your child views has a background of its own, or you're e.g. displaying images, and you don't want the ripple to be covered by them."}),"\n",(0,d.jsx)(n.p,{children:"Check TouchableNativeFeedback.canUseNativeForeground() first, as this is only available on Android 6.0 and above. If you try to use this on older versions you will get a warning and fallback to background."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"bool"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h3,{id:"hastvpreferredfocus-android",children:[(0,d.jsx)(n.code,{children:"hasTVPreferredFocus"})," ",(0,d.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,d.jsx)(n.p,{children:"TV preferred focus (see documentation for the View component)."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"bool"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h3,{id:"nextfocusdown-android",children:[(0,d.jsx)(n.code,{children:"nextFocusDown"})," ",(0,d.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,d.jsx)(n.p,{children:"TV next focus down (see documentation for the View component)."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"number"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h3,{id:"nextfocusforward-android",children:[(0,d.jsx)(n.code,{children:"nextFocusForward"})," ",(0,d.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,d.jsx)(n.p,{children:"TV next focus forward (see documentation for the View component)."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"number"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h3,{id:"nextfocusleft-android",children:[(0,d.jsx)(n.code,{children:"nextFocusLeft"})," ",(0,d.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,d.jsx)(n.p,{children:"TV next focus left (see documentation for the View component)."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"number"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h3,{id:"nextfocusright-android",children:[(0,d.jsx)(n.code,{children:"nextFocusRight"})," ",(0,d.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,d.jsx)(n.p,{children:"TV next focus right (see documentation for the View component)."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"number"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h3,{id:"nextfocusup-android",children:[(0,d.jsx)(n.code,{children:"nextFocusUp"})," ",(0,d.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,d.jsx)(n.p,{children:"TV next focus up (see documentation for the View component)."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"number"})})})]}),"\n",(0,d.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(n.h3,{id:"selectablebackground",children:(0,d.jsx)(n.code,{children:"SelectableBackground()"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"static SelectableBackground(\n  rippleRadius: number | null,\n): ThemeAttributeBackgroundPropType;\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Creates an object that represents android theme's default background for selectable elements (",(0,d.jsx)(n.code,{children:"?android:attr/selectableItemBackground"}),"). ",(0,d.jsx)(n.code,{children:"rippleRadius"})," parameter controls the radius of the ripple effect."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"selectablebackgroundborderless",children:(0,d.jsx)(n.code,{children:"SelectableBackgroundBorderless()"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"static SelectableBackgroundBorderless(\n  rippleRadius: number | null,\n): ThemeAttributeBackgroundPropType;\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Creates an object that represent android theme's default background for borderless selectable elements (",(0,d.jsx)(n.code,{children:"?android:attr/selectableItemBackgroundBorderless"}),"). Available on android API level 21+. ",(0,d.jsx)(n.code,{children:"rippleRadius"})," parameter controls the radius of the ripple effect."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"ripple",children:(0,d.jsx)(n.code,{children:"Ripple()"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"static Ripple(\n  color: ColorValue,\n  borderless: boolean,\n  rippleRadius?: number | null,\n): RippleBackgroundPropType;\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Creates an object that represents ripple drawable with specified color (as a string). If property ",(0,d.jsx)(n.code,{children:"borderless"})," evaluates to true the ripple will render outside of the view bounds (see native actionbar buttons as an example of that behavior). This background type is available on Android API level 21+."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Required"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"color"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"The ripple color"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"borderless"}),(0,d.jsx)(n.td,{children:"boolean"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"If the ripple can render outside its bounds"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"rippleRadius"}),(0,d.jsx)(n.td,{children:"?number"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"controls the radius of the ripple effect"})]})]})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"canusenativeforeground",children:(0,d.jsx)(n.code,{children:"canUseNativeForeground()"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"static canUseNativeForeground(): boolean;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(c,e)})):c(e)}},71426:(e,n,r)=>{var d=r(27378),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var d,o={},l=null,c=null;for(d in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,d)&&!i.hasOwnProperty(d)&&(o[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===o[d]&&(o[d]=n[d]);return{$$typeof:t,type:e,key:l,ref:c,props:o,_owner:a.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},24246:(e,n,r)=>{e.exports=r(71426)},71670:(e,n,r)=>{r.d(n,{Zo:()=>a,ah:()=>o});var d=r(27378);const t=d.createContext({});function o(e){const n=d.useContext(t);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||s:o(e),d.createElement(t.Provider,{value:a},n)}}}]);