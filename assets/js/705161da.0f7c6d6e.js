/*! For license information please see 705161da.0f7c6d6e.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[84481],{73239:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=t(24246),s=t(71670);const r={title:"0.36: Headless JS, the Keyboard API, & more",author:"H\xe9ctor Ramos",authorTitle:"Developer Advocate at Facebook",authorURL:"https://twitter.com/hectorramos",authorImageURL:"https://s.gravatar.com/avatar/f2223874e66e884c99087e452501f2da?s=128",authorTwitter:"hectorramos",tags:["announcement"]},o=void 0,i={permalink:"/blog/2016/10/25/0.36-headless-js-the-keyboard-api-and-more",source:"@site/blog/2016-10-25-0.36-headless-js-the-keyboard-api-and-more.md",title:"0.36: Headless JS, the Keyboard API, & more",description:"Today we are releasing React Native 0.36. Read on to learn more about what's new.",date:"2016-10-25T00:00:00.000Z",formattedDate:"October 25, 2016",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:2.22,hasTruncateMarker:!1,authors:[{name:"H\xe9ctor Ramos",title:"Developer Advocate at Facebook",url:"https://twitter.com/hectorramos",imageURL:"https://s.gravatar.com/avatar/f2223874e66e884c99087e452501f2da?s=128"}],frontMatter:{title:"0.36: Headless JS, the Keyboard API, & more",author:"H\xe9ctor Ramos",authorTitle:"Developer Advocate at Facebook",authorURL:"https://twitter.com/hectorramos",authorImageURL:"https://s.gravatar.com/avatar/f2223874e66e884c99087e452501f2da?s=128",authorTwitter:"hectorramos",tags:["announcement"]},unlisted:!1,prevItem:{title:"Introducing Button, Faster Installs with Yarn, and a Public Roadmap",permalink:"/blog/2016/11/08/introducing-button-yarn-and-a-public-roadmap"},nextItem:{title:"Expo Talks: Adam on Unraveling Navigation",permalink:"/blog/2016/09/08/exponent-talks-unraveling-navigation"}},d={authorsImageUrls:[void 0]},l=[{value:"Headless JS",id:"headless-js",level:2},{value:"The Keyboard API",id:"the-keyboard-api",level:2},{value:"Animated Division",id:"animated-division",level:2},{value:"Dark Status Bars",id:"dark-status-bars",level:2},{value:"...and more",id:"and-more",level:2}];function c(e){const a=Object.assign({p:"p",a:"a",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Today we are releasing ",(0,n.jsx)(a.a,{href:"https://github.com/facebook/react-native/releases/tag/v0.36.0",children:"React Native 0.36"}),". Read on to learn more about what's new."]}),"\n",(0,n.jsx)(a.h2,{id:"headless-js",children:"Headless JS"}),"\n",(0,n.jsx)(a.p,{children:"Headless JS is a way to run tasks in JavaScript while your app is in the background. It can be used, for example, to sync fresh data, handle push notifications, or play music. It is only available on Android, for now."}),"\n",(0,n.jsxs)(a.p,{children:["To get started, define your async task in a dedicated file (e.g. ",(0,n.jsx)(a.code,{children:"SomeTaskName.js"}),"):"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:"module.exports = async taskData => {\n  // Perform your task here.\n};\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Next, register your task in on ",(0,n.jsx)(a.code,{children:"AppRegistry"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:"AppRegistry.registerHeadlessTask('SomeTaskName', () =>\n  require('SomeTaskName'),\n);\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Using Headless JS does require some native Java code to be written in order to allow you to start up the service when needed. Take a look at our new ",(0,n.jsx)(a.a,{href:"/docs/headless-js-android",children:"Headless JS docs"})," to learn more!"]}),"\n",(0,n.jsx)(a.h2,{id:"the-keyboard-api",children:"The Keyboard API"}),"\n",(0,n.jsxs)(a.p,{children:["Working with the on-screen keyboard is now easier with ",(0,n.jsx)(a.a,{href:"/docs/keyboard",children:(0,n.jsx)(a.code,{children:"Keyboard"})}),". You can now listen for native keyboard events and react to them. For example, to dismiss the active keyboard, simply call ",(0,n.jsx)(a.code,{children:"Keyboard.dismiss()"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"import {Keyboard} from 'react-native';\n\n// Hide that keyboard!\nKeyboard.dismiss();\n"})}),"\n",(0,n.jsx)(a.h2,{id:"animated-division",children:"Animated Division"}),"\n",(0,n.jsxs)(a.p,{children:["Combining two animated values via addition, multiplication, and modulo are already supported by React Native. With version 0.36, combining two ",(0,n.jsx)(a.a,{href:"/docs/animated#divide",children:"animated values via division"})," is now possible. There are some cases where an animated value needs to invert another animated value for calculation. An example is inverting a scale (2x --\x3e 0.5x):"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"const a = Animated.Value(1);\nconst b = Animated.divide(1, a);\n\nAnimated.spring(a, {\n  toValue: 2,\n}).start();\n"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"b"})," will then follow ",(0,n.jsx)(a.code,{children:"a"}),"'s spring animation and produce the value of ",(0,n.jsx)(a.code,{children:"1 / a"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"The basic usage is like this:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"<Animated.View style={{transform: [{scale: a}]}}>\n  <Animated.Image style={{transform: [{scale: b}]}} />\n<Animated.View>\n"})}),"\n",(0,n.jsxs)(a.p,{children:["In this example, the inner image won't get stretched at all because the parent's scaling gets cancelled out. If you'd like to learn more, check out the ",(0,n.jsx)(a.a,{href:"/docs/animations",children:"Animations guide"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"dark-status-bars",children:"Dark Status Bars"}),"\n",(0,n.jsxs)(a.p,{children:["A new ",(0,n.jsx)(a.code,{children:"barStyle"})," value has been added to ",(0,n.jsx)(a.code,{children:"StatusBar"}),": ",(0,n.jsx)(a.code,{children:"dark-content"}),". With this addition, you can now use ",(0,n.jsx)(a.a,{href:"/docs/statusbar#barstyle",children:(0,n.jsx)(a.code,{children:"barStyle"})})," on both Android and iOS. The behavior will now be the following:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"default"}),": Use the platform default (light on iOS, dark on Android)."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"light-content"}),": Use a light status bar with black text and icons."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"dark-content"}),": Use a dark status bar with white text and icons."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"and-more",children:"...and more"}),"\n",(0,n.jsxs)(a.p,{children:["The above is just a sample of what has changed in 0.36. Check out the ",(0,n.jsx)(a.a,{href:"https://github.com/facebook/react-native/releases/tag/v0.36.0",children:"release notes on GitHub"})," to see the full list of new features, bug fixes, and breaking changes."]}),"\n",(0,n.jsx)(a.p,{children:"You can upgrade to 0.36 by running the following commands in a terminal:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"$ npm install --save react-native@0.36\n$ react-native upgrade\n"})})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},71426:(e,a,t)=>{var n=t(27378),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,t){var n,r={},l=null,c=null;for(n in void 0!==t&&(l=""+t),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(c=a.ref),a)o.call(a,n)&&!d.hasOwnProperty(n)&&(r[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===r[n]&&(r[n]=a[n]);return{$$typeof:s,type:e,key:l,ref:c,props:r,_owner:i.current}}a.Fragment=r,a.jsx=l,a.jsxs=l},24246:(e,a,t)=>{e.exports=t(71426)},71670:(e,a,t)=>{t.d(a,{Zo:()=>i,ah:()=>r});var n=t(27378);const s=n.createContext({});function r(e){const a=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const o={};function i({components:e,children:a,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:r(e),n.createElement(s.Provider,{value:i},a)}}}]);