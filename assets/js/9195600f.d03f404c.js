/*! For license information please see 9195600f.d03f404c.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[32452],{32313:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var i=s(24246),d=s(71670);const l={id:"modal",title:"Modal"},t=void 0,r={id:"modal",title:"Modal",description:"The Modal component is a basic way to present content above an enclosing view.",source:"@site/../docs/modal.md",sourceDirName:".",slug:"/modal",permalink:"/docs/next/modal",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/modal.md",tags:[],version:"current",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"modal",title:"Modal"},sidebar:"components",previous:{title:"KeyboardAvoidingView",permalink:"/docs/next/keyboardavoidingview"},next:{title:"Pressable",permalink:"/docs/next/pressable"}},o={},a=[{value:"Example",id:"example",level:2},{value:"Props",id:"props",level:2},{value:"View Props",id:"view-props",level:3},{value:"<code>animated</code>",id:"animated",level:3},{value:"<code>animationType</code>",id:"animationtype",level:3},{value:'<code>hardwareAccelerated</code> <div class="label android">Android</div>',id:"hardwareaccelerated-android",level:3},{value:'<code>onDismiss</code> <div class="label ios">iOS</div>',id:"ondismiss-ios",level:3},{value:'<code>onOrientationChange</code> <div class="label ios">iOS</div>',id:"onorientationchange-ios",level:3},{value:"<code>onRequestClose</code>",id:"onrequestclose",level:3},{value:"<code>onShow</code>",id:"onshow",level:3},{value:'<code>presentationStyle</code> <div class="label ios">iOS</div>',id:"presentationstyle-ios",level:3},{value:'<code>statusBarTranslucent</code> <div class="label android">Android</div>',id:"statusbartranslucent-android",level:3},{value:'<code>supportedOrientations</code> <div class="label ios">iOS</div>',id:"supportedorientations-ios",level:3},{value:"<code>transparent</code>",id:"transparent",level:3},{value:"<code>visible</code>",id:"visible",level:3}];function c(e){const n=Object.assign({p:"p",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",a:"a",code:"code",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The Modal component is a basic way to present content above an enclosing view."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"Modal","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7BAlert%2C%20Modal%2C%20StyleSheet%2C%20Text%2C%20Pressable%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BmodalVisible%2C%20setModalVisible%5D%20%3D%20useState(false)%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%5Cn%20%20%20%20%20%20%3CModal%5Cn%20%20%20%20%20%20%20%20animationType%3D%5C%22slide%5C%22%5Cn%20%20%20%20%20%20%20%20transparent%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%20%20visible%3D%7BmodalVisible%7D%5Cn%20%20%20%20%20%20%20%20onRequestClose%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20Alert.alert('Modal%20has%20been%20closed.')%3B%5Cn%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%5Cn%20%20%20%20%20%20%20%20%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.modalView%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.modalText%7D%3EHello%20World!%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CPressable%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.button%2C%20styles.buttonClose%5D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setModalVisible(!modalVisible)%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EHide%20Modal%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FPressable%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FModal%3E%5Cn%20%20%20%20%20%20%3CPressable%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.button%2C%20styles.buttonOpen%5D%7D%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setModalVisible(true)%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EShow%20Modal%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FPressable%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20centeredView%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20marginTop%3A%2022%2C%5Cn%20%20%7D%2C%5Cn%20%20modalView%3A%20%7B%5Cn%20%20%20%20margin%3A%2020%2C%5Cn%20%20%20%20backgroundColor%3A%20'white'%2C%5Cn%20%20%20%20borderRadius%3A%2020%2C%5Cn%20%20%20%20padding%3A%2035%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20shadowColor%3A%20'%23000'%2C%5Cn%20%20%20%20shadowOffset%3A%20%7B%5Cn%20%20%20%20%20%20width%3A%200%2C%5Cn%20%20%20%20%20%20height%3A%202%2C%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20shadowOpacity%3A%200.25%2C%5Cn%20%20%20%20shadowRadius%3A%204%2C%5Cn%20%20%20%20elevation%3A%205%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20borderRadius%3A%2020%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20elevation%3A%202%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonOpen%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'%23F194FF'%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonClose%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'%232196F3'%2C%5Cn%20%20%7D%2C%5Cn%20%20textStyle%3A%20%7B%5Cn%20%20%20%20color%3A%20'white'%2C%5Cn%20%20%20%20fontWeight%3A%20'bold'%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20modalText%3A%20%7B%5Cn%20%20%20%20marginBottom%3A%2015%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,i.jsx)(n.h3,{id:"view-props",children:(0,i.jsx)(n.a,{href:"/docs/next/view#props",children:"View Props"})}),"\n",(0,i.jsxs)(n.p,{children:["Inherits ",(0,i.jsx)(n.a,{href:"/docs/next/view#props",children:"View Props"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"animated",children:(0,i.jsx)(n.code,{children:"animated"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Deprecated."})," Use the ",(0,i.jsx)(n.a,{href:"/docs/next/modal#animationtype",children:(0,i.jsx)(n.code,{children:"animationType"})})," prop instead."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"animationtype",children:(0,i.jsx)(n.code,{children:"animationType"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"animationType"})," prop controls how the modal animates."]}),"\n",(0,i.jsx)(n.p,{children:"Possible values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"slide"})," slides in from the bottom,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fade"})," fades into view,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"none"})," appears without an animation."]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["enum(",(0,i.jsx)(n.code,{children:"'none'"}),", ",(0,i.jsx)(n.code,{children:"'slide'"}),", ",(0,i.jsx)(n.code,{children:"'fade'"}),")"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"none"})})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"hardwareaccelerated-android",children:[(0,i.jsx)(n.code,{children:"hardwareAccelerated"})," ",(0,i.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"hardwareAccelerated"})," prop controls whether to force hardware acceleration for the underlying window."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"ondismiss-ios",children:[(0,i.jsx)(n.code,{children:"onDismiss"})," ",(0,i.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"onDismiss"})," prop allows passing a function that will be called once the modal has been dismissed."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"function"})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"onorientationchange-ios",children:[(0,i.jsx)(n.code,{children:"onOrientationChange"})," ",(0,i.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"onOrientationChange"})," callback is called when the orientation changes while the modal is being displayed. The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"function"})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"onrequestclose",children:(0,i.jsx)(n.code,{children:"onRequestClose"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"onRequestClose"})," callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that ",(0,i.jsx)(n.code,{children:"BackHandler"})," events will not be emitted as long as the modal is open.\nOn iOS, this callback is called when a Modal is being dismissed using a drag gesture when ",(0,i.jsx)(n.code,{children:"presentationStyle"})," is ",(0,i.jsx)(n.code,{children:"pageSheet or formSheet"})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:["function ",(0,i.jsx)("div",{className:"label basic required",children:"Required"}),(0,i.jsx)("div",{className:"label android",children:"Android"}),(0,i.jsx)("div",{className:"label tv",children:"TV"}),(0,i.jsx)("hr",{}),"function ",(0,i.jsx)("div",{className:"label ios",children:"iOS"})]})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"onshow",children:(0,i.jsx)(n.code,{children:"onShow"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"onShow"})," prop allows passing a function that will be called once the modal has been shown."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"function"})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"presentationstyle-ios",children:[(0,i.jsx)(n.code,{children:"presentationStyle"})," ",(0,i.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"presentationStyle"})," prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). See ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/reference/uikit/uimodalpresentationstyle",children:"https://developer.apple.com/reference/uikit/uimodalpresentationstyle"})," for details."]}),"\n",(0,i.jsx)(n.p,{children:"Possible values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fullScreen"})," covers the screen completely"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pageSheet"})," covers portrait-width view centered (only on larger devices)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"formSheet"})," covers narrow-width view centered (only on larger devices)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"overFullScreen"})," covers the screen completely, but allows transparency"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["enum(",(0,i.jsx)(n.code,{children:"'fullScreen'"}),", ",(0,i.jsx)(n.code,{children:"'pageSheet'"}),", ",(0,i.jsx)(n.code,{children:"'formSheet'"}),", ",(0,i.jsx)(n.code,{children:"'overFullScreen'"}),")"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"fullScreen"})," if ",(0,i.jsx)(n.code,{children:"transparent={false}"}),(0,i.jsx)("hr",{}),(0,i.jsx)(n.code,{children:"overFullScreen"})," if ",(0,i.jsx)(n.code,{children:"transparent={true}"})]})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"statusbartranslucent-android",children:[(0,i.jsx)(n.code,{children:"statusBarTranslucent"})," ",(0,i.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"statusBarTranslucent"})," prop determines whether your modal should go under the system statusbar."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"supportedorientations-ios",children:[(0,i.jsx)(n.code,{children:"supportedOrientations"})," ",(0,i.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"supportedOrientations"})," prop allows the modal to be rotated to any of the specified orientations. On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["When using ",(0,i.jsx)(n.code,{children:"presentationStyle"})," of ",(0,i.jsx)(n.code,{children:"pageSheet"})," or ",(0,i.jsx)(n.code,{children:"formSheet"}),", this property will be ignored by iOS."]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["array of enums(",(0,i.jsx)(n.code,{children:"'portrait'"}),", ",(0,i.jsx)(n.code,{children:"'portrait-upside-down'"}),", ",(0,i.jsx)(n.code,{children:"'landscape'"}),", ",(0,i.jsx)(n.code,{children:"'landscape-left'"}),", ",(0,i.jsx)(n.code,{children:"'landscape-right'"}),")"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"['portrait']"})})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"transparent",children:(0,i.jsx)(n.code,{children:"transparent"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"transparent"})," prop determines whether your modal will fill the entire view. Setting this to ",(0,i.jsx)(n.code,{children:"true"})," will render the modal over a transparent background."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"visible",children:(0,i.jsx)(n.code,{children:"visible"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"visible"})," prop determines whether your modal is visible."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]})})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},71426:(e,n,s)=>{var i=s(27378),d=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var i,l={},a=null,c=null;for(i in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)t.call(n,i)&&!o.hasOwnProperty(i)&&(l[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===l[i]&&(l[i]=n[i]);return{$$typeof:d,type:e,key:a,ref:c,props:l,_owner:r.current}}n.Fragment=l,n.jsx=a,n.jsxs=a},24246:(e,n,s)=>{e.exports=s(71426)},71670:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>l});var i=s(27378);const d=i.createContext({});function l(e){const n=i.useContext(d);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||t:l(e),i.createElement(d.Provider,{value:r},n)}}}]);