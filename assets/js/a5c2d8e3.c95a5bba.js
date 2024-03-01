/*! For license information please see a5c2d8e3.c95a5bba.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[22040],{76972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(24246),r=t(71670);const s={title:"Announcing React Native 0.66",authors:["lunaleaps"],tags:["announcement","release"]},a=void 0,o={permalink:"/blog/2021/10/01/version-066",source:"@site/blog/2021-10-01-version-066.md",title:"Announcing React Native 0.66",description:"Today we\u2019re releasing React Native v0.66 for Android 12 and iOS 15 support alongside fixes and general updates.",date:"2021-10-01T00:00:00.000Z",formattedDate:"October 1, 2021",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],readingTime:3.96,hasTruncateMarker:!0,authors:[{name:"Luna Wei",title:"Software Engineer at Meta",url:"https://twitter.com/lunaleaps",imageURL:"https://github.com/lunaleaps.png",key:"lunaleaps"}],frontMatter:{title:"Announcing React Native 0.66",authors:["lunaleaps"],tags:["announcement","release"]},unlisted:!1,prevItem:{title:"Toward Hermes being the Default",permalink:"/blog/2021/10/26/toward-hermes-being-the-default"},nextItem:{title:"Preparing Your App for iOS 15 and Android 12",permalink:"/blog/2021/09/01/preparing-your-app-for-iOS-15-and-android-12"}},l={authorsImageUrls:[void 0]},d=[{value:"Highlights",id:"highlights",level:2},{value:"Handle taps on child views outside parent boundaries on Android",id:"handle-taps-on-child-views-outside-parent-boundaries-on-android",level:3},{value:"New Bluetooth Permissions on Android",id:"new-bluetooth-permissions-on-android",level:3},{value:"Better Support for Apple Silicon, Xcode 13, and iOS 15",id:"better-support-for-apple-silicon-xcode-13-and-ios-15",level:3},{value:"Hermes 0.9.0",id:"hermes-090",level:3},{value:"Nightly and \u201cCommitly\u201d Releases",id:"nightly-and-commitly-releases",level:3},{value:"Using Nightly Releases (Nightlies)",id:"using-nightly-releases-nightlies",level:4},{value:"Using Commitly Releases (Commitlies)",id:"using-commitly-releases-commitlies",level:4},{value:"Acknowledgements",id:"acknowledgements",level:3}];function h(e){const n=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3",code:"code",h4:"h4",pre:"pre",strong:"strong"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Today we\u2019re releasing React Native v0.66 for Android 12 and iOS 15 support alongside fixes and general updates."}),"\n",(0,i.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/blog/2021/10/01/version-066#handle-taps-on-child-views-outside-parent-boundaries-on-android",children:"Handle taps on views outside parent bounds on Android"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/blog/2021/10/01/version-066#new-bluetooth-permissions-on-android",children:"New Bluetooth Permissions on Android"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/blog/2021/10/01/version-066#better-support-for-apple-silicon-xcode-13-and-ios-15",children:"Better Support for Apple Silicon, Xcode 13, and iOS 15"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/blog/2021/10/01/version-066#hermes-090",children:"Hermes 0.9.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/blog/2021/10/01/version-066#nightly-and-commitly-releases",children:"Nightly and \u201cCommitly\u201d Releases"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"handle-taps-on-child-views-outside-parent-boundaries-on-android",children:"Handle taps on child views outside parent boundaries on Android"}),"\n",(0,i.jsxs)(n.p,{children:["Thanks to ",(0,i.jsx)(n.a,{href:"https://github.com/hsource",children:"@hsource"})," for adding interaction support for children rendered outside of parent view boundaries via ",(0,i.jsx)(n.code,{children:"overflow: visible"}),". This is a common use-case and aligns React Native on Android more closely with web standards."]}),"\n",(0,i.jsxs)(n.p,{children:["Find more details on the ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/pull/29039",children:"pull request"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"new-bluetooth-permissions-on-android",children:"New Bluetooth Permissions on Android"}),"\n",(0,i.jsxs)(n.p,{children:["We\u2019ve added support for ",(0,i.jsx)(n.a,{href:"https://developer.android.com/about/versions/12/features/bluetooth-permissions",children:"new Bluetooth permissions"})," in preparation for Android 12 and we plan to update the ",(0,i.jsx)(n.code,{children:"targetSDKVersion"})," to 31 in the next release."]}),"\n",(0,i.jsx)(n.h3,{id:"better-support-for-apple-silicon-xcode-13-and-ios-15",children:"Better Support for Apple Silicon, Xcode 13, and iOS 15"}),"\n",(0,i.jsx)(n.p,{children:"This release provides a number of solutions to make Xcode builds for iOS on Apple Silicon (M1) Mac machines more reliable."}),"\n",(0,i.jsxs)(n.p,{children:["Notably, the new app template now includes a CocoaPods workaround (thanks to ",(0,i.jsx)(n.a,{href:"https://github.com/MikeHardy",children:"@mikehardy"}),"!).\nTo apply, make sure your app\u2019s Podfile has ",(0,i.jsx)(n.code,{children:"__apply_Xcode_12_5_M1_post_install_workaround(installer)"})," added in the ",(0,i.jsx)(n.code,{children:"post_install"})," step."]}),"\n",(0,i.jsxs)(n.p,{children:["In addition ",(0,i.jsx)(n.code,{children:"RCT-Folly.podspec"})," has been ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/commit/8b6d7fddd65a9b5caf599e8ff7b090a176a6f11f",children:"updated to prevent arm64 linker failure"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Check out this ",(0,i.jsx)(n.a,{href:"/blog/2021/09/01/preparing-your-app-for-iOS-15-and-android-12",children:"post"})," we shared on preparing your app for iOS 15 and Android 12."]}),"\n",(0,i.jsx)(n.h3,{id:"hermes-090",children:"Hermes 0.9.0"}),"\n",(0,i.jsx)(n.p,{children:"Hermes 0.9.0 is primarily about closing the gap between Hermes release cut point and this React Native release."}),"\n",(0,i.jsx)(n.p,{children:"Among ~400 commits, there have been general bug fixes alongside memory and size wins."}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/hermes/issues/586",children:"Hermes 0.9.0 release issue"})," for more details"]}),"\n",(0,i.jsx)(n.h3,{id:"nightly-and-commitly-releases",children:"Nightly and \u201cCommitly\u201d Releases"}),"\n",(0,i.jsxs)(n.p,{children:["In a ",(0,i.jsx)(n.a,{href:"/blog/2021/08/19/h2-2021",children:"recent blog post"})," we shared that one of our goals in the second half of 2021 is to improve our release process to be faster and more stable. As part of this effort we are working to make React Native more stable on main and to reduce the bugs identified during our Release Candidate process."]}),"\n",(0,i.jsx)(n.p,{children:"While we have been publishing nightly releases of React Native for over a year, these releases haven\u2019t been effectively used by most projects. They are now easier to access and we hope to use them as release candidates going forward. Nightly releases are published to npm under the \u201cnightly\u201d tag."}),"\n",(0,i.jsx)(n.p,{children:"To improve the process of testing individual commits, React Native\u2019s CI will now create a tarball artifact for each commit on the main and release branches as well as for each PR. We refer to them as commitlies. These commitlies will not be published to npm, but they can be downloaded directly from CircleCI. See instructions below."}),"\n",(0,i.jsx)(n.p,{children:"Want to help get a PR merged? By trying out the related commitly and verifying the change, you will be providing valuable signal to help get the change landed!"}),"\n",(0,i.jsx)(n.h4,{id:"using-nightly-releases-nightlies",children:"Using Nightly Releases (Nightlies)"}),"\n",(0,i.jsxs)(n.p,{children:["The process for migrating your project to a React Native nightly release is very similar to the one you would follow when upgrading to a regular version, with the exception that tools like the Upgrade Helper do not currently work with nightlies. With that in mind, we recommend that you first upgrade your project to the most recent stable release if you have not done so yet. Then, run ",(0,i.jsx)(n.code,{children:"yarn upgrade react-native@nightly"})," to install the most recent nightly release. Note that there may be additional changes that are needed for your project to work properly on a nightly release."]}),"\n",(0,i.jsx)(n.h4,{id:"using-commitly-releases-commitlies",children:"Using Commitly Releases (Commitlies)"}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/blog/assets/0.66-artifact.png",alt:"Screenshot of CircleCI artifact panel to find tarball"}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(n.p,{children:'Find the "build_npm_package-1" job related to a commit and head to the "Artifacts" panel to download the tarball for the commitly.'})})]}),"\n",(0,i.jsxs)(n.p,{children:["Just like with a nightly release, first make sure that your project has been upgraded to the most recent stable version. Then, go to the ",(0,i.jsxs)(n.a,{href:"https://app.circleci.com/pipelines/github/facebook/react-native",children:[(0,i.jsx)(n.code,{children:"react-native"})," dashboard on Circle CI"]})," and look up the workflow that was triggered by the commit in question. There, you should see a job named ",(0,i.jsx)(n.code,{children:"build_npm_package"}),". That job will have an \u201cArtifacts\u201d panel which will provide a link that you may use to download a tarball file. You can then run the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Update your react-native dependency to the tarball\n# using your preferred package manager\n$ yarn add <path to tarball>\n$ npm add <path to tarball>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,i.jsxs)(n.p,{children:["This release includes ",(0,i.jsx)(n.strong,{children:"621 commits"})," with ",(0,i.jsx)(n.strong,{children:"92 contributors"}),"! Thank you to all our contributors new and old! You can find the ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/main/CHANGELOG.md#v0660",children:"full changelog here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"As well, thank you to the following contributors for their support in preparing, testing and unblocking this release!"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/acoates-ms",children:"@acoates-ms"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/dulmandakh",children:"@dulmandakh"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/kelset",children:"@kelset"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/kraenhansen",children:"@kraenhansen"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/MikeHardy",children:"@mikehardy"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/NickGerleman",children:"@NickGerleman"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/pvinis",children:"@pvinis"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/satya164",children:"@satya164"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Simek",children:"@Simek"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/swrobel",children:"@swrobel"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/thymikee",children:"@thymikee"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/tido64",children:"@tido64"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/titozzz",children:"@titozzz"})}),"\n"]})]})}const c=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}},71426:(e,n,t)=>{var i=t(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var i,s={},d=null,h=null;for(i in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(h=n.ref),n)a.call(n,i)&&!l.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:r,type:e,key:d,ref:h,props:s,_owner:o.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>s});var i=t(27378);const r=i.createContext({});function s(e){const n=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:s(e),i.createElement(r.Provider,{value:o},n)}}}]);