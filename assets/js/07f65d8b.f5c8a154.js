/*! For license information please see 07f65d8b.f5c8a154.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[29250],{57989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>C,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(24246),r=t(71670),i=t(48375),o=t(86386),l=t(11674);const s={id:"improvingux",title:"Improving User Experience"},C=void 0,c={id:"improvingux",title:"Improving User Experience",description:"Configure text inputs",source:"@site/versioned_docs/version-0.71/improvingux.md",sourceDirName:".",slug:"/improvingux",permalink:"/docs/0.71/improvingux",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/improvingux.md",tags:[],version:"0.71",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"improvingux",title:"Improving User Experience"}},u={},d=[{value:"Configure text inputs",id:"configure-text-inputs",level:2},{value:"Manage layout when keyboard is visible",id:"manage-layout-when-keyboard-is-visible",level:2},{value:"Make tappable areas larger",id:"make-tappable-areas-larger",level:2},{value:"Use Android Ripple",id:"use-android-ripple",level:2},{value:"Screen orientation lock",id:"screen-orientation-lock",level:2}];function p(e){const n=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",code:"code",div:"div",h1:"h1"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"configure-text-inputs",children:"Configure text inputs"}),"\n",(0,a.jsx)(n.p,{children:"Entering text on touch phone is a challenge - small screen, software keyboard. But based on what kind of data you need, you can make it easier by properly configuring the text inputs:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Focus the first field automatically"}),"\n",(0,a.jsx)(n.li,{children:"Use placeholder text as an example of expected data format"}),"\n",(0,a.jsx)(n.li,{children:"Enable or disable autocapitalization and autocorrect"}),"\n",(0,a.jsx)(n.li,{children:"Choose keyboard type (e.g. email, numeric)"}),"\n",(0,a.jsx)(n.li,{children:"Make sure the return button focuses the next field or submits the form"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Check out ",(0,a.jsxs)(n.a,{href:"/docs/0.71/textinput",children:[(0,a.jsx)(n.code,{children:"TextInput"})," docs"]})," for more configuration options."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"language",queryString:!0,defaultValue:l.Z.defaultSnackLanguage,values:l.Z.snackLanguages,children:[(0,a.jsx)(o.Z,{value:"javascript",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"TextInput form example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.js%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%2C%20useRef%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Text%2C%5Cn%20%20StatusBar%2C%5Cn%20%20TextInput%2C%5Cn%20%20View%2C%5Cn%20%20StyleSheet%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20emailInput%20%3D%20useRef(null)%3B%5Cn%20%20const%20%5Bname%2C%20setName%5D%20%3D%20useState('')%3B%5Cn%20%20const%20%5Bemail%2C%20setEmail%5D%20%3D%20useState('')%3B%5Cn%5Cn%20%20const%20submit%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Alert.alert(%5Cn%20%20%20%20%20%20%60Welcome%2C%20%24%7Bname%7D!%20Confirmation%20email%20has%20been%20sent%20to%20%24%7Bemail%7D%60%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CStatusBar%20barStyle%3D%5C%22light-content%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.header%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.description%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20This%20demo%20shows%20how%20using%20available%20TextInput%20customizations%20can%20make%5Cn%20%20%20%20%20%20%20%20%20%20forms%20much%20easier%20to%20use.%20Try%20completing%20the%20form%20and%20notice%20that%5Cn%20%20%20%20%20%20%20%20%20%20different%20fields%20have%20specific%20optimizations%20and%20the%20return%20key%5Cn%20%20%20%20%20%20%20%20%20%20changes%20from%20focusing%20next%20input%20to%20submitting%20the%20form.%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20style%3D%7Bstyles.input%7D%5Cn%20%20%20%20%20%20%20%20value%3D%7Bname%7D%5Cn%20%20%20%20%20%20%20%20onChangeText%3D%7Btext%20%3D%3E%20setName(text)%7D%5Cn%20%20%20%20%20%20%20%20placeholder%3D%5C%22Full%20Name%5C%22%5Cn%20%20%20%20%20%20%20%20autoFocus%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%20%20autoCapitalize%3D%5C%22words%5C%22%5Cn%20%20%20%20%20%20%20%20autoCorrect%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%20%20keyboardType%3D%5C%22default%5C%22%5Cn%20%20%20%20%20%20%20%20returnKeyType%3D%5C%22next%5C%22%5Cn%20%20%20%20%20%20%20%20onSubmitEditing%3D%7B()%20%3D%3E%20emailInput.current.focus()%7D%5Cn%20%20%20%20%20%20%20%20blurOnSubmit%3D%7Bfalse%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20style%3D%7Bstyles.input%7D%5Cn%20%20%20%20%20%20%20%20value%3D%7Bemail%7D%5Cn%20%20%20%20%20%20%20%20onChangeText%3D%7Btext%20%3D%3E%20setEmail(text)%7D%5Cn%20%20%20%20%20%20%20%20ref%3D%7BemailInput%7D%5Cn%20%20%20%20%20%20%20%20placeholder%3D%5C%22email%40example.com%5C%22%5Cn%20%20%20%20%20%20%20%20autoCapitalize%3D%5C%22none%5C%22%5Cn%20%20%20%20%20%20%20%20autoCorrect%3D%7Bfalse%7D%5Cn%20%20%20%20%20%20%20%20keyboardType%3D%5C%22email-address%5C%22%5Cn%20%20%20%20%20%20%20%20returnKeyType%3D%5C%22send%5C%22%5Cn%20%20%20%20%20%20%20%20onSubmitEditing%3D%7Bsubmit%7D%5Cn%20%20%20%20%20%20%20%20blurOnSubmit%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20paddingTop%3A%2064%2C%5Cn%20%20%20%20padding%3A%2020%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23282c34'%2C%5Cn%20%20%7D%2C%5Cn%20%20description%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20color%3A%20'white'%2C%5Cn%20%20%7D%2C%5Cn%20%20input%3A%20%7B%5Cn%20%20%20%20margin%3A%2020%2C%5Cn%20%20%20%20marginBottom%3A%200%2C%5Cn%20%20%20%20height%3A%2034%2C%5Cn%20%20%20%20paddingHorizontal%3A%2010%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20borderColor%3A%20'%23ccc'%2C%5Cn%20%20%20%20borderWidth%3A%201%2C%5Cn%20%20%20%20fontSize%3A%2016%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(o.Z,{value:"typescript",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"TextInput form example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%2C%20useRef%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Text%2C%5Cn%20%20StatusBar%2C%5Cn%20%20TextInput%2C%5Cn%20%20View%2C%5Cn%20%20StyleSheet%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20emailInput%20%3D%20useRef%3CTextInput%3E(null)%3B%5Cn%20%20const%20%5Bname%2C%20setName%5D%20%3D%20useState('')%3B%5Cn%20%20const%20%5Bemail%2C%20setEmail%5D%20%3D%20useState('')%3B%5Cn%5Cn%20%20const%20submit%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Alert.alert(%5Cn%20%20%20%20%20%20%60Welcome%2C%20%24%7Bname%7D!%20Confirmation%20email%20has%20been%20sent%20to%20%24%7Bemail%7D%60%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CStatusBar%20barStyle%3D%5C%22light-content%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.header%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.description%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20This%20demo%20shows%20how%20using%20available%20TextInput%20customizations%20can%20make%5Cn%20%20%20%20%20%20%20%20%20%20forms%20much%20easier%20to%20use.%20Try%20completing%20the%20form%20and%20notice%20that%5Cn%20%20%20%20%20%20%20%20%20%20different%20fields%20have%20specific%20optimizations%20and%20the%20return%20key%5Cn%20%20%20%20%20%20%20%20%20%20changes%20from%20focusing%20next%20input%20to%20submitting%20the%20form.%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20style%3D%7Bstyles.input%7D%5Cn%20%20%20%20%20%20%20%20value%3D%7Bname%7D%5Cn%20%20%20%20%20%20%20%20onChangeText%3D%7Btext%20%3D%3E%20setName(text)%7D%5Cn%20%20%20%20%20%20%20%20placeholder%3D%5C%22Full%20Name%5C%22%5Cn%20%20%20%20%20%20%20%20autoFocus%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%20%20autoCapitalize%3D%5C%22words%5C%22%5Cn%20%20%20%20%20%20%20%20autoCorrect%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%20%20keyboardType%3D%5C%22default%5C%22%5Cn%20%20%20%20%20%20%20%20returnKeyType%3D%5C%22next%5C%22%5Cn%20%20%20%20%20%20%20%20onSubmitEditing%3D%7B()%20%3D%3E%20emailInput.current%3F.focus()%7D%5Cn%20%20%20%20%20%20%20%20blurOnSubmit%3D%7Bfalse%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20style%3D%7Bstyles.input%7D%5Cn%20%20%20%20%20%20%20%20value%3D%7Bemail%7D%5Cn%20%20%20%20%20%20%20%20onChangeText%3D%7Btext%20%3D%3E%20setEmail(text)%7D%5Cn%20%20%20%20%20%20%20%20ref%3D%7BemailInput%7D%5Cn%20%20%20%20%20%20%20%20placeholder%3D%5C%22email%40example.com%5C%22%5Cn%20%20%20%20%20%20%20%20autoCapitalize%3D%5C%22none%5C%22%5Cn%20%20%20%20%20%20%20%20autoCorrect%3D%7Bfalse%7D%5Cn%20%20%20%20%20%20%20%20keyboardType%3D%5C%22email-address%5C%22%5Cn%20%20%20%20%20%20%20%20returnKeyType%3D%5C%22send%5C%22%5Cn%20%20%20%20%20%20%20%20onSubmitEditing%3D%7Bsubmit%7D%5Cn%20%20%20%20%20%20%20%20blurOnSubmit%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20paddingTop%3A%2064%2C%5Cn%20%20%20%20padding%3A%2020%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23282c34'%2C%5Cn%20%20%7D%2C%5Cn%20%20description%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20color%3A%20'white'%2C%5Cn%20%20%7D%2C%5Cn%20%20input%3A%20%7B%5Cn%20%20%20%20margin%3A%2020%2C%5Cn%20%20%20%20marginBottom%3A%200%2C%5Cn%20%20%20%20height%3A%2034%2C%5Cn%20%20%20%20paddingHorizontal%3A%2010%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20borderColor%3A%20'%23ccc'%2C%5Cn%20%20%20%20borderWidth%3A%201%2C%5Cn%20%20%20%20fontSize%3A%2016%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsx)(n.h2,{id:"manage-layout-when-keyboard-is-visible",children:"Manage layout when keyboard is visible"}),"\n",(0,a.jsxs)(n.p,{children:["Software keyboard takes almost half of the screen. If you have interactive elements that can get covered by the keyboard, make sure they are still accessible by using the ",(0,a.jsxs)(n.a,{href:"/docs/0.71/keyboardavoidingview",children:[(0,a.jsx)(n.code,{children:"KeyboardAvoidingView"})," component"]}),"."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"language",queryString:!0,defaultValue:l.Z.defaultSnackLanguage,values:l.Z.snackLanguages,children:[(0,a.jsx)(o.Z,{value:"javascript",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"KeyboardAvoidingView example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.js%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%2C%20useRef%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Text%2C%5Cn%20%20Button%2C%5Cn%20%20StatusBar%2C%5Cn%20%20TextInput%2C%5Cn%20%20KeyboardAvoidingView%2C%5Cn%20%20View%2C%5Cn%20%20StyleSheet%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20emailInput%20%3D%20useRef(null)%3B%5Cn%20%20const%20%5Bemail%2C%20setEmail%5D%20%3D%20useState('')%3B%5Cn%5Cn%20%20const%20submit%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20emailInput.current.blur()%3B%5Cn%20%20%20%20Alert.alert(%60Confirmation%20email%20has%20been%20sent%20to%20%24%7Bemail%7D%60)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CStatusBar%20barStyle%3D%5C%22light-content%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.header%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.description%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20This%20demo%20shows%20how%20to%20avoid%20covering%20important%20UI%20elements%20with%20the%5Cn%20%20%20%20%20%20%20%20%20%20software%20keyboard.%20Focus%20the%20email%20input%20below%20and%20notice%20that%20the%5Cn%20%20%20%20%20%20%20%20%20%20Sign%20Up%20button%20and%20the%20text%20adjusted%20positions%20to%20make%20sure%20they%20are%5Cn%20%20%20%20%20%20%20%20%20%20not%20hidden%20under%20the%20keyboard.%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CKeyboardAvoidingView%20behavior%3D%5C%22padding%5C%22%20style%3D%7Bstyles.form%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.input%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7Bemail%7D%5Cn%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7Btext%20%3D%3E%20setEmail(text)%7D%5Cn%20%20%20%20%20%20%20%20%20%20ref%3D%7BemailInput%7D%5Cn%20%20%20%20%20%20%20%20%20%20placeholder%3D%5C%22email%40example.com%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20autoCapitalize%3D%5C%22none%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20autoCorrect%3D%7Bfalse%7D%5Cn%20%20%20%20%20%20%20%20%20%20keyboardType%3D%5C%22email-address%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20returnKeyType%3D%5C%22send%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onSubmitEditing%3D%7Bsubmit%7D%5Cn%20%20%20%20%20%20%20%20%20%20blurOnSubmit%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Sign%20Up%5C%22%20onPress%3D%7Bsubmit%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.legal%7D%3ESome%20important%20legal%20fine%20print%20here%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FKeyboardAvoidingView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20paddingTop%3A%2064%2C%5Cn%20%20%20%20padding%3A%2020%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23282c34'%2C%5Cn%20%20%7D%2C%5Cn%20%20description%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20color%3A%20'white'%2C%5Cn%20%20%7D%2C%5Cn%20%20input%3A%20%7B%5Cn%20%20%20%20margin%3A%2020%2C%5Cn%20%20%20%20marginBottom%3A%200%2C%5Cn%20%20%20%20height%3A%2034%2C%5Cn%20%20%20%20paddingHorizontal%3A%2010%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20borderColor%3A%20'%23ccc'%2C%5Cn%20%20%20%20borderWidth%3A%201%2C%5Cn%20%20%20%20fontSize%3A%2016%2C%5Cn%20%20%7D%2C%5Cn%20%20legal%3A%20%7B%5Cn%20%20%20%20margin%3A%2010%2C%5Cn%20%20%20%20color%3A%20'%23333'%2C%5Cn%20%20%20%20fontSize%3A%2012%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20form%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'space-between'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(o.Z,{value:"typescript",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"KeyboardAvoidingView example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%2C%20useRef%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Text%2C%5Cn%20%20Button%2C%5Cn%20%20StatusBar%2C%5Cn%20%20TextInput%2C%5Cn%20%20KeyboardAvoidingView%2C%5Cn%20%20View%2C%5Cn%20%20StyleSheet%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20emailInput%20%3D%20useRef%3CTextInput%3E(null)%3B%5Cn%20%20const%20%5Bemail%2C%20setEmail%5D%20%3D%20useState('')%3B%5Cn%5Cn%20%20const%20submit%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20emailInput.current%3F.blur()%3B%5Cn%20%20%20%20Alert.alert(%60Confirmation%20email%20has%20been%20sent%20to%20%24%7Bemail%7D%60)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CStatusBar%20barStyle%3D%5C%22light-content%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.header%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.description%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20This%20demo%20shows%20how%20to%20avoid%20covering%20important%20UI%20elements%20with%20the%5Cn%20%20%20%20%20%20%20%20%20%20software%20keyboard.%20Focus%20the%20email%20input%20below%20and%20notice%20that%20the%5Cn%20%20%20%20%20%20%20%20%20%20Sign%20Up%20button%20and%20the%20text%20adjusted%20positions%20to%20make%20sure%20they%20are%5Cn%20%20%20%20%20%20%20%20%20%20not%20hidden%20under%20the%20keyboard.%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CKeyboardAvoidingView%20behavior%3D%5C%22padding%5C%22%20style%3D%7Bstyles.form%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.input%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7Bemail%7D%5Cn%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7Btext%20%3D%3E%20setEmail(text)%7D%5Cn%20%20%20%20%20%20%20%20%20%20ref%3D%7BemailInput%7D%5Cn%20%20%20%20%20%20%20%20%20%20placeholder%3D%5C%22email%40example.com%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20autoCapitalize%3D%5C%22none%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20autoCorrect%3D%7Bfalse%7D%5Cn%20%20%20%20%20%20%20%20%20%20keyboardType%3D%5C%22email-address%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20returnKeyType%3D%5C%22send%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onSubmitEditing%3D%7Bsubmit%7D%5Cn%20%20%20%20%20%20%20%20%20%20blurOnSubmit%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Sign%20Up%5C%22%20onPress%3D%7Bsubmit%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.legal%7D%3ESome%20important%20legal%20fine%20print%20here%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FKeyboardAvoidingView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20paddingTop%3A%2064%2C%5Cn%20%20%20%20padding%3A%2020%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23282c34'%2C%5Cn%20%20%7D%2C%5Cn%20%20description%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20color%3A%20'white'%2C%5Cn%20%20%7D%2C%5Cn%20%20input%3A%20%7B%5Cn%20%20%20%20margin%3A%2020%2C%5Cn%20%20%20%20marginBottom%3A%200%2C%5Cn%20%20%20%20height%3A%2034%2C%5Cn%20%20%20%20paddingHorizontal%3A%2010%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20borderColor%3A%20'%23ccc'%2C%5Cn%20%20%20%20borderWidth%3A%201%2C%5Cn%20%20%20%20fontSize%3A%2016%2C%5Cn%20%20%7D%2C%5Cn%20%20legal%3A%20%7B%5Cn%20%20%20%20margin%3A%2010%2C%5Cn%20%20%20%20color%3A%20'%23333'%2C%5Cn%20%20%20%20fontSize%3A%2012%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20form%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'space-between'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsx)(n.h2,{id:"make-tappable-areas-larger",children:"Make tappable areas larger"}),"\n",(0,a.jsxs)(n.p,{children:["On mobile phones it's hard to be very precise when pressing buttons. Make sure all interactive elements are 44x44 or larger. One way to do this is to leave enough space for the element, ",(0,a.jsx)(n.code,{children:"padding"}),", ",(0,a.jsx)(n.code,{children:"minWidth"})," and ",(0,a.jsx)(n.code,{children:"minHeight"})," style values can be useful for that. Alternatively, you can use ",(0,a.jsxs)(n.a,{href:"/docs/0.71/touchablewithoutfeedback#hitslop",children:[(0,a.jsx)(n.code,{children:"hitSlop"})," prop"]})," to increase interactive area without affecting the layout. Here's a demo:"]}),"\n",(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"HitSlop example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Text%2C%5Cn%20%20StatusBar%2C%5Cn%20%20TouchableOpacity%2C%5Cn%20%20View%2C%5Cn%20%20StyleSheet%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CStatusBar%20barStyle%3D%5C%22light-content%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.header%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.description%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20This%20demo%20shows%20how%20using%20hitSlop%20can%20make%20interactive%20elements%20much%5Cn%20%20%20%20%20%20%20%20%20%20easier%20to%20tap%20without%20changing%20their%20layout%20and%20size.%20Try%20pressing%5Cn%20%20%20%20%20%20%20%20%20%20each%20button%20quickly%20multiple%20times%20and%20notice%20which%20one%20is%20easier%20to%5Cn%20%20%20%20%20%20%20%20%20%20hit.%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.content%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3EWithout%20hitSlop%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.separator%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.preview%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20%20%20hitSlop%3D%7B%7Btop%3A%2020%2C%20left%3A%2020%2C%20bottom%3A%2020%2C%20right%3A%2020%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3EWith%20hitSlop%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20paddingTop%3A%2064%2C%5Cn%20%20%20%20padding%3A%2020%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23282c34'%2C%5Cn%20%20%7D%2C%5Cn%20%20description%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20color%3A%20'white'%2C%5Cn%20%20%7D%2C%5Cn%20%20content%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20color%3A%20'%23336699'%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%20%20borderColor%3A%20'%23ddd'%2C%5Cn%20%20%20%20borderWidth%3A%201%2C%5Cn%20%20%7D%2C%5Cn%20%20separator%3A%20%7B%5Cn%20%20%20%20height%3A%2050%2C%5Cn%20%20%7D%2C%5Cn%20%20preview%3A%20%7B%5Cn%20%20%20%20padding%3A%2020%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23f6f6f6'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,a.jsx)(n.h2,{id:"use-android-ripple",children:"Use Android Ripple"}),"\n",(0,a.jsxs)(n.p,{children:["Android API 21+ uses the material design ripple to provide user with feedback when they touch an interactable area on the screen. React Native exposes this through the ",(0,a.jsxs)(n.a,{href:"/docs/0.71/touchablenativefeedback",children:[(0,a.jsx)(n.code,{children:"TouchableNativeFeedback"})," component"]}),". Using this touchable effect instead of opacity or highlight will often make your app feel much more fitting on the platform. That said, you need to be careful when using it because it doesn't work on iOS or on Android API < 21, so you will need to fallback to using one of the other Touchable components on iOS. You can use a library like ",(0,a.jsx)(n.a,{href:"https://github.com/react-community/react-native-platform-touchable",children:"react-native-platform-touchable"})," to handle the platform differences for you."]}),"\n",(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"Android Ripple example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20TouchableNativeFeedback%2C%5Cn%20%20TouchableOpacity%2C%5Cn%20%20TouchableHighlight%2C%5Cn%20%20Platform%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%20%20StyleSheet%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20SUPPORTS_NATIVE_FEEDBACK%20%3D%5Cn%20%20Platform.OS%20%3D%3D%3D%20'android'%20%26%26%20Platform.Version%20%3E%3D%2021%3B%5Cn%5Cnconst%20noop%20%3D%20()%20%3D%3E%20%7B%7D%3B%5Cnconst%20defaultHitSlop%20%3D%20%7Btop%3A%2015%2C%20bottom%3A%2015%2C%20right%3A%2015%2C%20left%3A%2015%7D%3B%5Cn%5Cnconst%20ButtonsWithNativeFeedback%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%3CTouchableNativeFeedback%5Cn%20%20%20%20%20%20onPress%3D%7Bnoop%7D%5Cn%20%20%20%20%20%20background%3D%7BTouchableNativeFeedback.Ripple('%2306bcee'%2C%20false)%7D%5Cn%20%20%20%20%20%20hitSlop%3D%7BdefaultHitSlop%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EThis%20is%20a%20ripple%20respecting%20borders%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FTouchableNativeFeedback%3E%5Cn%20%20%20%20%3CTouchableNativeFeedback%5Cn%20%20%20%20%20%20onPress%3D%7Bnoop%7D%5Cn%20%20%20%20%20%20background%3D%7BTouchableNativeFeedback.Ripple('%2306bcee'%2C%20true)%7D%5Cn%20%20%20%20%20%20hitSlop%3D%7BdefaultHitSlop%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20This%20is%20ripple%20without%20borders%2C%20this%20is%20more%20useful%20for%20icons%2C%20eg%3A%20in%5Cn%20%20%20%20%20%20%20%20%20%20tab%20bar%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FTouchableNativeFeedback%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20Buttons%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20style%3D%7Bstyles.button%7D%5Cn%20%20%20%20%20%20onPress%3D%7Bnoop%7D%5Cn%20%20%20%20%20%20hitSlop%3D%7BdefaultHitSlop%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EThis%20is%20opacity%3C%2FText%3E%5Cn%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%3CTouchableHighlight%5Cn%20%20%20%20%20%20style%3D%7Bstyles.button%7D%5Cn%20%20%20%20%20%20onPress%3D%7Bnoop%7D%5Cn%20%20%20%20%20%20hitSlop%3D%7BdefaultHitSlop%7D%5Cn%20%20%20%20%20%20underlayColor%3D%5C%22%2306bcee%5C%22%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EThis%20is%20highlight%3C%2FText%3E%5Cn%20%20%20%20%3C%2FTouchableHighlight%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%7BSUPPORTS_NATIVE_FEEDBACK%20%3F%20%3CButtonsWithNativeFeedback%20%2F%3E%20%3A%20%3CButtons%20%2F%3E%7D%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20paddingTop%3A%2064%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23fff'%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2020%2C%5Cn%20%20%20%20color%3A%20'%23fff'%2C%5Cn%20%20%20%20fontWeight%3A%20'bold'%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20padding%3A%2025%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23000'%2C%5Cn%20%20%20%20marginBottom%3A%2030%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,a.jsx)(n.h2,{id:"screen-orientation-lock",children:"Screen orientation lock"}),"\n",(0,a.jsxs)(n.p,{children:["Multiple screen orientations should work fine by default unless you're using ",(0,a.jsx)(n.code,{children:"Dimensions"})," API and don't handle orientation changes. If you don't want to support multiple screen orientations, you can lock the screen orientation to either portrait or landscape."]}),"\n",(0,a.jsxs)(n.p,{children:["On iOS, in the General tab and Deployment Info section of Xcode enable the Device Orientation you want to support (ensure you have selected iPhone from the Devices menu when making the changes). For Android, open the AndroidManifest.xml file and within the activity element add ",(0,a.jsx)(n.code,{children:"'android:screenOrientation=\"portrait\"'"})," to lock to portrait or ",(0,a.jsx)(n.code,{children:"'android:screenOrientation=\"landscape\"'"})," to lock to landscape."]}),"\n",(0,a.jsx)(n.h1,{id:"learn-more",children:"Learn more"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://material.io/",children:"Material Design"})," and ",(0,a.jsx)(n.a,{href:"https://developer.apple.com/ios/human-interface-guidelines/overview/design-principles/",children:"Human Interface Guidelines"})," are great resources for learning more about designing for mobile platforms."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(p,e)})):p(e)}},86386:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(27378),r=t(38944);const i={tabItem:"tabItem_wHwb"};var o=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))C.call(n,t)&&c(e,t,n[t]);return e};function d({children:e,hidden:n,className:t}){return a.createElement("div",u({role:"tabpanel",className:(0,r.Z)(i.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>_});var a=t(27378),r=t(38944),i=t(12112),o=t(3620),l=t(69490),s=t(14953),C=t(27886),c=t(7106),u=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,b=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&b(e,t,n[t]);if(h)for(var t of h(n))D.call(n,t)&&b(e,t,n[t]);return e},y=(e,n)=>d(e,p(n));function g(e){var n,t;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function B(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return g(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}(t);return function(e){const n=(0,C.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function v({value:e,tabValues:n}){return n.some((n=>n.value===e))}function A({queryString:e=!1,groupId:n}){const t=(0,o.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(y(f({},t.location),{search:n.toString()}))}),[r,t])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=B(e),[o,s]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!v({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[C,u]=A({queryString:t,groupId:r}),[d,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,c.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),h=(()=>{const e=null!=C?C:d;return v({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!v({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var E=t(14185);const w={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var k=Object.defineProperty,S=Object.defineProperties,T=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,O=(e,n,t)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,I=(e,n)=>{for(var t in n||(n={}))F.call(n,t)&&O(e,t,n[t]);if(j)for(var t of j(n))V.call(n,t)&&O(e,t,n[t]);return e},P=(e,n)=>S(e,T(n));function z({className:e,block:n,selectedValue:t,selectValue:o,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:C}=(0,i.o5)(),c=e=>{const n=e.currentTarget,a=s.indexOf(n),r=l[a].value;r!==t&&(C(n),o(r))},u=e=>{var n,t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=null!=(n=s[t])?n:s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;a=null!=(t=s[n])?t:s[s.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e)},l.map((({value:e,label:n,attributes:i})=>a.createElement("li",P(I({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>s.push(e),onKeyDown:u,onClick:c},i),{className:(0,r.Z)("tabs__item",w.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function N({lazy:e,children:n,selectedValue:t}){const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function R(e){const n=x(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",w.tabList)},a.createElement(z,I(I({},e),n)),a.createElement(N,I(I({},e),n)))}function _(e){const n=(0,E.Z)();return a.createElement(R,I({key:String(n)},e),g(e.children))}},11674:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,t)=>{var a=t(27378),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function C(e,n,t){var a,i={},C=null,c=null;for(a in void 0!==t&&(C=""+t),void 0!==n.key&&(C=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,a)&&!s.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===i[a]&&(i[a]=n[a]);return{$$typeof:r,type:e,key:C,ref:c,props:i,_owner:l.current}}n.Fragment=i,n.jsx=C,n.jsxs=C},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>i});var a=t(27378);const r=a.createContext({});function i(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||o:i(e),a.createElement(r.Provider,{value:l},n)}}}]);