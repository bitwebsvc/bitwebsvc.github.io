/*! For license information please see b54696c0.55ba377d.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[470],{95498:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var o=i(24246),a=i(71670);const t={id:"signed-apk-android",title:"Publishing to Google Play Store"},r=void 0,s={id:"signed-apk-android",title:"Publishing to Google Play Store",description:"Android requires that all apps be digitally signed with a certificate before they can be installed. In order to distribute your Android application via Google Play store it needs to be signed with a release key that then needs to be used for all future updates. Since 2017 it is possible for Google Play to manage signing releases automatically thanks to App Signing by Google Play functionality. However, before your application binary is uploaded to Google Play it needs to be signed with an upload key. The Signing Your Applications page on Android Developers documentation describes the topic in detail. This guide covers the process in brief, as well as lists the steps required to package the JavaScript bundle.",source:"@site/versioned_docs/version-0.70/signed-apk-android.md",sourceDirName:".",slug:"/signed-apk-android",permalink:"/docs/0.70/signed-apk-android",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/signed-apk-android.md",tags:[],version:"0.70",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"signed-apk-android",title:"Publishing to Google Play Store"},sidebar:"docs",previous:{title:"Headless JS",permalink:"/docs/0.70/headless-js-android"},next:{title:"Communication between native and React Native",permalink:"/docs/0.70/communication-android"}},l={},d=[{value:"Generating an upload key",id:"generating-an-upload-key",level:2},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Setting up Gradle variables",id:"setting-up-gradle-variables",level:2},{value:"Adding signing config to your app&#39;s Gradle config",id:"adding-signing-config-to-your-apps-gradle-config",level:2},{value:"Generating the release AAB",id:"generating-the-release-aab",level:2},{value:"Testing the release build of your app",id:"testing-the-release-build-of-your-app",level:2},{value:"Publishing to other stores",id:"publishing-to-other-stores",level:2},{value:"Enabling Proguard to reduce the size of the APK (optional)",id:"enabling-proguard-to-reduce-the-size-of-the-apk-optional",level:2},{value:"Migrating old Android React Native apps to use App Signing by Google Play",id:"migrating-old-android-react-native-apps-to-use-app-signing-by-google-play",level:2},{value:"Default Permissions",id:"default-permissions",level:2}];function p(e){const n=Object.assign({p:"p",a:"a",admonition:"admonition",h2:"h2",code:"code",h3:"h3",ol:"ol",li:"li",pre:"pre"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Android requires that all apps be digitally signed with a certificate before they can be installed. In order to distribute your Android application via ",(0,o.jsx)(n.a,{href:"https://play.google.com/store",children:"Google Play store"})," it needs to be signed with a release key that then needs to be used for all future updates. Since 2017 it is possible for Google Play to manage signing releases automatically thanks to ",(0,o.jsx)(n.a,{href:"https://developer.android.com/studio/publish/app-signing#app-signing-google-play",children:"App Signing by Google Play"})," functionality. However, before your application binary is uploaded to Google Play it needs to be signed with an upload key. The ",(0,o.jsx)(n.a,{href:"https://developer.android.com/tools/publishing/app-signing.html",children:"Signing Your Applications"})," page on Android Developers documentation describes the topic in detail. This guide covers the process in brief, as well as lists the steps required to package the JavaScript bundle."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["If you are using Expo, read the Expo guide for ",(0,o.jsx)(n.a,{href:"https://docs.expo.dev/distribution/app-stores/",children:"Deploying to App Stores"})," to build and submit your app for the Google Play Store. This guide works with any React Native app to automate the deployment process."]})}),"\n",(0,o.jsx)(n.h2,{id:"generating-an-upload-key",children:"Generating an upload key"}),"\n",(0,o.jsxs)(n.p,{children:["You can generate a private signing key using ",(0,o.jsx)(n.code,{children:"keytool"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,o.jsxs)(n.p,{children:["On Windows ",(0,o.jsx)(n.code,{children:"keytool"})," must be run from ",(0,o.jsx)(n.code,{children:"C:\\Program Files\\Java\\jdkx.x.x_x\\bin"}),", as administrator."]}),"\n",(0,o.jsx)(n.p,{children:"keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000"}),"\n",(0,o.jsxs)(n.p,{children:["This command prompts you for passwords for the keystore and key and for the Distinguished Name fields for your key. It then generates the keystore as a file called ",(0,o.jsx)(n.code,{children:"my-upload-key.keystore"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The keystore contains a single key, valid for 10000 days. The alias is a name that you will use later when signing your app, so remember to take note of the alias."}),"\n",(0,o.jsx)(n.h3,{id:"macos",children:"macOS"}),"\n",(0,o.jsx)(n.p,{children:"On macOS, if you're not sure where your JDK bin folder is, then perform the following command to find it:"}),"\n",(0,o.jsx)(n.p,{children:"/usr/libexec/java_home"}),"\n",(0,o.jsx)(n.p,{children:"It will output the directory of the JDK, which will look something like this:"}),"\n",(0,o.jsx)(n.p,{children:"/Library/Java/JavaVirtualMachines/jdkX.X.X_XXX.jdk/Contents/Home"}),"\n",(0,o.jsxs)(n.p,{children:["Navigate to that directory by using the command ",(0,o.jsx)(n.code,{children:"cd /your/jdk/path"})," and use the keytool command with sudo permission as shown below."]}),"\n",(0,o.jsx)(n.p,{children:"sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["Remember to keep the keystore file private. In case you've lost upload key or it's been compromised you should ",(0,o.jsx)(n.a,{href:"https://support.google.com/googleplay/android-developer/answer/7384423#reset",children:"follow these instructions"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"setting-up-gradle-variables",children:"Setting up Gradle variables"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Place the ",(0,o.jsx)(n.code,{children:"my-upload-key.keystore"})," file under the ",(0,o.jsx)(n.code,{children:"android/app"})," directory in your project folder."]}),"\n",(0,o.jsxs)(n.li,{children:["Edit the file ",(0,o.jsx)(n.code,{children:"~/.gradle/gradle.properties"})," or ",(0,o.jsx)(n.code,{children:"android/gradle.properties"}),", and add the following (replace ",(0,o.jsx)(n.code,{children:"*****"})," with the correct keystore password, alias and key password),"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore\nMYAPP_UPLOAD_KEY_ALIAS=my-key-alias\nMYAPP_UPLOAD_STORE_PASSWORD=*****\nMYAPP_UPLOAD_KEY_PASSWORD=*****\n"})}),"\n",(0,o.jsx)(n.p,{children:"These are going to be global Gradle variables, which we can later use in our Gradle config to sign our app."}),"\n",(0,o.jsx)(n.admonition,{title:"Note about using git",type:"note",children:(0,o.jsxs)(n.p,{children:["Saving the above Gradle variables in ",(0,o.jsx)(n.code,{children:"~/.gradle/gradle.properties"})," instead of ",(0,o.jsx)(n.code,{children:"android/gradle.properties"})," prevents them from being checked in to git. You may have to create the ",(0,o.jsx)(n.code,{children:"~/.gradle/gradle.properties"})," file in your user's home directory before you can add the variables."]})}),"\n",(0,o.jsx)(n.admonition,{title:"Note about security",type:"note",children:(0,o.jsxs)(n.p,{children:["If you are not keen on storing your passwords in plaintext, and you are running macOS, you can also ",(0,o.jsx)(n.a,{href:"https://pilloxa.gitlab.io/posts/safer-passwords-in-gradle/",children:"store your credentials in the Keychain Access app"}),". Then you can skip the two last rows in ",(0,o.jsx)(n.code,{children:"~/.gradle/gradle.properties"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"adding-signing-config-to-your-apps-gradle-config",children:"Adding signing config to your app's Gradle config"}),"\n",(0,o.jsxs)(n.p,{children:["The last configuration step that needs to be done is to setup release builds to be signed using upload key. Edit the file ",(0,o.jsx)(n.code,{children:"android/app/build.gradle"})," in your project folder, and add the signing config,"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",children:"...\nandroid {\n    ...\n    defaultConfig { ... }\n    signingConfigs {\n        release {\n            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {\n                storeFile file(MYAPP_UPLOAD_STORE_FILE)\n                storePassword MYAPP_UPLOAD_STORE_PASSWORD\n                keyAlias MYAPP_UPLOAD_KEY_ALIAS\n                keyPassword MYAPP_UPLOAD_KEY_PASSWORD\n            }\n        }\n    }\n    buildTypes {\n        release {\n            ...\n            signingConfig signingConfigs.release\n        }\n    }\n}\n...\n"})}),"\n",(0,o.jsx)(n.h2,{id:"generating-the-release-aab",children:"Generating the release AAB"}),"\n",(0,o.jsx)(n.p,{children:"Run the following in a terminal:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd android\n./gradlew bundleRelease\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Gradle's ",(0,o.jsx)(n.code,{children:"bundleRelease"})," will bundle all the JavaScript needed to run your app into the AAB (",(0,o.jsx)(n.a,{href:"https://developer.android.com/guide/app-bundle",children:"Android App Bundle"}),"). If you need to change the way the JavaScript bundle and/or drawable resources are bundled (e.g. if you changed the default file/folder names or the general structure of the project), have a look at ",(0,o.jsx)(n.code,{children:"android/app/build.gradle"})," to see how you can update it to reflect these changes."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Make sure ",(0,o.jsx)(n.code,{children:"gradle.properties"})," does not include ",(0,o.jsx)(n.code,{children:"org.gradle.configureondemand=true"})," as that will make the release build skip bundling JS and assets into the app binary."]})}),"\n",(0,o.jsxs)(n.p,{children:["The generated AAB can be found under ",(0,o.jsx)(n.code,{children:"android/app/build/outputs/bundle/release/app-release.aab"}),", and is ready to be uploaded to Google Play."]}),"\n",(0,o.jsxs)(n.p,{children:["In order for Google Play to accept AAB format the App Signing by Google Play needs to be configured for your application on the Google Play Console. If you are updating an existing app that doesn't use App Signing by Google Play, please check our ",(0,o.jsx)(n.a,{href:"#migrating-old-android-react-native-apps-to-use-app-signing-by-google-play",children:"migration section"})," to learn how to perform that configuration change."]}),"\n",(0,o.jsx)(n.h2,{id:"testing-the-release-build-of-your-app",children:"Testing the release build of your app"}),"\n",(0,o.jsx)(n.p,{children:"Before uploading the release build to the Play Store, make sure you test it thoroughly. First uninstall any previous version of the app you already have installed. Install it on the device using the following command in the project root:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"npx react-native run-android --variant=release\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that ",(0,o.jsx)(n.code,{children:"--variant release"})," is only available if you've set up signing as described above."]}),"\n",(0,o.jsx)(n.p,{children:"You can terminate any running bundler instances, since all your framework and JavaScript code is bundled in the APK's assets."}),"\n",(0,o.jsx)(n.h2,{id:"publishing-to-other-stores",children:"Publishing to other stores"}),"\n",(0,o.jsx)(n.p,{children:"By default, the generated APK has the native code for both x86 and ARMv7a CPU architectures. This makes it easier to share APKs that run on almost all Android devices. However, this has the downside that there will be some unused native code on any device, leading to unnecessarily bigger APKs."}),"\n",(0,o.jsx)(n.p,{children:"You can create an APK for each CPU by changing the following line in android/app/build.gradle:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:'- ndk {\n-   abiFilters "armeabi-v7a", "x86"\n- }\n- def enableSeparateBuildPerCPUArchitecture = false\n+ def enableSeparateBuildPerCPUArchitecture = true\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Upload both these files to markets which support device targeting, such as ",(0,o.jsx)(n.a,{href:"https://developer.android.com/google/play/publishing/multiple-apks.html",children:"Google Play"})," and ",(0,o.jsx)(n.a,{href:"https://developer.amazon.com/docs/app-submission/device-filtering-and-compatibility.html",children:"Amazon AppStore"}),", and the users will automatically get the appropriate APK. If you want to upload to other markets, such as ",(0,o.jsx)(n.a,{href:"https://www.apkfiles.com/",children:"APKFiles"}),", which do not support multiple APKs for a single app, change the following line as well to create the default universal APK with binaries for both CPUs."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:"- universalApk false  // If true, also generate a universal APK\n+ universalApk true  // If true, also generate a universal APK\n"})}),"\n",(0,o.jsx)(n.h2,{id:"enabling-proguard-to-reduce-the-size-of-the-apk-optional",children:"Enabling Proguard to reduce the size of the APK (optional)"}),"\n",(0,o.jsx)(n.p,{children:"Proguard is a tool that can slightly reduce the size of the APK. It does this by stripping parts of the React Native Java bytecode (and its dependencies) that your app is not using."}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"caution",children:(0,o.jsxs)(n.p,{children:["Make sure to thoroughly test your app if you've enabled Proguard. Proguard often requires configuration specific to each native library you're using. See ",(0,o.jsx)(n.code,{children:"app/proguard-rules.pro"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["To enable Proguard, edit ",(0,o.jsx)(n.code,{children:"android/app/build.gradle"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",children:"/**\n * Run Proguard to shrink the Java bytecode in release builds.\n */\ndef enableProguardInReleaseBuilds = true\n"})}),"\n",(0,o.jsx)(n.h2,{id:"migrating-old-android-react-native-apps-to-use-app-signing-by-google-play",children:"Migrating old Android React Native apps to use App Signing by Google Play"}),"\n",(0,o.jsxs)(n.p,{children:["If you are migrating from previous version of React Native chances are your app does not use App Signing by Google Play feature. We recommend you enable that in order to take advantage from things like automatic app splitting. In order to migrate from the old way of signing you need to start by ",(0,o.jsx)(n.a,{href:"#generating-an-upload-key",children:"generating new upload key"})," and then replacing release signing config in ",(0,o.jsx)(n.code,{children:"android/app/build.gradle"})," to use the upload key instead of the release one (see section about ",(0,o.jsx)(n.a,{href:"#adding-signing-config-to-your-apps-gradle-config",children:"adding signing config to gradle"}),"). Once that's done you should follow the ",(0,o.jsx)(n.a,{href:"https://support.google.com/googleplay/android-developer/answer/7384423",children:"instructions from Google Play Help website"})," in order to send your original release key to Google Play."]}),"\n",(0,o.jsx)(n.h2,{id:"default-permissions",children:"Default Permissions"}),"\n",(0,o.jsxs)(n.p,{children:["By default, ",(0,o.jsx)(n.code,{children:"INTERNET"})," permission is added to your Android app as pretty much all apps use it. ",(0,o.jsx)(n.code,{children:"SYSTEM_ALERT_WINDOW"})," permission is added to your Android APK in debug mode but it will be removed in production."]})]})}const c=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(p,e)})):p(e)}},71426:(e,n,i)=>{var o=i(27378),a=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,i){var o,t={},d=null,p=null;for(o in void 0!==i&&(d=""+i),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)r.call(n,o)&&!l.hasOwnProperty(o)&&(t[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===t[o]&&(t[o]=n[o]);return{$$typeof:a,type:e,key:d,ref:p,props:t,_owner:s.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},24246:(e,n,i)=>{e.exports=i(71426)},71670:(e,n,i)=>{i.d(n,{Zo:()=>s,ah:()=>t});var o=i(27378);const a=o.createContext({});function t(e){const n=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function s({components:e,children:n,disableParentContext:i}){let s;return s=i?"function"==typeof e?e({}):e||r:t(e),o.createElement(a.Provider,{value:s},n)}}}]);