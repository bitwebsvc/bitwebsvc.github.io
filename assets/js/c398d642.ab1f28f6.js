/*! For license information please see c398d642.ab1f28f6.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[91869],{11347:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var i=n(24246),r=n(71670);const d={id:"permissionsandroid",title:"PermissionsAndroid"},t=void 0,o={id:"permissionsandroid",title:"PermissionsAndroid",description:"Project with Native Code Required",source:"@site/../docs/permissionsandroid.md",sourceDirName:".",slug:"/permissionsandroid",permalink:"/docs/next/permissionsandroid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/permissionsandroid.md",tags:[],version:"current",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"permissionsandroid",title:"PermissionsAndroid"},sidebar:"api",previous:{title:"BackHandler",permalink:"/docs/next/backhandler"},next:{title:"ToastAndroid",permalink:"/docs/next/toastandroid"}},l={},c=[{value:"Example",id:"example",level:3},{value:"Permissions that require prompting the user",id:"permissions-that-require-prompting-the-user",level:3},{value:"Result strings for requesting permissions",id:"result-strings-for-requesting-permissions",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>check()</code>",id:"check",level:3},{value:"<code>request()</code>",id:"request",level:3},{value:"<code>requestMultiple()</code>",id:"requestmultiple",level:3}];function a(e){const s=Object.assign({p:"p",code:"code",h3:"h3",div:"div",ul:"ul",li:"li",hr:"hr",h1:"h1",h2:"h2",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"banner-native-code-required",children:[(0,i.jsx)("h3",{children:"Project with Native Code Required"}),(0,i.jsx)("p",{children:(0,i.jsxs)(s.p,{children:["The following section only applies to projects with native code exposed. If you are using the managed Expo workflow, see the guide on ",(0,i.jsx)("a",{href:"https://docs.expo.dev/guides/permissions/",children:"Permissions"})," in the Expo documentation for the appropriate alternative."]})})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"PermissionsAndroid"}),' provides access to Android M\'s new permissions model. The so-called "normal" permissions are granted by default when the application is installed as long as they appear in ',(0,i.jsx)(s.code,{children:"AndroidManifest.xml"}),'. However, "dangerous" permissions require a dialog prompt. You should use this module for those permissions.']}),"\n",(0,i.jsxs)(s.p,{children:["On devices before SDK version 23, the permissions are automatically granted if they appear in the manifest, so ",(0,i.jsx)(s.code,{children:"check"})," should always result to ",(0,i.jsx)(s.code,{children:"true"})," and ",(0,i.jsx)(s.code,{children:"request"})," should always resolve to ",(0,i.jsx)(s.code,{children:"PermissionsAndroid.RESULTS.GRANTED"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["If a user has previously turned off a permission that you prompt for, the OS will advise your app to show a rationale for needing the permission. The optional ",(0,i.jsx)(s.code,{children:"rationale"})," argument will show a dialog prompt only if necessary - otherwise the normal permission prompt will appear."]}),"\n",(0,i.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(s.div,{class:"snack-player","data-snack-name":"PermissionsAndroid Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Button%2C%5Cn%20%20PermissionsAndroid%2C%5Cn%20%20StatusBar%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20requestCameraPermission%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20try%20%7B%5Cn%20%20%20%20const%20granted%20%3D%20await%20PermissionsAndroid.request(%5Cn%20%20%20%20%20%20PermissionsAndroid.PERMISSIONS.CAMERA%2C%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20'Cool%20Photo%20App%20Camera%20Permission'%2C%5Cn%20%20%20%20%20%20%20%20message%3A%5Cn%20%20%20%20%20%20%20%20%20%20'Cool%20Photo%20App%20needs%20access%20to%20your%20camera%20'%20%2B%5Cn%20%20%20%20%20%20%20%20%20%20'so%20you%20can%20take%20awesome%20pictures.'%2C%5Cn%20%20%20%20%20%20%20%20buttonNeutral%3A%20'Ask%20Me%20Later'%2C%5Cn%20%20%20%20%20%20%20%20buttonNegative%3A%20'Cancel'%2C%5Cn%20%20%20%20%20%20%20%20buttonPositive%3A%20'OK'%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20if%20(granted%20%3D%3D%3D%20PermissionsAndroid.RESULTS.GRANTED)%20%7B%5Cn%20%20%20%20%20%20console.log('You%20can%20use%20the%20camera')%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20console.log('Camera%20permission%20denied')%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%20catch%20(err)%20%7B%5Cn%20%20%20%20console.warn(err)%3B%5Cn%20%20%7D%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.item%7D%3ETry%20permissions%3C%2FText%3E%5Cn%20%20%20%20%3CButton%20title%3D%5C%22request%20permissions%5C%22%20onPress%3D%7BrequestCameraPermission%7D%20%2F%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20paddingTop%3A%20StatusBar.currentHeight%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23ecf0f1'%2C%5Cn%20%20%20%20padding%3A%208%2C%5Cn%20%20%7D%2C%5Cn%20%20item%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20'bold'%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsx)(s.h3,{id:"permissions-that-require-prompting-the-user",children:"Permissions that require prompting the user"}),"\n",(0,i.jsxs)(s.p,{children:["Available as constants under ",(0,i.jsx)(s.code,{children:"PermissionsAndroid.PERMISSIONS"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"READ_CALENDAR"}),": 'android.permission.READ_CALENDAR'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"WRITE_CALENDAR"}),": 'android.permission.WRITE_CALENDAR'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"CAMERA"}),": 'android.permission.CAMERA'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"READ_CONTACTS"}),": 'android.permission.READ_CONTACTS'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"WRITE_CONTACTS"}),": 'android.permission.WRITE_CONTACTS'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"GET_ACCOUNTS"}),": 'android.permission.GET_ACCOUNTS'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ACCESS_FINE_LOCATION"}),": 'android.permission.ACCESS_FINE_LOCATION'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ACCESS_COARSE_LOCATION"}),": 'android.permission.ACCESS_COARSE_LOCATION'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ACCESS_BACKGROUND_LOCATION"}),": 'android.permission.ACCESS_BACKGROUND_LOCATION'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"RECORD_AUDIO"}),": 'android.permission.RECORD_AUDIO'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"READ_PHONE_STATE"}),": 'android.permission.READ_PHONE_STATE'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"CALL_PHONE"}),": 'android.permission.CALL_PHONE'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"READ_CALL_LOG"}),": 'android.permission.READ_CALL_LOG'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"WRITE_CALL_LOG"}),": 'android.permission.WRITE_CALL_LOG'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ADD_VOICEMAIL"}),": 'com.android.voicemail.permission.ADD_VOICEMAIL'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"USE_SIP"}),": 'android.permission.USE_SIP'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"PROCESS_OUTGOING_CALLS"}),": 'android.permission.PROCESS_OUTGOING_CALLS'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"BODY_SENSORS"}),": 'android.permission.BODY_SENSORS'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"SEND_SMS"}),": 'android.permission.SEND_SMS'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"RECEIVE_SMS"}),": 'android.permission.RECEIVE_SMS'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"READ_SMS"}),": 'android.permission.READ_SMS'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"RECEIVE_WAP_PUSH"}),": 'android.permission.RECEIVE_WAP_PUSH'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"RECEIVE_MMS"}),": 'android.permission.RECEIVE_MMS'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"READ_EXTERNAL_STORAGE"}),": 'android.permission.READ_EXTERNAL_STORAGE'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"WRITE_EXTERNAL_STORAGE"}),": 'android.permission.WRITE_EXTERNAL_STORAGE'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"BLUETOOTH_CONNECT"}),": 'android.permission.BLUETOOTH_CONNECT'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"BLUETOOTH_SCAN"}),": 'android.permission.BLUETOOTH_SCAN'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"BLUETOOTH_ADVERTISE"}),": 'android.permission.BLUETOOTH_ADVERTISE'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ACCESS_MEDIA_LOCATION"}),": 'android.permission.ACCESS_MEDIA_LOCATION'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ACCEPT_HANDOVER"}),": 'android.permission.ACCEPT_HANDOVER'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ACTIVITY_RECOGNITION"}),": 'android.permission.ACTIVITY_RECOGNITION'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ANSWER_PHONE_CALLS"}),": 'android.permission.ANSWER_PHONE_CALLS'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"READ_PHONE_NUMBERS"}),": 'android.permission.READ_PHONE_NUMBERS'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"UWB_RANGING"}),": 'android.permission.UWB_RANGING'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"BODY_SENSORS_BACKGROUND"}),": 'android.permission.BODY_SENSORS_BACKGROUND'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"READ_MEDIA_IMAGES"}),": 'android.permission.READ_MEDIA_IMAGES'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"READ_MEDIA_VIDEO"}),": 'android.permission.READ_MEDIA_VIDEO'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"READ_MEDIA_AUDIO"}),": 'android.permission.READ_MEDIA_AUDIO'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"POST_NOTIFICATIONS"}),": 'android.permission.POST_NOTIFICATIONS'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"NEARBY_WIFI_DEVICES"}),": 'android.permission.NEARBY_WIFI_DEVICES'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"READ_VOICEMAIL"}),": 'com.android.voicemail.permission.READ_VOICEMAIL',"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"WRITE_VOICEMAIL"}),": 'com.android.voicemail.permission.WRITE_VOICEMAIL',"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"result-strings-for-requesting-permissions",children:"Result strings for requesting permissions"}),"\n",(0,i.jsxs)(s.p,{children:["Available as constants under ",(0,i.jsx)(s.code,{children:"PermissionsAndroid.RESULTS"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"GRANTED"}),": 'granted'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DENIED"}),": 'denied'"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"NEVER_ASK_AGAIN"}),": 'never_ask_again'"]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h1,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"check",children:(0,i.jsx)(s.code,{children:"check()"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static check(permission: Permission): Promise<boolean>;\n"})}),"\n",(0,i.jsx)(s.p,{children:"Returns a promise resolving to a boolean value as to whether the specified permissions has been granted."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Required"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"permission"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"The permission to check for."})]})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"request",children:(0,i.jsx)(s.code,{children:"request()"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static request(\n  permission: Permission,\n  rationale?: Rationale,\n): Promise<PermissionStatus>;\n"})}),"\n",(0,i.jsx)(s.p,{children:"Prompts the user to enable a permission and returns a promise resolving to a string value (see result strings above) indicating whether the user allowed or denied the request or does not want to be asked again."}),"\n",(0,i.jsxs)(s.p,{children:["If ",(0,i.jsx)(s.code,{children:"rationale"})," is provided, this function checks with the OS whether it is necessary to show a dialog explaining why the permission is needed (",(0,i.jsx)(s.a,{href:"https://developer.android.com/training/permissions/requesting.html#explain",children:"https://developer.android.com/training/permissions/requesting.html#explain"}),") and then shows the system permission dialog."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Required"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"permission"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"The permission to request."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"rationale"}),(0,i.jsx)(s.td,{children:"object"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsxs)(s.td,{children:["See ",(0,i.jsx)(s.code,{children:"rationale"})," below."]})]})]})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Rationale:"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Required"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"title"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"The title of the dialog."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"message"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"The message of the dialog."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"buttonPositive"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"The text of the positive button."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"buttonNegative"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"The text of the negative button."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"buttonNeutral"}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"The text of the neutral button."})]})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"requestmultiple",children:(0,i.jsx)(s.code,{children:"requestMultiple()"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static requestMultiple(\n  permissions: Permission[],\n): Promise<{[key in Permission]: PermissionStatus}>;\n"})}),"\n",(0,i.jsx)(s.p,{children:"Prompts the user to enable multiple permissions in the same dialog and returns an object with the permissions as keys and strings as values (see result strings above) indicating whether the user allowed or denied the request or does not want to be asked again."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Required"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"permissions"}),(0,i.jsx)(s.td,{children:"array"}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Array of permissions to request."})]})})]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},71426:(e,s,n)=>{var i=n(27378),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,n){var i,d={},c=null,a=null;for(i in void 0!==n&&(c=""+n),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(a=s.ref),s)t.call(s,i)&&!l.hasOwnProperty(i)&&(d[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===d[i]&&(d[i]=s[i]);return{$$typeof:r,type:e,key:c,ref:a,props:d,_owner:o.current}}s.Fragment=d,s.jsx=c,s.jsxs=c},24246:(e,s,n)=>{e.exports=n(71426)},71670:(e,s,n)=>{n.d(s,{Zo:()=>o,ah:()=>d});var i=n(27378);const r=i.createContext({});function d(e){const s=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const t={};function o({components:e,children:s,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||t:d(e),i.createElement(r.Provider,{value:o},s)}}}]);