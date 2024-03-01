/*! For license information please see c8714a34.3339017a.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[25541],{90674:(e,n,t)=>{t.r(n),t.d(n,{ColorDefaults:()=>a,assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var s=t(24246),i=t(71670);const d={id:"button",title:"Button"},r=void 0,l={id:"button",title:"Button",description:"A basic button component that should render nicely on any platform. Supports a minimal level of customization.",source:"@site/../docs/button.md",sourceDirName:".",slug:"/button",permalink:"/docs/next/button",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/button.md",tags:[],version:"current",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"button",title:"Button"},sidebar:"components",previous:{title:"ActivityIndicator",permalink:"/docs/next/activityindicator"},next:{title:"FlatList",permalink:"/docs/next/flatlist"}},c={},o=[{value:"Example",id:"example",level:2},{value:"Props",id:"props",level:2},{value:'<div class="label required basic">Required</div><strong><code>onPress</code></strong>',id:"requiredonpress",level:3},{value:'<div class="label required basic">Required</div><strong><code>title</code></strong>',id:"requiredtitle",level:3},{value:"<code>accessibilityLabel</code>",id:"accessibilitylabel",level:3},{value:'<code>accessibilityLanguage</code> <div class="label ios">iOS</div>',id:"accessibilitylanguage-ios",level:3},{value:"<code>accessibilityActions</code>",id:"accessibilityactions",level:3},{value:"<code>onAccessibilityAction</code>",id:"onaccessibilityaction",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:'<code>hasTVPreferredFocus</code> <div class="label tv">TV</div>',id:"hastvpreferredfocus-tv",level:3},{value:'<code>nextFocusDown</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusdown-androidtv",level:3},{value:'<code>nextFocusForward</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusforward-androidtv",level:3},{value:'<code>nextFocusLeft</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusleft-androidtv",level:3},{value:'<code>nextFocusRight</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusright-androidtv",level:3},{value:'<code>nextFocusUp</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusup-androidtv",level:3},{value:"<code>testID</code>",id:"testid",level:3},{value:'<code>touchSoundDisabled</code> <div class="label android">Android</div>',id:"touchsounddisabled-android",level:3}];function a(){const e=Object.assign({ins:"ins",code:"code",div:"div",hr:"hr"},(0,i.ah)());return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.ins,{style:{background:"#2196F3"},className:"color-box"})," ",(0,s.jsx)(e.code,{children:"'#2196F3'"})," ",(0,s.jsx)(e.div,{className:"label android",children:"Android"}),(0,s.jsx)(e.hr,{}),(0,s.jsx)(e.ins,{style:{background:"#007AFF"},className:"color-box"})," ",(0,s.jsx)(e.code,{children:"'#007AFF'"})," ",(0,s.jsx)(e.div,{className:"label ios",children:"iOS"})]})}function h(e){const n=Object.assign({p:"p",a:"a",pre:"pre",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"A basic button component that should render nicely on any platform. Supports a minimal level of customization."}),"\n",(0,s.jsxs)(n.p,{children:["If this button doesn't look right for your app, you can build your own button using ",(0,s.jsx)(n.a,{href:"pressable",children:"Pressable"}),". For inspiration, look at the ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Components/Button.js",children:"source code for the Button component"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'<Button\n  onPress={onPressLearnMore}\n  title="Learn More"\n  color="#841584"\n  accessibilityLabel="Learn more about this purple button"\n/>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.div,{class:"snack-player","data-snack-name":"Button Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%2C%5Cn%20%20View%2C%5Cn%20%20SafeAreaView%2C%5Cn%20%20Text%2C%5Cn%20%20Alert%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20Separator%20%3D%20()%20%3D%3E%20%3CView%20style%3D%7Bstyles.separator%7D%20%2F%3E%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%5Cn%20%20%20%20%20%20%20%20The%20title%20and%20onPress%20handler%20are%20required.%20It%20is%20recommended%20to%20set%5Cn%20%20%20%20%20%20%20%20accessibilityLabel%20to%20help%20make%20your%20app%20usable%20by%20everyone.%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Press%20me%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Simple%20Button%20pressed')%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%5Cn%20%20%20%20%20%20%20%20Adjust%20the%20color%20in%20a%20way%20that%20looks%20standard%20on%20each%20platform.%20On%20iOS%2C%5Cn%20%20%20%20%20%20%20%20the%20color%20prop%20controls%20the%20color%20of%20the%20text.%20On%20Android%2C%20the%20color%5Cn%20%20%20%20%20%20%20%20adjusts%20the%20background%20color%20of%20the%20button.%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Press%20me%5C%22%5Cn%20%20%20%20%20%20%20%20color%3D%5C%22%23f194ff%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Button%20with%20adjusted%20color%20pressed')%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%5Cn%20%20%20%20%20%20%20%20All%20interaction%20for%20the%20component%20are%20disabled.%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Press%20me%5C%22%5Cn%20%20%20%20%20%20%20%20disabled%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Cannot%20press%20this%20one')%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%5Cn%20%20%20%20%20%20%20%20This%20layout%20strategy%20lets%20the%20title%20define%20the%20width%20of%20the%20button.%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.fixToText%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Left%20button%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Left%20button%20pressed')%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Right%20button%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Right%20button%20pressed')%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%3C%2FSafeAreaView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20marginHorizontal%3A%2016%2C%5Cn%20%20%7D%2C%5Cn%20%20title%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%20%20marginVertical%3A%208%2C%5Cn%20%20%7D%2C%5Cn%20%20fixToText%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20'row'%2C%5Cn%20%20%20%20justifyContent%3A%20'space-between'%2C%5Cn%20%20%7D%2C%5Cn%20%20separator%3A%20%7B%5Cn%20%20%20%20marginVertical%3A%208%2C%5Cn%20%20%20%20borderBottomColor%3A%20'%23737373'%2C%5Cn%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(n.h3,{id:"requiredonpress",children:[(0,s.jsx)("div",{class:"label required basic",children:"Required"}),(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"onPress"})})]}),"\n",(0,s.jsx)(n.p,{children:"Handler to be called when the user taps the button."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"md ({nativeEvent: [PressEvent](pressevent)})"})})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"requiredtitle",children:[(0,s.jsx)("div",{class:"label required basic",children:"Required"}),(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"title"})})]}),"\n",(0,s.jsx)(n.p,{children:"Text to display inside the button. On Android the given title will be converted to the uppercased form."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"string"})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"accessibilitylabel",children:(0,s.jsx)(n.code,{children:"accessibilityLabel"})}),"\n",(0,s.jsx)(n.p,{children:"Text to display for blindness accessibility features."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"string"})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"accessibilitylanguage-ios",children:[(0,s.jsx)(n.code,{children:"accessibilityLanguage"})," ",(0,s.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,s.jsxs)(n.p,{children:["A value indicating which language should be used by the screen reader when the user interacts with the element. It should follow the ",(0,s.jsx)(n.a,{href:"https://www.rfc-editor.org/info/bcp47",children:"BCP 47 specification"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsxs)(n.a,{href:"https://developer.apple.com/documentation/objectivec/nsobject/1615192-accessibilitylanguage",children:["iOS ",(0,s.jsx)(n.code,{children:"accessibilityLanguage"})," doc"]})," for more information."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"string"})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"accessibilityactions",children:(0,s.jsx)(n.code,{children:"accessibilityActions"})}),"\n",(0,s.jsxs)(n.p,{children:["Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. The ",(0,s.jsx)(n.code,{children:"accessibilityActions"})," property should contain a list of action objects. Each action object should contain the field name and label."]}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/docs/next/accessibility#accessibility-actions",children:"Accessibility guide"})," for more information."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"onaccessibilityaction",children:(0,s.jsx)(n.code,{children:"onAccessibilityAction"})}),"\n",(0,s.jsx)(n.p,{children:"Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform."}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/docs/next/accessibility#accessibility-actions",children:"Accessibility guide"})," for more information."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"color",children:(0,s.jsx)(n.code,{children:"color"})}),"\n",(0,s.jsx)(n.p,{children:"Color of the text (iOS), or background color of the button (Android)."}),"\n","\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"colors",children:"color"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(a,{})})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"disabled",children:(0,s.jsx)(n.code,{children:"disabled"})}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"true"}),", disable all interactions for this component."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"hastvpreferredfocus-tv",children:[(0,s.jsx)(n.code,{children:"hasTVPreferredFocus"})," ",(0,s.jsx)("div",{class:"label tv",children:"TV"})]}),"\n",(0,s.jsx)(n.p,{children:"TV preferred focus."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"nextfocusdown-androidtv",children:[(0,s.jsx)(n.code,{children:"nextFocusDown"})," ",(0,s.jsx)("div",{class:"label android",children:"Android"}),(0,s.jsx)("div",{class:"label tv",children:"TV"})]}),"\n",(0,s.jsxs)(n.p,{children:["Designates the next view to receive focus when the user navigates down. See the ",(0,s.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusDown",children:"Android documentation"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"number"})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"nextfocusforward-androidtv",children:[(0,s.jsx)(n.code,{children:"nextFocusForward"})," ",(0,s.jsx)("div",{class:"label android",children:"Android"}),(0,s.jsx)("div",{class:"label tv",children:"TV"})]}),"\n",(0,s.jsxs)(n.p,{children:["Designates the next view to receive focus when the user navigates forward. See the ",(0,s.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusForward",children:"Android documentation"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"number"})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"nextfocusleft-androidtv",children:[(0,s.jsx)(n.code,{children:"nextFocusLeft"})," ",(0,s.jsx)("div",{class:"label android",children:"Android"}),(0,s.jsx)("div",{class:"label tv",children:"TV"})]}),"\n",(0,s.jsxs)(n.p,{children:["Designates the next view to receive focus when the user navigates left. See the ",(0,s.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusLeft",children:"Android documentation"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"number"})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"nextfocusright-androidtv",children:[(0,s.jsx)(n.code,{children:"nextFocusRight"})," ",(0,s.jsx)("div",{class:"label android",children:"Android"}),(0,s.jsx)("div",{class:"label tv",children:"TV"})]}),"\n",(0,s.jsxs)(n.p,{children:["Designates the next view to receive focus when the user navigates right. See the ",(0,s.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusRight",children:"Android documentation"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"number"})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"nextfocusup-androidtv",children:[(0,s.jsx)(n.code,{children:"nextFocusUp"})," ",(0,s.jsx)("div",{class:"label android",children:"Android"}),(0,s.jsx)("div",{class:"label tv",children:"TV"})]}),"\n",(0,s.jsxs)(n.p,{children:["Designates the next view to receive focus when the user navigates up. See the ",(0,s.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusUp",children:"Android documentation"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"number"})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"testid",children:(0,s.jsx)(n.code,{children:"testID"})}),"\n",(0,s.jsx)(n.p,{children:"Used to locate this view in end-to-end tests."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"string"})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"touchsounddisabled-android",children:[(0,s.jsx)(n.code,{children:"touchSoundDisabled"})," ",(0,s.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"true"}),", doesn't play system sound on touch."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]})})]})]})}const x=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},71426:(e,n,t)=>{var s=t(27378),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var s,d={},o=null,a=null;for(s in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)r.call(n,s)&&!c.hasOwnProperty(s)&&(d[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===d[s]&&(d[s]=n[s]);return{$$typeof:i,type:e,key:o,ref:a,props:d,_owner:l.current}}n.Fragment=d,n.jsx=o,n.jsxs=o},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>d});var s=t(27378);const i=s.createContext({});function d(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||r:d(e),s.createElement(i.Provider,{value:l},n)}}}]);