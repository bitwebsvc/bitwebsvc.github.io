/*! For license information please see 255d8fe2.c6a7d11e.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[88379],{62802:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(24246),a=t(71670);const o={title:"Right-to-Left Layout Support For React Native Apps",author:"Mengjue (Mandy) Wang",authorTitle:"Software Engineer Intern at Facebook",authorURL:"https://github.com/MengjueW",authorImageURL:"https://avatars0.githubusercontent.com/u/13987140?v=3&s=128",tags:["engineering"]},s=void 0,r={permalink:"/blog/2016/08/19/right-to-left-support-for-react-native-apps",source:"@site/blog/2016-08-19-right-to-left-support-for-react-native-apps.md",title:"Right-to-Left Layout Support For React Native Apps",description:"After launching an app to the app stores, internationalization is the next step to further your audience reach. Over 20 countries and numerous people around the world use Right-to-Left (RTL) languages. Thus, making your app support RTL for them is necessary.",date:"2016-08-19T00:00:00.000Z",formattedDate:"August 19, 2016",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],readingTime:6.63,hasTruncateMarker:!1,authors:[{name:"Mengjue (Mandy) Wang",title:"Software Engineer Intern at Facebook",url:"https://github.com/MengjueW",imageURL:"https://avatars0.githubusercontent.com/u/13987140?v=3&s=128"}],frontMatter:{title:"Right-to-Left Layout Support For React Native Apps",author:"Mengjue (Mandy) Wang",authorTitle:"Software Engineer Intern at Facebook",authorURL:"https://github.com/MengjueW",authorImageURL:"https://avatars0.githubusercontent.com/u/13987140?v=3&s=128",tags:["engineering"]},unlisted:!1,prevItem:{title:"Expo Talks: Adam on Unraveling Navigation",permalink:"/blog/2016/09/08/exponent-talks-unraveling-navigation"},nextItem:{title:"San Francisco Meetup Recap",permalink:"/blog/2016/08/12/react-native-meetup-san-francisco"}},l={authorsImageUrls:[void 0]},c=[{value:"Overview Changes in RN for RTL support",id:"overview-changes-in-rn-for-rtl-support",level:2},{value:"Making an App RTL-ready",id:"making-an-app-rtl-ready",level:2},{value:"Writing RTL-ready Components",id:"writing-rtl-ready-components",level:2},{value:"Icons with Directional Meaning",id:"icons-with-directional-meaning",level:4},{value:"Gestures and Animations",id:"gestures-and-animations",level:4},{value:"Gestures Example",id:"gestures-example",level:5},{value:"Animation Example",id:"animation-example",level:5},{value:"Maintaining Your RTL-ready App",id:"maintaining-your-rtl-ready-app",level:2},{value:"Limitations and Future Plan",id:"limitations-and-future-plan",level:2},{value:"Try it Out!",id:"try-it-out",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",h2:"h2",img:"img",ul:"ul",li:"li",ol:"ol",pre:"pre",h4:"h4",h5:"h5"},(0,a.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"After launching an app to the app stores, internationalization is the next step to further your audience reach. Over 20 countries and numerous people around the world use Right-to-Left (RTL) languages. Thus, making your app support RTL for them is necessary."}),"\n",(0,i.jsxs)(n.p,{children:["We're glad to announce that React Native has been improved to support RTL layouts. This is now available in the ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native",children:"react-native"})," master branch today, and will be available in the next RC: ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/releases",children:(0,i.jsx)(n.code,{children:"v0.33.0-rc"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This involved changing ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/css-layout",children:"css-layout"}),", the core layout engine used by RN, and RN core implementation, as well as specific OSS JS components to support RTL."]}),"\n",(0,i.jsxs)(n.p,{children:["To battle test the RTL support in production, the latest version of the ",(0,i.jsx)(n.strong,{children:"Facebook Ads Manager"})," app (the first cross-platform 100% RN app) is now available in Arabic and Hebrew with RTL layouts for both ",(0,i.jsx)(n.a,{href:"https://itunes.apple.com/app/id964397083",children:"iOS"})," and ",(0,i.jsx)(n.a,{href:"https://play.google.com/store/apps/details?id=com.facebook.adsmanager",children:"Android"}),". Here is how it looks like in those RTL languages:"]}),"\n",(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/blog/assets/rtl-ama-ios-arabic.png",width:280,style:{margin:10}}),(0,i.jsx)("img",{src:"/blog/assets/rtl-ama-android-hebrew.png",width:280,style:{margin:10}})]}),"\n",(0,i.jsx)(n.h2,{id:"overview-changes-in-rn-for-rtl-support",children:"Overview Changes in RN for RTL support"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/facebook/css-layout",children:"css-layout"})," already has a concept of ",(0,i.jsx)(n.code,{children:"start"})," and ",(0,i.jsx)(n.code,{children:"end"})," for the layout. In the Left-to-Right (LTR) layout, ",(0,i.jsx)(n.code,{children:"start"})," means ",(0,i.jsx)(n.code,{children:"left"}),", and ",(0,i.jsx)(n.code,{children:"end"})," means ",(0,i.jsx)(n.code,{children:"right"}),". But in RTL, ",(0,i.jsx)(n.code,{children:"start"})," means ",(0,i.jsx)(n.code,{children:"right"}),", and ",(0,i.jsx)(n.code,{children:"end"})," means ",(0,i.jsx)(n.code,{children:"left"}),". This means we can make RN depend on the ",(0,i.jsx)(n.code,{children:"start"})," and ",(0,i.jsx)(n.code,{children:"end"})," calculation to compute the correct layout, which includes ",(0,i.jsx)(n.code,{children:"position"}),", ",(0,i.jsx)(n.code,{children:"padding"}),", and ",(0,i.jsx)(n.code,{children:"margin"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In addition, ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/css-layout",children:"css-layout"})," already makes each component's direction inherits from its parent. This means, we simply need to set the direction of the root component to RTL, and the entire app will flip."]}),"\n",(0,i.jsx)(n.p,{children:"The diagram below describes the changes at high level:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(60419).Z+"",width:"1076",height:"642"})}),"\n",(0,i.jsx)(n.p,{children:"These include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/facebook/css-layout/commit/46c842c71a1232c3c78c4215275d104a389a9a0f",children:"css-layout RTL support for absolute positioning"})}),"\n",(0,i.jsxs)(n.li,{children:["mapping ",(0,i.jsx)(n.code,{children:"left"})," and ",(0,i.jsx)(n.code,{children:"right"})," to ",(0,i.jsx)(n.code,{children:"start"})," and ",(0,i.jsx)(n.code,{children:"end"})," in RN core implementation for shadow nodes"]}),"\n",(0,i.jsxs)(n.li,{children:["and exposing a ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/f0fb228ec76ed49e6ed6d786d888e8113b8959a2/Libraries/Utilities/I18nManager.js",children:"bridged utility module"})," to help control the RTL layout"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"With this update, when you allow RTL layout for your app:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"every component layout will flip horizontally"}),"\n",(0,i.jsx)(n.li,{children:"some gestures and animations will automatically have RTL layout, if you are using RTL-ready OSS components"}),"\n",(0,i.jsx)(n.li,{children:"minimal additional effort may be needed to make your app fully RTL-ready"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"making-an-app-rtl-ready",children:"Making an App RTL-ready"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To support RTL, you should first add the RTL language bundles to your app."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["See the general guides from ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/library/ios/documentation/MacOSX/Conceptual/BPInternational/LocalizingYourApp/LocalizingYourApp.html#//apple_ref/doc/uid/10000171i-CH5-SW1",children:"iOS"})," and ",(0,i.jsx)(n.a,{href:"https://developer.android.com/training/basics/supporting-devices/languages.html",children:"Android"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Allow RTL layout for your app by calling the ",(0,i.jsx)(n.code,{children:"allowRTL()"})," function at the beginning of native code. We provided this utility to only apply to an RTL layout when your app is ready. Here is an example:"]}),"\n",(0,i.jsx)(n.p,{children:"iOS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objc",children:"// in AppDelegate.m\n  [[RCTI18nUtil sharedInstance] allowRTL:YES];\n"})}),"\n",(0,i.jsx)(n.p,{children:"Android:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// in MainActivity.java\n  I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();\n  sharedI18nUtilInstance.allowRTL(context, true);\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For Android, you need add ",(0,i.jsx)(n.code,{children:'android:supportsRtl="true"'})," to the ",(0,i.jsx)(n.a,{href:"https://developer.android.com/guide/topics/manifest/application-element.html",children:(0,i.jsx)(n.code,{children:"<application>"})})," element in ",(0,i.jsx)(n.code,{children:"AndroidManifest.xml"})," file."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Now, when you recompile your app and change the device language to an RTL language (e.g. Arabic or Hebrew), your app layout should change to RTL automatically."}),"\n",(0,i.jsx)(n.h2,{id:"writing-rtl-ready-components",children:"Writing RTL-ready Components"}),"\n",(0,i.jsx)(n.p,{children:"In general, most components are already RTL-ready, for example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Left-to-Right Layout"}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/blog/assets/rtl-demo-listitem-ltr.png",width:"300"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Right-to-Left Layout"}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/blog/assets/rtl-demo-listitem-rtl.png",width:"300"}),"\n",(0,i.jsxs)(n.p,{children:["However, there are several cases to be aware of, for which you will need the ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/f0fb228ec76ed49e6ed6d786d888e8113b8959a2/Libraries/Utilities/I18nManager.js",children:(0,i.jsx)(n.code,{children:"I18nManager"})}),". In ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/f0fb228ec76ed49e6ed6d786d888e8113b8959a2/Libraries/Utilities/I18nManager.js",children:(0,i.jsx)(n.code,{children:"I18nManager"})}),", there is a constant ",(0,i.jsx)(n.code,{children:"isRTL"})," to tell if layout of app is RTL or not, so that you can make the necessary changes according to the layout."]}),"\n",(0,i.jsx)(n.h4,{id:"icons-with-directional-meaning",children:"Icons with Directional Meaning"}),"\n",(0,i.jsx)(n.p,{children:"If your component has icons or images, they will be displayed the same way in LTR and RTL layout, because RN will not flip your source image. Therefore, you should flip them according to the layout style."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Left-to-Right Layout"}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/blog/assets/rtl-demo-icon-ltr.png",width:"300"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Right-to-Left Layout"}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/blog/assets/rtl-demo-icon-rtl.png",width:"300"}),"\n",(0,i.jsx)(n.p,{children:"Here are two ways to flip the icon according to the direction:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Adding a ",(0,i.jsx)(n.code,{children:"transform"})," style to the image component:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<Image\n  source={...}\n  style={{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}}\n/>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Or, changing the image source according to the direction:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"let imageSource = require('./back.png');\nif (I18nManager.isRTL) {\n  imageSource = require('./forward.png');\n}\nreturn <Image source={imageSource} />;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"gestures-and-animations",children:"Gestures and Animations"}),"\n",(0,i.jsxs)(n.p,{children:["In Android and iOS development, when you change to RTL layout, the gestures and animations are the opposite of LTR layout. Currently, in RN, gestures and animations are not supported on RN core code level, but on components level. The good news is, some of these components already support RTL today, such as ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/38a6eec0db85a5204e85a9a92b4dee2db9641671/Libraries/Experimental/SwipeableRow/SwipeableRow.js",children:(0,i.jsx)(n.code,{children:"SwipeableRow"})})," and ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/tree/master/Libraries/NavigationExperimental",children:(0,i.jsx)(n.code,{children:"NavigationExperimental"})}),". However, other components with gestures will need to support RTL manually."]}),"\n",(0,i.jsxs)(n.p,{children:["A good example to illustrate gesture RTL support is ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/38a6eec0db85a5204e85a9a92b4dee2db9641671/Libraries/Experimental/SwipeableRow/SwipeableRow.js",children:(0,i.jsx)(n.code,{children:"SwipeableRow"})}),"."]}),"\n",(0,i.jsxs)("p",{align:"center",children:[(0,i.jsx)("img",{src:"/blog/assets/rtl-demo-swipe-ltr.png",width:280,style:{margin:10}}),(0,i.jsx)("img",{src:"/blog/assets/rtl-demo-swipe-rtl.png",width:280,style:{margin:10}})]}),"\n",(0,i.jsx)(n.h5,{id:"gestures-example",children:"Gestures Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// SwipeableRow.js\n_isSwipingExcessivelyRightFromClosedPosition(gestureState: Object): boolean {\n  // ...\n  const gestureStateDx = IS_RTL ? -gestureState.dx : gestureState.dx;\n  return (\n    this._isSwipingRightFromClosed(gestureState) &&\n    gestureStateDx > RIGHT_SWIPE_THRESHOLD\n  );\n},\n"})}),"\n",(0,i.jsx)(n.h5,{id:"animation-example",children:"Animation Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// SwipeableRow.js\n_animateBounceBack(duration: number): void {\n  // ...\n  const swipeBounceBackDistance = IS_RTL ?\n    -RIGHT_SWIPE_BOUNCE_BACK_DISTANCE :\n    RIGHT_SWIPE_BOUNCE_BACK_DISTANCE;\n  this._animateTo(\n    -swipeBounceBackDistance,\n    duration,\n    this._animateToClosedPositionDuringBounce,\n  );\n},\n"})}),"\n",(0,i.jsx)(n.h2,{id:"maintaining-your-rtl-ready-app",children:"Maintaining Your RTL-ready App"}),"\n",(0,i.jsxs)(n.p,{children:["Even after the initial RTL-compatible app release, you will likely need to iterate on new features. To improve development efficiency, ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/f0fb228ec76ed49e6ed6d786d888e8113b8959a2/Libraries/Utilities/I18nManager.js",children:(0,i.jsx)(n.code,{children:"I18nManager"})})," provides the ",(0,i.jsx)(n.code,{children:"forceRTL()"})," function for faster RTL testing without changing the test device language. You might want to provide a simple switch for this in your app. Here's an example from the RTL example in the RNTester:"]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/blog/assets/rtl-demo-forcertl.png",width:"300"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<RNTesterBlock title={'Quickly Test RTL Layout'}>\n  <View style={styles.flexDirectionRow}>\n    <Text style={styles.switchRowTextView}>forceRTL</Text>\n    <View style={styles.switchRowSwitchView}>\n      <Switch\n        onValueChange={this._onDirectionChange}\n        style={styles.rightAlignStyle}\n        value={this.state.isRTL}\n      />\n    </View>\n  </View>\n</RNTesterBlock>;\n\n_onDirectionChange = () => {\n  I18nManager.forceRTL(!this.state.isRTL);\n  this.setState({isRTL: !this.state.isRTL});\n  Alert.alert(\n    'Reload this page',\n    'Please reload this page to change the UI direction! ' +\n      'All examples in this app will be affected. ' +\n      'Check them out to see what they look like in RTL layout.',\n  );\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"When working on a new feature, you can easily toggle this button and reload the app to see RTL layout. The benefit is you won't need to change the language setting to test, however some text alignment won't change, as explained in the next section. Therefore, it's always a good idea to test your app in the RTL language before launching."}),"\n",(0,i.jsx)(n.h2,{id:"limitations-and-future-plan",children:"Limitations and Future Plan"}),"\n",(0,i.jsx)(n.p,{children:"The RTL support should cover most of the UX in your app; however, there are some limitations for now:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Text alignment behaviors differ in Android and iOS","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In iOS, the default text alignment depends on the active language bundle, they are consistently on one side. In Android, the default text alignment depends on the language of the text content, i.e. English will be left-aligned and Arabic will be right-aligned."}),"\n",(0,i.jsx)(n.li,{children:"In theory, this should be made consistent across platform, but some people may prefer one behavior to another when using an app. More user experience research may be needed to find out the best practice for text alignment."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'There is no "true" left/right'}),"\n",(0,i.jsxs)(n.p,{children:["As discussed before, we map the ",(0,i.jsx)(n.code,{children:"left"}),"/",(0,i.jsx)(n.code,{children:"right"})," styles from the JS side to ",(0,i.jsx)(n.code,{children:"start"}),"/",(0,i.jsx)(n.code,{children:"end"}),", all ",(0,i.jsx)(n.code,{children:"left"}),' in code for RTL layout becomes "right" on screen, and ',(0,i.jsx)(n.code,{children:"right"}),' in code becomes "left" on screen. This is convenient because you don\'t need to change your product code too much, but it means there is no way to specify "true left" or "true right" in the code. In the future, allowing a component to control its direction regardless of the language may be necessary.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make RTL support for gestures and animations more developer friendly"}),"\n",(0,i.jsx)(n.p,{children:"Currently, there is still some programming effort required to make gestures and animations RTL compatible. In the future, it would be ideal to find a way to make gestures and animations RTL support more developer friendly."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"try-it-out",children:"Try it Out!"}),"\n",(0,i.jsxs)(n.p,{children:["Check out the ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/RTL/RTLExample.js",children:(0,i.jsx)(n.code,{children:"RTLExample"})})," in the ",(0,i.jsx)(n.code,{children:"RNTester"})," to understand more about RTL support, and let us know how it works for you!"]}),"\n",(0,i.jsx)(n.p,{children:"Finally, thank you for reading! We hope that the RTL support for React Native helps you grow your apps for international audience!"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},71426:(e,n,t)=>{var i=t(27378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,o={},c=null,d=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,i)&&!l.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:a,type:e,key:c,ref:d,props:o,_owner:r.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},60419:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/rtl-rn-core-updates-a7f3c54c3cd829c53a6da1d69bb8bf3c.png"},71670:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>o});var i=t(27378);const a=i.createContext({});function o(e){const n=i.useContext(a);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||s:o(e),i.createElement(a.Provider,{value:r},n)}}}]);