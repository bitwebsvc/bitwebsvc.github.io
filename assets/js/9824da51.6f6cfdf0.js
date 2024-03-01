/*! For license information please see 9824da51.6f6cfdf0.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[84677],{53508:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var t=n(24246),r=n(71670),o=n(48375),i=n(86386),l=n(11674);const s={id:"signed-apk-android",title:"Publishing to Google Play Store"},d=void 0,u={id:"signed-apk-android",title:"Publishing to Google Play Store",description:"Android requires that all apps be digitally signed with a certificate before they can be installed. In order to distribute your Android application via Google Play store it needs to be signed with a release key that then needs to be used for all future updates. Since 2017 it is possible for Google Play to manage signing releases automatically thanks to App Signing by Google Play functionality. However, before your application binary is uploaded to Google Play it needs to be signed with an upload key. The Signing Your Applications page on Android Developers documentation describes the topic in detail. This guide covers the process in brief, as well as lists the steps required to package the JavaScript bundle.",source:"@site/../docs/signed-apk-android.md",sourceDirName:".",slug:"/signed-apk-android",permalink:"/docs/next/signed-apk-android",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/signed-apk-android.md",tags:[],version:"current",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"signed-apk-android",title:"Publishing to Google Play Store"},sidebar:"docs",previous:{title:"Headless JS",permalink:"/docs/next/headless-js-android"},next:{title:"Communication between native and React Native",permalink:"/docs/next/communication-android"}},c={},p=[{value:"Generating an upload key",id:"generating-an-upload-key",level:2},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Setting up Gradle variables",id:"setting-up-gradle-variables",level:2},{value:"Adding signing config to your app&#39;s Gradle config",id:"adding-signing-config-to-your-apps-gradle-config",level:2},{value:"Generating the release AAB",id:"generating-the-release-aab",level:2},{value:"Testing the release build of your app",id:"testing-the-release-build-of-your-app",level:2},{value:"Publishing to other stores",id:"publishing-to-other-stores",level:2},{value:"Enabling Proguard to reduce the size of the APK (optional)",id:"enabling-proguard-to-reduce-the-size-of-the-apk-optional",level:2},{value:"Migrating old Android React Native apps to use App Signing by Google Play",id:"migrating-old-android-react-native-apps-to-use-app-signing-by-google-play",level:2},{value:"Default Permissions",id:"default-permissions",level:2}];function h(e){const a=Object.assign({p:"p",a:"a",admonition:"admonition",h2:"h2",code:"code",h3:"h3",pre:"pre",ol:"ol",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["Android requires that all apps be digitally signed with a certificate before they can be installed. In order to distribute your Android application via ",(0,t.jsx)(a.a,{href:"https://play.google.com/store",children:"Google Play store"})," it needs to be signed with a release key that then needs to be used for all future updates. Since 2017 it is possible for Google Play to manage signing releases automatically thanks to ",(0,t.jsx)(a.a,{href:"https://developer.android.com/studio/publish/app-signing#app-signing-google-play",children:"App Signing by Google Play"})," functionality. However, before your application binary is uploaded to Google Play it needs to be signed with an upload key. The ",(0,t.jsx)(a.a,{href:"https://developer.android.com/tools/publishing/app-signing.html",children:"Signing Your Applications"})," page on Android Developers documentation describes the topic in detail. This guide covers the process in brief, as well as lists the steps required to package the JavaScript bundle."]}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsxs)(a.p,{children:["If you are using Expo, read the Expo guide for ",(0,t.jsx)(a.a,{href:"https://docs.expo.dev/distribution/app-stores/",children:"Deploying to App Stores"})," to build and submit your app for the Google Play Store. This guide works with any React Native app to automate the deployment process."]})}),"\n",(0,t.jsx)(a.h2,{id:"generating-an-upload-key",children:"Generating an upload key"}),"\n",(0,t.jsxs)(a.p,{children:["You can generate a private signing key using ",(0,t.jsx)(a.code,{children:"keytool"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"windows",children:"Windows"}),"\n",(0,t.jsxs)(a.p,{children:["On Windows ",(0,t.jsx)(a.code,{children:"keytool"})," must be run from ",(0,t.jsx)(a.code,{children:"C:\\Program Files\\Java\\jdkx.x.x_x\\bin"}),", as administrator."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000\n"})}),"\n",(0,t.jsxs)(a.p,{children:["This command prompts you for passwords for the keystore and key and for the Distinguished Name fields for your key. It then generates the keystore as a file called ",(0,t.jsx)(a.code,{children:"my-upload-key.keystore"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"The keystore contains a single key, valid for 10000 days. The alias is a name that you will use later when signing your app, so remember to take note of the alias."}),"\n",(0,t.jsx)(a.h3,{id:"macos",children:"macOS"}),"\n",(0,t.jsx)(a.p,{children:"On macOS, if you're not sure where your JDK bin folder is, then perform the following command to find it:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"/usr/libexec/java_home\n"})}),"\n",(0,t.jsx)(a.p,{children:"It will output the directory of the JDK, which will look something like this:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"/Library/Java/JavaVirtualMachines/jdkX.X.X_XXX.jdk/Contents/Home\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Navigate to that directory by using the command ",(0,t.jsx)(a.code,{children:"cd /your/jdk/path"})," and use the keytool command with sudo permission as shown below."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000\n"})}),"\n",(0,t.jsx)(a.admonition,{type:"caution",children:(0,t.jsxs)(a.p,{children:["Remember to keep the keystore file private. In case you've lost upload key or it's been compromised you should ",(0,t.jsx)(a.a,{href:"https://support.google.com/googleplay/android-developer/answer/7384423#reset",children:"follow these instructions"}),"."]})}),"\n",(0,t.jsx)(a.h2,{id:"setting-up-gradle-variables",children:"Setting up Gradle variables"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["Place the ",(0,t.jsx)(a.code,{children:"my-upload-key.keystore"})," file under the ",(0,t.jsx)(a.code,{children:"android/app"})," directory in your project folder."]}),"\n",(0,t.jsxs)(a.li,{children:["Edit the file ",(0,t.jsx)(a.code,{children:"~/.gradle/gradle.properties"})," or ",(0,t.jsx)(a.code,{children:"android/gradle.properties"}),", and add the following (replace ",(0,t.jsx)(a.code,{children:"*****"})," with the correct keystore password, alias and key password),"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore\nMYAPP_UPLOAD_KEY_ALIAS=my-key-alias\nMYAPP_UPLOAD_STORE_PASSWORD=*****\nMYAPP_UPLOAD_KEY_PASSWORD=*****\n"})}),"\n",(0,t.jsx)(a.p,{children:"These are going to be global Gradle variables, which we can later use in our Gradle config to sign our app."}),"\n",(0,t.jsx)(a.admonition,{title:"Note about using git",type:"note",children:(0,t.jsxs)(a.p,{children:["Saving the above Gradle variables in ",(0,t.jsx)(a.code,{children:"~/.gradle/gradle.properties"})," instead of ",(0,t.jsx)(a.code,{children:"android/gradle.properties"})," prevents them from being checked in to git. You may have to create the ",(0,t.jsx)(a.code,{children:"~/.gradle/gradle.properties"})," file in your user's home directory before you can add the variables."]})}),"\n",(0,t.jsx)(a.admonition,{title:"Note about security",type:"note",children:(0,t.jsxs)(a.p,{children:["If you are not keen on storing your passwords in plaintext, and you are running macOS, you can also ",(0,t.jsx)(a.a,{href:"https://pilloxa.gitlab.io/posts/safer-passwords-in-gradle/",children:"store your credentials in the Keychain Access app"}),". Then you can skip the two last rows in ",(0,t.jsx)(a.code,{children:"~/.gradle/gradle.properties"}),"."]})}),"\n",(0,t.jsx)(a.h2,{id:"adding-signing-config-to-your-apps-gradle-config",children:"Adding signing config to your app's Gradle config"}),"\n",(0,t.jsxs)(a.p,{children:["The last configuration step that needs to be done is to setup release builds to be signed using upload key. Edit the file ",(0,t.jsx)(a.code,{children:"android/app/build.gradle"})," in your project folder, and add the signing config,"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-groovy",children:"...\nandroid {\n    ...\n    defaultConfig { ... }\n    signingConfigs {\n        release {\n            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {\n                storeFile file(MYAPP_UPLOAD_STORE_FILE)\n                storePassword MYAPP_UPLOAD_STORE_PASSWORD\n                keyAlias MYAPP_UPLOAD_KEY_ALIAS\n                keyPassword MYAPP_UPLOAD_KEY_PASSWORD\n            }\n        }\n    }\n    buildTypes {\n        release {\n            ...\n            signingConfig signingConfigs.release\n        }\n    }\n}\n...\n"})}),"\n",(0,t.jsx)(a.h2,{id:"generating-the-release-aab",children:"Generating the release AAB"}),"\n",(0,t.jsx)(a.p,{children:"Run the following command in a terminal:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"npx react-native build-android --mode=release\n"})}),"\n",(0,t.jsxs)(a.p,{children:["This command uses Gradle's ",(0,t.jsx)(a.code,{children:"bundleRelease"})," under the hood that bundles all the JavaScript needed to run your app into the AAB (",(0,t.jsx)(a.a,{href:"https://developer.android.com/guide/app-bundle",children:"Android App Bundle"}),"). If you need to change the way the JavaScript bundle and/or drawable resources are bundled (e.g. if you changed the default file/folder names or the general structure of the project), have a look at ",(0,t.jsx)(a.code,{children:"android/app/build.gradle"})," to see how you can update it to reflect these changes."]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["Make sure ",(0,t.jsx)(a.code,{children:"gradle.properties"})," does not include ",(0,t.jsx)(a.code,{children:"org.gradle.configureondemand=true"})," as that will make the release build skip bundling JS and assets into the app binary."]})}),"\n",(0,t.jsxs)(a.p,{children:["The generated AAB can be found under ",(0,t.jsx)(a.code,{children:"android/app/build/outputs/bundle/release/app-release.aab"}),", and is ready to be uploaded to Google Play."]}),"\n",(0,t.jsxs)(a.p,{children:["In order for Google Play to accept AAB format the App Signing by Google Play needs to be configured for your application on the Google Play Console. If you are updating an existing app that doesn't use App Signing by Google Play, please check our ",(0,t.jsx)(a.a,{href:"#migrating-old-android-react-native-apps-to-use-app-signing-by-google-play",children:"migration section"})," to learn how to perform that configuration change."]}),"\n",(0,t.jsx)(a.h2,{id:"testing-the-release-build-of-your-app",children:"Testing the release build of your app"}),"\n",(0,t.jsx)(a.p,{children:"Before uploading the release build to the Play Store, make sure you test it thoroughly. First uninstall any previous version of the app you already have installed. Install it on the device using the following command in the project root:"}),"\n",(0,t.jsxs)(o.Z,{groupId:"package-manager",queryString:!0,defaultValue:l.Z.defaultPackageManager,values:l.Z.packageManagers,children:[(0,t.jsx)(i.Z,{value:"npm",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'npm run android -- --mode="release"\n'})})}),(0,t.jsx)(i.Z,{value:"yarn",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"yarn android --mode release\n"})})})]}),"\n",(0,t.jsxs)(a.p,{children:["Note that ",(0,t.jsx)(a.code,{children:"--mode release"})," is only available if you've set up signing as described above."]}),"\n",(0,t.jsx)(a.p,{children:"You can terminate any running bundler instances, since all your framework and JavaScript code is bundled in the APK's assets."}),"\n",(0,t.jsx)(a.h2,{id:"publishing-to-other-stores",children:"Publishing to other stores"}),"\n",(0,t.jsxs)(a.p,{children:["By default, the generated APK has the native code for both ",(0,t.jsx)(a.code,{children:"x86"}),", ",(0,t.jsx)(a.code,{children:"x86_64"}),", ",(0,t.jsx)(a.code,{children:"ARMv7a"})," and ",(0,t.jsx)(a.code,{children:"ARM64-v8a"})," CPU architectures. This makes it easier to share APKs that run on almost all Android devices. However, this has the downside that there will be some unused native code on any device, leading to unnecessarily bigger APKs."]}),"\n",(0,t.jsxs)(a.p,{children:["You can create an APK for each CPU by adding the following line in your ",(0,t.jsx)(a.code,{children:"android/app/build.gradle"})," file:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-diff",children:'android {\n\n    splits {\n        abi {\n            reset()\n            enable true\n            universalApk false\n            include "armeabi-v7a", "arm64-v8a", "x86", "x86_64"\n        }\n    }\n\n}\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Upload these files to markets which support device targeting, such as ",(0,t.jsx)(a.a,{href:"https://developer.amazon.com/docs/app-submission/device-filtering-and-compatibility.html",children:"Amazon AppStore"})," or ",(0,t.jsx)(a.a,{href:"https://f-droid.org/en/",children:"F-Droid"}),", and the users will automatically get the appropriate APK. If you want to upload to other markets, such as ",(0,t.jsx)(a.a,{href:"https://www.apkfiles.com/",children:"APKFiles"}),", which do not support multiple APKs for a single app, change the ",(0,t.jsx)(a.code,{children:"universalApk false"})," line to ",(0,t.jsx)(a.code,{children:"true"})," to create the default universal APK with binaries for both CPUs."]}),"\n",(0,t.jsxs)(a.p,{children:["Please note that you will also have to configure distinct version codes, as ",(0,t.jsx)(a.a,{href:"https://developer.android.com/studio/build/configure-apk-splits#configure-APK-versions",children:"suggested in this page"})," from the official Android documentation."]}),"\n",(0,t.jsx)(a.h2,{id:"enabling-proguard-to-reduce-the-size-of-the-apk-optional",children:"Enabling Proguard to reduce the size of the APK (optional)"}),"\n",(0,t.jsx)(a.p,{children:"Proguard is a tool that can slightly reduce the size of the APK. It does this by stripping parts of the React Native Java bytecode (and its dependencies) that your app is not using."}),"\n",(0,t.jsx)(a.admonition,{title:"Important",type:"caution",children:(0,t.jsxs)(a.p,{children:["Make sure to thoroughly test your app if you've enabled Proguard. Proguard often requires configuration specific to each native library you're using. See ",(0,t.jsx)(a.code,{children:"app/proguard-rules.pro"}),"."]})}),"\n",(0,t.jsxs)(a.p,{children:["To enable Proguard, edit ",(0,t.jsx)(a.code,{children:"android/app/build.gradle"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-groovy",children:"/**\n * Run Proguard to shrink the Java bytecode in release builds.\n */\ndef enableProguardInReleaseBuilds = true\n"})}),"\n",(0,t.jsx)(a.h2,{id:"migrating-old-android-react-native-apps-to-use-app-signing-by-google-play",children:"Migrating old Android React Native apps to use App Signing by Google Play"}),"\n",(0,t.jsxs)(a.p,{children:["If you are migrating from previous version of React Native chances are your app does not use App Signing by Google Play feature. We recommend you enable that in order to take advantage from things like automatic app splitting. In order to migrate from the old way of signing you need to start by ",(0,t.jsx)(a.a,{href:"#generating-an-upload-key",children:"generating new upload key"})," and then replacing release signing config in ",(0,t.jsx)(a.code,{children:"android/app/build.gradle"})," to use the upload key instead of the release one (see section about ",(0,t.jsx)(a.a,{href:"#adding-signing-config-to-your-apps-gradle-config",children:"adding signing config to gradle"}),"). Once that's done you should follow the ",(0,t.jsx)(a.a,{href:"https://support.google.com/googleplay/android-developer/answer/7384423",children:"instructions from Google Play Help website"})," in order to send your original release key to Google Play."]}),"\n",(0,t.jsx)(a.h2,{id:"default-permissions",children:"Default Permissions"}),"\n",(0,t.jsxs)(a.p,{children:["By default, ",(0,t.jsx)(a.code,{children:"INTERNET"})," permission is added to your Android app as pretty much all apps use it. ",(0,t.jsx)(a.code,{children:"SYSTEM_ALERT_WINDOW"})," permission is added to your Android APK in debug mode but it will be removed in production."]})]})}const g=function(e={}){const{wrapper:a}=Object.assign({},(0,r.ah)(),e.components);return a?(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},86386:(e,a,n)=>{n.d(a,{Z:()=>p});var t=n(27378),r=n(38944);const o={tabItem:"tabItem_wHwb"};var i=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,a,n)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))s.call(a,n)&&u(e,n,a[n]);if(l)for(var n of l(a))d.call(a,n)&&u(e,n,a[n]);return e};function p({children:e,hidden:a,className:n}){return t.createElement("div",c({role:"tabpanel",className:(0,r.Z)(o.tabItem,n)},{hidden:a}),e)}},48375:(e,a,n)=>{n.d(a,{Z:()=>K});var t=n(27378),r=n(38944),o=n(12112),i=n(3620),l=n(69490),s=n(14953),d=n(27886),u=n(7106),c=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,a,n)=>a in e?c(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,m=(e,a)=>{for(var n in a||(a={}))y.call(a,n)&&b(e,n,a[n]);if(g)for(var n of g(a))f.call(a,n)&&b(e,n,a[n]);return e},v=(e,a)=>p(e,h(a));function j(e){var a,n;return null!=(n=null==(a=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:a.filter(Boolean))?n:[]}function x(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=null!=a?a:function(e){return j(e).map((({props:{value:e,label:a,attributes:n,default:t}})=>({value:e,label:a,attributes:n,default:t})))}(n);return function(e){const a=(0,d.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function k({value:e,tabValues:a}){return a.some((a=>a.value===e))}function w({queryString:e=!1,groupId:a}){const n=(0,i.k6)(),r=function({queryString:e=!1,groupId:a}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:e,groupId:a});return[(0,s._X)(r),(0,t.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace(v(m({},n.location),{search:a.toString()}))}),[r,n])]}function P(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,o=x(e),[i,s]=(0,t.useState)((()=>function({defaultValue:e,tabValues:a}){var n;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=null!=(n=a.find((e=>e.default)))?n:a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:o}))),[d,c]=w({queryString:n,groupId:r}),[p,h]=function({groupId:e}){const a=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,u.Nk)(a);return[n,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:r}),g=(()=>{const e=null!=d?d:p;return k({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!k({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var A=n(14185);const S={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var O=Object.defineProperty,_=Object.defineProperties,E=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,N=(e,a,n)=>a in e?O(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,G=(e,a)=>{for(var n in a||(a={}))T.call(a,n)&&N(e,n,a[n]);if(I)for(var n of I(a))D.call(a,n)&&N(e,n,a[n]);return e},R=(e,a)=>_(e,E(a));function L({className:e,block:a,selectedValue:n,selectValue:i,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),u=e=>{const a=e.currentTarget,t=s.indexOf(a),r=l[t].value;r!==n&&(d(a),i(r))},c=e=>{var a,n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=null!=(a=s[n])?a:s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=null!=(n=s[a])?n:s[s.length-1];break}}null==t||t.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},e)},l.map((({value:e,label:a,attributes:o})=>t.createElement("li",R(G({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>s.push(e),onKeyDown:c,onClick:u},o),{className:(0,r.Z)("tabs__item",S.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e})}),null!=a?a:e))))}function C({lazy:e,children:a,selectedValue:n}){const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function M(e){const a=P(e);return t.createElement("div",{className:(0,r.Z)("tabs-container",S.tabList)},t.createElement(L,G(G({},e),a)),t.createElement(C,G(G({},e),a)))}function K(e){const a=(0,A.Z)();return t.createElement(M,G({key:String(a)},e),j(e.children))}},11674:(e,a,n)=>{n.d(a,{Z:()=>i});var t=n(63445);const r=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,a,n)=>{var t=n(27378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,a,n){var t,o={},d=null,u=null;for(t in void 0!==n&&(d=""+n),void 0!==a.key&&(d=""+a.key),void 0!==a.ref&&(u=a.ref),a)i.call(a,t)&&!s.hasOwnProperty(t)&&(o[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===o[t]&&(o[t]=a[t]);return{$$typeof:r,type:e,key:d,ref:u,props:o,_owner:l.current}}a.Fragment=o,a.jsx=d,a.jsxs=d},24246:(e,a,n)=>{e.exports=n(71426)},71670:(e,a,n)=>{n.d(a,{Zo:()=>l,ah:()=>o});var t=n(27378);const r=t.createContext({});function o(e){const a=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const i={};function l({components:e,children:a,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:o(e),t.createElement(r.Provider,{value:l},a)}}}]);