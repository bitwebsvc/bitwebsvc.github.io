/*! For license information please see 4b1b6b6d.67ea3120.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[98110],{20122:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>C,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=s(24246),i=s(71670),t=s(48375),a=s(86386),o=s(11674);const l={id:"permissionsandroid",title:"PermissionsAndroid"},d=void 0,c={id:"permissionsandroid",title:"PermissionsAndroid",description:"Project with Native Code Required",source:"@site/versioned_docs/version-0.70/permissionsandroid.md",sourceDirName:".",slug:"/permissionsandroid",permalink:"/docs/0.70/permissionsandroid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/permissionsandroid.md",tags:[],version:"0.70",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"permissionsandroid",title:"PermissionsAndroid"},sidebar:"api",previous:{title:"BackHandler",permalink:"/docs/0.70/backhandler"},next:{title:"ToastAndroid",permalink:"/docs/0.70/toastandroid"}},u={},h=[{value:"Example",id:"example",level:3},{value:"Permissions that require prompting the user",id:"permissions-that-require-prompting-the-user",level:3},{value:"Result strings for requesting permissions",id:"result-strings-for-requesting-permissions",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>constructor()</code>",id:"constructor",level:3},{value:"<code>check()</code>",id:"check",level:3},{value:"<code>request()</code>",id:"request",level:3},{value:"<code>requestMultiple()</code>",id:"requestmultiple",level:3}];function p(e){const n=Object.assign({p:"p",code:"code",h3:"h3",div:"div",ul:"ul",li:"li",hr:"hr",h1:"h1",h2:"h2",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"banner-native-code-required",children:[(0,r.jsx)("h3",{children:"Project with Native Code Required"}),(0,r.jsx)("p",{children:(0,r.jsxs)(n.p,{children:["The following section only applies to projects with native code exposed. If you are using the managed Expo workflow, see the guide on ",(0,r.jsx)("a",{href:"https://docs.expo.dev/guides/permissions/",children:"Permissions"})," in the Expo documentation for the appropriate alternative."]})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PermissionsAndroid"}),' provides access to Android M\'s new permissions model. The so-called "normal" permissions are granted by default when the application is installed as long as they appear in ',(0,r.jsx)(n.code,{children:"AndroidManifest.xml"}),'. However, "dangerous" permissions require a dialog prompt. You should use this module for those permissions.']}),"\n",(0,r.jsxs)(n.p,{children:["On devices before SDK version 23, the permissions are automatically granted if they appear in the manifest, so ",(0,r.jsx)(n.code,{children:"check"})," should always result to ",(0,r.jsx)(n.code,{children:"true"})," and ",(0,r.jsx)(n.code,{children:"request"})," should always resolve to ",(0,r.jsx)(n.code,{children:"PermissionsAndroid.RESULTS.GRANTED"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If a user has previously turned off a permission that you prompt for, the OS will advise your app to show a rationale for needing the permission. The optional ",(0,r.jsx)(n.code,{children:"rationale"})," argument will show a dialog prompt only if necessary - otherwise the normal permission prompt will appear."]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.Z,{groupId:"syntax",queryString:!0,defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,children:[(0,r.jsx)(a.Z,{value:"functional",children:(0,r.jsx)(n.div,{class:"snack-player","data-snack-name":"PermissionsAndroid Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20PermissionsAndroid%2C%20SafeAreaView%2C%20StatusBar%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20requestCameraPermission%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20try%20%7B%5Cn%20%20%20%20const%20granted%20%3D%20await%20PermissionsAndroid.request(%5Cn%20%20%20%20%20%20PermissionsAndroid.PERMISSIONS.CAMERA%2C%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20%5C%22Cool%20Photo%20App%20Camera%20Permission%5C%22%2C%5Cn%20%20%20%20%20%20%20%20message%3A%5Cn%20%20%20%20%20%20%20%20%20%20%5C%22Cool%20Photo%20App%20needs%20access%20to%20your%20camera%20%5C%22%20%2B%5Cn%20%20%20%20%20%20%20%20%20%20%5C%22so%20you%20can%20take%20awesome%20pictures.%5C%22%2C%5Cn%20%20%20%20%20%20%20%20buttonNeutral%3A%20%5C%22Ask%20Me%20Later%5C%22%2C%5Cn%20%20%20%20%20%20%20%20buttonNegative%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20buttonPositive%3A%20%5C%22OK%5C%22%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20if%20(granted%20%3D%3D%3D%20PermissionsAndroid.RESULTS.GRANTED)%20%7B%5Cn%20%20%20%20%20%20console.log(%5C%22You%20can%20use%20the%20camera%5C%22)%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20console.log(%5C%22Camera%20permission%20denied%5C%22)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%20catch%20(err)%20%7B%5Cn%20%20%20%20console.warn(err)%3B%5Cn%20%20%7D%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.item%7D%3ETry%20permissions%3C%2FText%3E%5Cn%20%20%20%20%3CButton%20title%3D%5C%22request%20permissions%5C%22%20onPress%3D%7BrequestCameraPermission%7D%20%2F%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%20StatusBar.currentHeight%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23ecf0f1%5C%22%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20item%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,r.jsx)(a.Z,{value:"classical",children:(0,r.jsx)(n.div,{class:"snack-player","data-snack-name":"PermissionsAndroid Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20PermissionsAndroid%2C%20SafeAreaView%2C%20StatusBar%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20requestCameraPermission%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20try%20%7B%5Cn%20%20%20%20const%20granted%20%3D%20await%20PermissionsAndroid.request(%5Cn%20%20%20%20%20%20PermissionsAndroid.PERMISSIONS.CAMERA%2C%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20%5C%22Cool%20Photo%20App%20Camera%20Permission%5C%22%2C%5Cn%20%20%20%20%20%20%20%20message%3A%5Cn%20%20%20%20%20%20%20%20%20%20%5C%22Cool%20Photo%20App%20needs%20access%20to%20your%20camera%20%5C%22%20%2B%5Cn%20%20%20%20%20%20%20%20%20%20%5C%22so%20you%20can%20take%20awesome%20pictures.%5C%22%2C%5Cn%20%20%20%20%20%20%20%20buttonNeutral%3A%20%5C%22Ask%20Me%20Later%5C%22%2C%5Cn%20%20%20%20%20%20%20%20buttonNegative%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20buttonPositive%3A%20%5C%22OK%5C%22%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20if%20(granted%20%3D%3D%3D%20PermissionsAndroid.RESULTS.GRANTED)%20%7B%5Cn%20%20%20%20%20%20console.log(%5C%22You%20can%20use%20the%20camera%5C%22)%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20console.log(%5C%22Camera%20permission%20denied%5C%22)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%20catch%20(err)%20%7B%5Cn%20%20%20%20console.warn(err)%3B%5Cn%20%20%7D%5Cn%7D%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.item%7D%3ETry%20permissions%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22request%20permissions%5C%22%20onPress%3D%7BrequestCameraPermission%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%20StatusBar.currentHeight%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23ecf0f1%5C%22%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20item%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,r.jsx)(n.h3,{id:"permissions-that-require-prompting-the-user",children:"Permissions that require prompting the user"}),"\n",(0,r.jsxs)(n.p,{children:["Available as constants under ",(0,r.jsx)(n.code,{children:"PermissionsAndroid.PERMISSIONS"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"READ_CALENDAR"}),": 'android.permission.READ_CALENDAR'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WRITE_CALENDAR"}),": 'android.permission.WRITE_CALENDAR'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CAMERA"}),": 'android.permission.CAMERA'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"READ_CONTACTS"}),": 'android.permission.READ_CONTACTS'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WRITE_CONTACTS"}),": 'android.permission.WRITE_CONTACTS'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET_ACCOUNTS"}),": 'android.permission.GET_ACCOUNTS'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ACCESS_FINE_LOCATION"}),": 'android.permission.ACCESS_FINE_LOCATION'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ACCESS_COARSE_LOCATION"}),": 'android.permission.ACCESS_COARSE_LOCATION'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ACCESS_BACKGROUND_LOCATION"}),": 'android.permission.ACCESS_BACKGROUND_LOCATION'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"RECORD_AUDIO"}),": 'android.permission.RECORD_AUDIO'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"READ_PHONE_STATE"}),": 'android.permission.READ_PHONE_STATE'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CALL_PHONE"}),": 'android.permission.CALL_PHONE'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"READ_CALL_LOG"}),": 'android.permission.READ_CALL_LOG'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WRITE_CALL_LOG"}),": 'android.permission.WRITE_CALL_LOG'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ADD_VOICEMAIL"}),": 'com.android.voicemail.permission.ADD_VOICEMAIL'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"USE_SIP"}),": 'android.permission.USE_SIP'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"PROCESS_OUTGOING_CALLS"}),": 'android.permission.PROCESS_OUTGOING_CALLS'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BODY_SENSORS"}),": 'android.permission.BODY_SENSORS'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SEND_SMS"}),": 'android.permission.SEND_SMS'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"RECEIVE_SMS"}),": 'android.permission.RECEIVE_SMS'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"READ_SMS"}),": 'android.permission.READ_SMS'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"RECEIVE_WAP_PUSH"}),": 'android.permission.RECEIVE_WAP_PUSH'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"RECEIVE_MMS"}),": 'android.permission.RECEIVE_MMS'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"READ_EXTERNAL_STORAGE"}),": 'android.permission.READ_EXTERNAL_STORAGE'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WRITE_EXTERNAL_STORAGE"}),": 'android.permission.WRITE_EXTERNAL_STORAGE'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BLUETOOTH_CONNECT"}),": 'android.permission.BLUETOOTH_CONNECT'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BLUETOOTH_SCAN"}),": 'android.permission.BLUETOOTH_SCAN'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BLUETOOTH_ADVERTISE"}),": 'android.permission.BLUETOOTH_ADVERTISE'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ACCESS_MEDIA_LOCATION"}),": 'android.permission.ACCESS_MEDIA_LOCATION'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ACCEPT_HANDOVER"}),": 'android.permission.ACCEPT_HANDOVER'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ACTIVITY_RECOGNITION"}),": 'android.permission.ACTIVITY_RECOGNITION'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ANSWER_PHONE_CALLS"}),": 'android.permission.ANSWER_PHONE_CALLS'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"READ_PHONE_NUMBERS"}),": 'android.permission.READ_PHONE_NUMBERS'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"UWB_RANGING"}),": 'android.permission.UWB_RANGING'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BODY_SENSORS_BACKGROUND"}),": 'android.permission.BODY_SENSORS_BACKGROUND'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"READ_MEDIA_IMAGES"}),": 'android.permission.READ_MEDIA_IMAGES'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"READ_MEDIA_VIDEO"}),": 'android.permission.READ_MEDIA_VIDEO'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"READ_MEDIA_AUDIO"}),": 'android.permission.READ_MEDIA_AUDIO'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"POST_NOTIFICATION"}),": 'android.permission.POST_NOTIFICATIONS'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NEARBY_WIFI_DEVICES"}),": 'android.permission.NEARBY_WIFI_DEVICES'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"READ_VOICEMAIL"}),": 'com.android.voicemail.permission.READ_VOICEMAIL',"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WRITE_VOICEMAIL"}),": 'com.android.voicemail.permission.WRITE_VOICEMAIL',"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"result-strings-for-requesting-permissions",children:"Result strings for requesting permissions"}),"\n",(0,r.jsxs)(n.p,{children:["Available as constants under ",(0,r.jsx)(n.code,{children:"PermissionsAndroid.RESULTS"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GRANTED"}),": 'granted'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DENIED"}),": 'denied'"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NEVER_ASK_AGAIN"}),": 'never_ask_again'"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"constructor",children:(0,r.jsx)(n.code,{children:"constructor()"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"constructor();\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"check",children:(0,r.jsx)(n.code,{children:"check()"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"check(permission);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns a promise resolving to a boolean value as to whether the specified permissions has been granted."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"permission"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The permission to check for."})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"request",children:(0,r.jsx)(n.code,{children:"request()"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"request(permission, [rationale]);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Prompts the user to enable a permission and returns a promise resolving to a string value (see result strings above) indicating whether the user allowed or denied the request or does not want to be asked again."}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"rationale"})," is provided, this function checks with the OS whether it is necessary to show a dialog explaining why the permission is needed (",(0,r.jsx)(n.a,{href:"https://developer.android.com/training/permissions/requesting.html#explain",children:"https://developer.android.com/training/permissions/requesting.html#explain"}),") and then shows the system permission dialog."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"permission"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The permission to request."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rationale"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsxs)(n.td,{children:["See ",(0,r.jsx)(n.code,{children:"rationale"})," below."]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Rationale:"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"title"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The title of the dialog."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The message of the dialog."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"buttonPositive"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The text of the positive button."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"buttonNegative"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"The text of the negative button."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"buttonNeutral"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"The text of the neutral button."})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"requestmultiple",children:(0,r.jsx)(n.code,{children:"requestMultiple()"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"requestMultiple(permissions);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Prompts the user to enable multiple permissions in the same dialog and returns an object with the permissions as keys and strings as values (see result strings above) indicating whether the user allowed or denied the request or does not want to be asked again."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"permissions"}),(0,r.jsx)(n.td,{children:"array"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Array of permissions to request."})]})})]})]})}const C=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},86386:(e,n,s)=>{s.d(n,{Z:()=>h});var r=s(27378),i=s(38944);const t={tabItem:"tabItem_wHwb"};var a=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,n,s)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,u=(e,n)=>{for(var s in n||(n={}))l.call(n,s)&&c(e,s,n[s]);if(o)for(var s of o(n))d.call(n,s)&&c(e,s,n[s]);return e};function h({children:e,hidden:n,className:s}){return r.createElement("div",u({role:"tabpanel",className:(0,i.Z)(t.tabItem,s)},{hidden:n}),e)}},48375:(e,n,s)=>{s.d(n,{Z:()=>M});var r=s(27378),i=s(38944),t=s(12112),a=s(3620),o=s(69490),l=s(14953),d=s(27886),c=s(7106),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,j=(e,n,s)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,A=(e,n)=>{for(var s in n||(n={}))m.call(n,s)&&j(e,s,n[s]);if(C)for(var s of C(n))x.call(n,s)&&j(e,s,n[s]);return e},E=(e,n)=>h(e,p(n));function f(e){var n,s;return null!=(s=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?s:[]}function b(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return f(e).map((({props:{value:e,label:n,attributes:s,default:r}})=>({value:e,label:n,attributes:s,default:r})))}(s);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function g({value:e,tabValues:n}){return n.some((n=>n.value===e))}function v({queryString:e=!1,groupId:n}){const s=(0,a.k6)(),i=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(E(A({},s.location),{search:n.toString()}))}),[i,s])]}function S(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,t=b(e),[a,l]=(0,r.useState)((()=>function({defaultValue:e,tabValues:n}){var s;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=null!=(s=n.find((e=>e.default)))?s:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[d,u]=v({queryString:s,groupId:i}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[s,i]=(0,c.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:i}),C=(()=>{const e=null!=d?d:h;return g({value:e,tabValues:t})?e:null})();(0,o.Z)((()=>{C&&l(C)}),[C]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,t]),tabValues:t}}var O=s(14185);const D={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var _=Object.defineProperty,y=Object.defineProperties,T=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,w=(e,n,s)=>n in e?_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,B=(e,n)=>{for(var s in n||(n={}))N.call(n,s)&&w(e,s,n[s]);if(I)for(var s of I(n))R.call(n,s)&&w(e,s,n[s]);return e},P=(e,n)=>y(e,T(n));function k({className:e,block:n,selectedValue:s,selectValue:a,tabValues:o}){const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.o5)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),i=o[r].value;i!==s&&(d(n),a(i))},u=e=>{var n,s;let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;r=null!=(n=l[s])?n:l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=null!=(s=l[n])?s:l[l.length-1];break}}null==r||r.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e)},o.map((({value:e,label:n,attributes:t})=>r.createElement("li",P(B({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:e=>l.push(e),onKeyDown:u,onClick:c},t),{className:(0,i.Z)("tabs__item",D.tabItem,null==t?void 0:t.className,{"tabs__item--active":s===e})}),null!=n?n:e))))}function L({lazy:e,children:n,selectedValue:s}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s}))))}function q(e){const n=S(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",D.tabList)},r.createElement(k,B(B({},e),n)),r.createElement(L,B(B({},e),n)))}function M(e){const n=(0,O.Z)();return r.createElement(q,B({key:String(n)},e),f(e.children))}},11674:(e,n,s)=>{s.d(n,{Z:()=>a});var r=s(63445);const i=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),t=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),a={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:i?"macos":t?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:i?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,s)=>{var r=s(27378),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var r,t={},d=null,c=null;for(r in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,r)&&!l.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:c,props:t,_owner:o.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},24246:(e,n,s)=>{e.exports=s(71426)},71670:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>t});var r=s(27378);const i=r.createContext({});function t(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||a:t(e),r.createElement(i.Provider,{value:o},n)}}}]);