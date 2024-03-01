/*! For license information please see eb38f5fa.52e1a36d.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[78721],{33260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var r=n(24246),l=n(71670),s=n(48375),a=n(86386),i=n(11674);const d={id:"alert",title:"Alert"},o=void 0,c={id:"alert",title:"Alert",description:"Launches an alert dialog with the specified title and message.",source:"@site/versioned_docs/version-0.71/alert.md",sourceDirName:".",slug:"/alert",permalink:"/docs/0.71/alert",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/alert.md",tags:[],version:"0.71",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"alert",title:"Alert"},sidebar:"api",previous:{title:"AccessibilityInfo",permalink:"/docs/0.71/accessibilityinfo"},next:{title:"Animated",permalink:"/docs/0.71/animated"}},h={},u=[{value:"Example",id:"example",level:2},{value:"iOS",id:"ios",level:2},{value:"Android",id:"android",level:2},{value:'Example <div class="label android">Android</div>',id:"example-android",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>alert()</code>",id:"alert",level:3},{value:'<code>prompt()</code> <div class="label ios">iOS</div>',id:"prompt-ios",level:3},{value:"Type Definitions",id:"type-definitions",level:2},{value:'AlertButtonStyle <div class="label ios">iOS</div>',id:"alertbuttonstyle-ios",level:3},{value:'AlertType <div class="label ios">iOS</div>',id:"alerttype-ios",level:3},{value:"AlertButton",id:"alertbutton",level:3},{value:"AlertOptions",id:"alertoptions",level:3}];function p(e){const t=Object.assign({p:"p",h2:"h2",div:"div",a:"a",code:"code",ul:"ul",li:"li",h3:"h3",hr:"hr",h1:"h1",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Launches an alert dialog with the specified title and message."}),"\n",(0,r.jsx)(t.p,{children:"Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button."}),"\n",(0,r.jsx)(t.p,{children:"This is an API that works both on Android and iOS and can show static alerts. Alert that prompts the user to enter some information is available on iOS only."}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(s.Z,{groupId:"syntax",queryString:!0,defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,children:[(0,r.jsx)(a.Z,{value:"functional",children:(0,r.jsx)(t.div,{class:"snack-player","data-snack-name":"Alert Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%2C%20StyleSheet%2C%20Button%2C%20Alert%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20createTwoButtonAlert%20%3D%20()%20%3D%3E%5Cn%20%20%20%20Alert.alert('Alert%20Title'%2C%20'My%20Alert%20Msg'%2C%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20'Cancel'%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log('Cancel%20Pressed')%2C%5Cn%20%20%20%20%20%20%20%20style%3A%20'cancel'%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7Btext%3A%20'OK'%2C%20onPress%3A%20()%20%3D%3E%20console.log('OK%20Pressed')%7D%2C%5Cn%20%20%20%20%5D)%3B%5Cn%5Cn%20%20const%20createThreeButtonAlert%20%3D%20()%20%3D%3E%5Cn%20%20%20%20Alert.alert('Alert%20Title'%2C%20'My%20Alert%20Msg'%2C%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20'Ask%20me%20later'%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log('Ask%20me%20later%20pressed')%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20'Cancel'%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log('Cancel%20Pressed')%2C%5Cn%20%20%20%20%20%20%20%20style%3A%20'cancel'%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7Btext%3A%20'OK'%2C%20onPress%3A%20()%20%3D%3E%20console.log('OK%20Pressed')%7D%2C%5Cn%20%20%20%20%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%7B'2-Button%20Alert'%7D%20onPress%3D%7BcreateTwoButtonAlert%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%7B'3-Button%20Alert'%7D%20onPress%3D%7BcreateThreeButtonAlert%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'space-around'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,r.jsx)(a.Z,{value:"classical",children:(0,r.jsx)(t.div,{class:"snack-player","data-snack-name":"Alert Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%5Cnimport%20%7BView%2C%20StyleSheet%2C%20Button%2C%20Alert%7D%20from%20'react-native'%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20createTwoButtonAlert%20%3D%20()%20%3D%3E%5Cn%20%20%20%20Alert.alert('Alert%20Title'%2C%20'My%20Alert%20Msg'%2C%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20'Cancel'%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log('Cancel%20Pressed')%2C%5Cn%20%20%20%20%20%20%20%20style%3A%20'cancel'%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7Btext%3A%20'OK'%2C%20onPress%3A%20()%20%3D%3E%20console.log('OK%20Pressed')%7D%2C%5Cn%20%20%20%20%5D)%3B%5Cn%5Cn%20%20createThreeButtonAlert%20%3D%20()%20%3D%3E%5Cn%20%20%20%20Alert.alert('Alert%20Title'%2C%20'My%20Alert%20Msg'%2C%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20'Ask%20me%20later'%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log('Ask%20me%20later%20pressed')%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20'Cancel'%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log('Cancel%20Pressed')%2C%5Cn%20%20%20%20%20%20%20%20style%3A%20'cancel'%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7Btext%3A%20'OK'%2C%20onPress%3A%20()%20%3D%3E%20console.log('OK%20Pressed')%7D%2C%5Cn%20%20%20%20%5D)%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%7B'2-Button%20Alert'%7D%20onPress%3D%7Bthis.createTwoButtonAlert%7D%20%2F%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%7B'3-Button%20Alert'%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis.createThreeButtonAlert%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'space-around'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,r.jsx)(t.h2,{id:"ios",children:"iOS"}),"\n",(0,r.jsxs)(t.p,{children:["On iOS you can specify any number of buttons. Each button can optionally specify a style or be emphasized, available options are represented by the ",(0,r.jsx)(t.a,{href:"#alertbuttonstyle-ios",children:"AlertButtonStyle"})," enum and the ",(0,r.jsx)(t.code,{children:"isPreferred"})," field on ",(0,r.jsx)(t.a,{href:"alert#alertbutton",children:"AlertButton"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"android",children:"Android"}),"\n",(0,r.jsx)(t.p,{children:"On Android at most three buttons can be specified. Android has a concept of a neutral, negative and a positive button:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"If you specify one button, it will be the 'positive' one (such as 'OK')"}),"\n",(0,r.jsx)(t.li,{children:"Two buttons mean 'negative', 'positive' (such as 'Cancel', 'OK')"}),"\n",(0,r.jsx)(t.li,{children:"Three buttons mean 'neutral', 'negative', 'positive' (such as 'Later', 'Cancel', 'OK')"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Alerts on Android can be dismissed by tapping outside of the alert box. It is disabled by default and can be enabled by providing an optional ",(0,r.jsx)(t.a,{href:"alert#alertoptions",children:"AlertOptions"})," parameter with the cancelable property set to ",(0,r.jsx)(t.code,{children:"true"})," i.e.",(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"{cancelable: true}"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The cancel event can be handled by providing an ",(0,r.jsx)(t.code,{children:"onDismiss"})," callback property inside the ",(0,r.jsx)(t.code,{children:"options"})," parameter."]}),"\n",(0,r.jsxs)(t.h3,{id:"example-android",children:["Example ",(0,r.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,r.jsx)(t.div,{class:"snack-player","data-snack-name":"Alert Android Dissmissable Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%2C%20StyleSheet%2C%20Button%2C%20Alert%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20showAlert%20%3D%20()%20%3D%3E%5Cn%20%20Alert.alert(%5Cn%20%20%20%20'Alert%20Title'%2C%5Cn%20%20%20%20'My%20Alert%20Msg'%2C%5Cn%20%20%20%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20'Cancel'%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20Alert.alert('Cancel%20Pressed')%2C%5Cn%20%20%20%20%20%20%20%20style%3A%20'cancel'%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%5D%2C%5Cn%20%20%20%20%7B%5Cn%20%20%20%20%20%20cancelable%3A%20true%2C%5Cn%20%20%20%20%20%20onDismiss%3A%20()%20%3D%3E%5Cn%20%20%20%20%20%20%20%20Alert.alert(%5Cn%20%20%20%20%20%20%20%20%20%20'This%20alert%20was%20dismissed%20by%20tapping%20outside%20of%20the%20alert%20dialog.'%2C%5Cn%20%20%20%20%20%20%20%20)%2C%5Cn%20%20%20%20%7D%2C%5Cn%20%20)%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CButton%20title%3D%5C%22Show%20alert%5C%22%20onPress%3D%7BshowAlert%7D%20%2F%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.h3,{id:"alert",children:(0,r.jsx)(t.code,{children:"alert()"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"static alert (\n  title: string,\n  message?: string,\n  buttons?: AlertButton[],\n  options?: AlertOptions,\n);\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["title ",(0,r.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:["The dialog's title. Passing ",(0,r.jsx)(t.code,{children:"null"})," or empty string will hide the title."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"message"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"An optional message that appears below the dialog's title."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"buttons"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"alert#alertbutton",children:"AlertButton"}),"[]"]}),(0,r.jsx)(t.td,{children:"An optional array containing buttons configuration."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"alert#alertoptions",children:"AlertOptions"})}),(0,r.jsx)(t.td,{children:"An optional Alert configuration."})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.h3,{id:"prompt-ios",children:[(0,r.jsx)(t.code,{children:"prompt()"})," ",(0,r.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"static prompt: (\n  title: string,\n  message?: string,\n  callbackOrButtons?: ((text: string) => void) | AlertButton[],\n  type?: AlertType,\n  defaultValue?: string,\n  keyboardType?: string,\n);\n"})}),"\n",(0,r.jsx)(t.p,{children:"Create and display a prompt to enter some text in form of Alert."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["title ",(0,r.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"The dialog's title."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"message"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"An optional message that appears above the text input."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"callbackOrButtons"}),(0,r.jsxs)(t.td,{children:["function",(0,r.jsx)("hr",{}),(0,r.jsx)(t.a,{href:"alert#alertButton",children:"AlertButton"}),"[]"]}),(0,r.jsxs)(t.td,{children:["If passed a function, it will be called with the prompt's value",(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"(text: string) => void"}),", when the user taps 'OK'.",(0,r.jsx)("hr",{}),"If passed an array, buttons will be configured based on the array content."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"alert#alerttype-ios",children:"AlertType"})}),(0,r.jsx)(t.td,{children:"This configures the text input."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"defaultValue"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"The default text in text input."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"keyboardType"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:["The keyboard type of first text field (if exists). One of TextInput ",(0,r.jsx)(t.a,{href:"textinput#keyboardtype",children:"keyboardTypes"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"alert#alertoptions",children:"AlertOptions"})}),(0,r.jsx)(t.td,{children:"An optional Alert configuration."})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"type-definitions",children:"Type Definitions"}),"\n",(0,r.jsxs)(t.h3,{id:"alertbuttonstyle-ios",children:["AlertButtonStyle ",(0,r.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,r.jsx)(t.p,{children:"An iOS Alert button style."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.th,{children:"Type"})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"enum"})})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Constants:"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'default'"})}),(0,r.jsx)(t.td,{children:"Default button style."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'cancel'"})}),(0,r.jsx)(t.td,{children:"Cancel button style."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'destructive'"})}),(0,r.jsx)(t.td,{children:"Destructive button style."})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.h3,{id:"alerttype-ios",children:["AlertType ",(0,r.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,r.jsx)(t.p,{children:"An iOS Alert type."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.th,{children:"Type"})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"enum"})})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Constants:"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'default'"})}),(0,r.jsx)(t.td,{children:"Default alert with no inputs"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'plain-text'"})}),(0,r.jsx)(t.td,{children:"Plain text input alert"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'secure-text'"})}),(0,r.jsx)(t.td,{children:"Secure text input alert"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'login-password'"})}),(0,r.jsx)(t.td,{children:"Login and password alert"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"alertbutton",children:"AlertButton"}),"\n",(0,r.jsx)(t.p,{children:"An object describing the configuration of a button in the alert."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.th,{children:"Type"})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"array of objects"})})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Objects properties:"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Button label."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"onPress"}),(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:"Callback function when button is pressed."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["style ",(0,r.jsx)("div",{class:"label ios",children:"iOS"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"alert#alertbuttonstyle-ios",children:"AlertButtonStyle"})}),(0,r.jsx)(t.td,{children:"Button style, on Android this property will be ignored."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["isPreferred ",(0,r.jsx)("div",{class:"label ios",children:"iOS"})]}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"Whether button should be emphasized, on Android this property will be ignored."})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"alertoptions",children:"AlertOptions"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.th,{children:"Type"})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"object"})})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Properties:"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["cancelable ",(0,r.jsx)("div",{class:"label android",children:"Android"})]}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"Defines if alert can be dismissed by tapping outside of the alert box."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["userInterfaceStyle ",(0,r.jsx)("div",{class:"label ios",children:"iOS"})]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:["The interface style used for the alert, can be set to ",(0,r.jsx)(t.code,{children:"light"})," or ",(0,r.jsx)(t.code,{children:"dark"}),", otherwise the default system style will be used."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["onDismiss ",(0,r.jsx)("div",{class:"label android",children:"Android"})]}),(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:"Callback function fired when alert has been dismissed."})]})]})]})]})}const x=function(e={}){const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},86386:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(27378),l=n(38944);const s={tabItem:"tabItem_wHwb"};var a=Object.defineProperty,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))o.call(t,n)&&c(e,n,t[n]);return e};function u({children:e,hidden:t,className:n}){return r.createElement("div",h({role:"tabpanel",className:(0,l.Z)(s.tabItem,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>q});var r=n(27378),l=n(38944),s=n(12112),a=n(3620),i=n(69490),d=n(14953),o=n(27886),c=n(7106),h=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))j.call(t,n)&&C(e,n,t[n]);if(x)for(var n of x(t))b.call(t,n)&&C(e,n,t[n]);return e},y=(e,t)=>u(e,p(t));function m(e){var t,n;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}function v(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return m(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g({value:e,tabValues:t}){return t.some((t=>t.value===e))}function A({queryString:e=!1,groupId:t}){const n=(0,a.k6)(),l=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,d._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace(y(f({},n.location),{search:t.toString()}))}),[l,n])]}function D(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,s=v(e),[a,d]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=null!=(n=t.find((e=>e.default)))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[o,h]=A({queryString:n,groupId:l}),[u,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,l]=(0,c.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:l}),x=(()=>{const e=null!=o?o:u;return g({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{x&&d(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),p(e)}),[h,p,s]),tabValues:s}}var B=n(14185);const w={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var O=Object.defineProperty,k=Object.defineProperties,E=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,I=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&I(e,n,t[n]);if(S)for(var n of S(t))P.call(t,n)&&I(e,n,t[n]);return e},_=(e,t)=>k(e,E(t));function N({className:e,block:t,selectedValue:n,selectValue:a,tabValues:i}){const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=d.indexOf(t),l=i[r].value;l!==n&&(o(t),a(l))},h=e=>{var t,n;let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;r=null!=(t=d[n])?t:d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;r=null!=(n=d[t])?n:d[d.length-1];break}}null==r||r.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:s})=>r.createElement("li",_(V({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>d.push(e),onKeyDown:h,onClick:c},s),{className:(0,l.Z)("tabs__item",w.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function M({lazy:e,children:t,selectedValue:n}){const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function L(e){const t=D(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",w.tabList)},r.createElement(N,V(V({},e),t)),r.createElement(M,V(V({},e),t)))}function q(e){const t=(0,B.Z)();return r.createElement(L,V({key:String(t)},e),m(e.children))}},11674:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(63445);const l=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),a={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:l?"macos":s?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:l?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,n)=>{var r=n(27378),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var r,s={},o=null,c=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:l,type:e,key:o,ref:c,props:s,_owner:i.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>s});var r=n(27378);const l=r.createContext({});function s(e){const t=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||a:s(e),r.createElement(l.Provider,{value:i},t)}}}]);