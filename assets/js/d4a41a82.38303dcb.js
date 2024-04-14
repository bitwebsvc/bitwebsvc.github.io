/*! For license information please see d4a41a82.38303dcb.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[93659],{78303:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>h});var s=a(24246),i=a(71670);const n={title:"React Native Monthly #3",author:"Mike Grabowski",authorTitle:"CTO at Callstack",authorURL:"https://github.com/grabbou",authorImageURL:"https://pbs.twimg.com/profile_images/988860423897313281/L9ErG_lr_400x400.jpg",authorTwitter:"grabbou",tags:["engineering"]},o=void 0,r={permalink:"/blog/2017/08/30/react-native-monthly-3",source:"@site/blog/2017-08-30-react-native-monthly-3.md",title:"React Native Monthly #3",description:"The React Native monthly meeting continues! This month's meeting was a bit shorter as most of our teams were busy shipping. Next month, we are at React Native EU conference in Wroclaw, Poland. Make sure to grab a ticket and see you there in person! Meanwhile, let's see what our teams are up to.",date:"2017-08-30T00:00:00.000Z",formattedDate:"August 30, 2017",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],readingTime:4.1,hasTruncateMarker:!1,authors:[{name:"Mike Grabowski",title:"CTO at Callstack",url:"https://github.com/grabbou",imageURL:"https://pbs.twimg.com/profile_images/988860423897313281/L9ErG_lr_400x400.jpg"}],frontMatter:{title:"React Native Monthly #3",author:"Mike Grabowski",authorTitle:"CTO at Callstack",authorURL:"https://github.com/grabbou",authorImageURL:"https://pbs.twimg.com/profile_images/988860423897313281/L9ErG_lr_400x400.jpg",authorTwitter:"grabbou",tags:["engineering"]},unlisted:!1,prevItem:{title:"React Native Monthly #4",permalink:"/blog/2017/09/21/react-native-monthly-4"},nextItem:{title:"React Native Performance in Marketplace",permalink:"/blog/2017/08/07/react-native-performance-in-marketplace"}},l={authorsImageUrls:[void 0]},h=[{value:"Teams",id:"teams",level:2},{value:"Notes",id:"notes",level:2},{value:"Callstack",id:"callstack",level:3},{value:"Expo",id:"expo",level:3},{value:"Facebook",id:"facebook",level:3},{value:"Microsoft",id:"microsoft",level:3},{value:"Shoutem",id:"shoutem",level:3},{value:"Next session",id:"next-session",level:2}];function c(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The React Native monthly meeting continues! This month's meeting was a bit shorter as most of our teams were busy shipping. Next month, we are at ",(0,s.jsx)(t.a,{href:"https://react-native.eu/",children:"React Native EU"})," conference in Wroclaw, Poland. Make sure to grab a ticket and see you there in person! Meanwhile, let's see what our teams are up to."]}),"\n",(0,s.jsx)(t.h2,{id:"teams",children:"Teams"}),"\n",(0,s.jsx)(t.p,{children:"On this third meeting, we had 5 teams join us:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/callstack",children:"Callstack"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/expo",children:"Expo"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/facebook",children:"Facebook"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/microsoft",children:"Microsoft"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/shoutem",children:"Shoutem"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.p,{children:"Here are the notes from each team:"}),"\n",(0,s.jsx)(t.h3,{id:"callstack",children:"Callstack"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Recently open sourced ",(0,s.jsx)(t.a,{href:"https://github.com/callstack-io/react-native-material-palette",children:(0,s.jsx)(t.code,{children:"react-native-material-palette"})}),". It extracts prominent colors from images to help you create visually engaging apps. It's Android only at the moment, but we are looking into adding support for iOS in the future."]}),"\n",(0,s.jsxs)(t.li,{children:["We have landed HMR support into ",(0,s.jsx)(t.a,{href:"https://github.com/callstack-io/haul",children:(0,s.jsx)(t.code,{children:"haul"})})," and a bunch of other, cool stuff! Check out latest releases."]}),"\n",(0,s.jsxs)(t.li,{children:["React Native EU 2017 is coming! Next month is all about React Native and Poland! Make sure to grab last tickets available ",(0,s.jsx)(t.a,{href:"https://react-native.eu/",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"expo",children:"Expo"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Released support for installing npm packages on ",(0,s.jsx)(t.a,{href:"https://snack.expo.io",children:"Snack"}),". Usual Expo restrictions apply -- packages can't depend on custom native APIs that aren't already included in Expo. We are also working on supporting multiple files and uploading assets in Snack. ",(0,s.jsx)(t.a,{href:"https://github.com/satya164",children:"Satyajit"})," will talk about Snack at ",(0,s.jsx)(t.a,{href:"https://react-native.eu/",children:"React Native Europe"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Released SDK20 with camera, payments, secure storage, magnetometer, pause/resume fs downloads, and improved splash/loading screen."}),"\n",(0,s.jsxs)(t.li,{children:["Continuing to work with ",(0,s.jsx)(t.a,{href:"https://github.com/kmagiera",children:"Krzysztof"})," on ",(0,s.jsx)(t.a,{href:"https://github.com/kmagiera/react-native-gesture-handler",children:"react-native-gesture-handler"}),". Please give it a try, rebuild some gesture that you have previously built using PanResponder or native gesture recognizers and let us know what issues you encounter."]}),"\n",(0,s.jsxs)(t.li,{children:["Experimenting with JSC debugging protocol, working on a bunch of feature requests on ",(0,s.jsx)(t.a,{href:"https://expo.canny.io/feature-requests",children:"Canny"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"facebook",children:"Facebook"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Last month we discussed management of the GitHub issue tracker and that we would try to make improvements to address the maintainability of the project."}),"\n",(0,s.jsx)(t.li,{children:"Currently, the number of open issues is holding steady at around 600, and it seems like it may stay that way for a while. In the past month, we have closed 690 issues due to lack of activity (defined as no comments in the last 60 days). Out of those 690 issues, 58 were re-opened for a variety of reasons (a maintainer committed to providing a fix, or a contributor made a great case for keeping the issue open)."}),"\n",(0,s.jsxs)(t.li,{children:["We plan to continue with the automated closing of stale issues for the foreseeable future. We\u2019d like to be in a state where every impactful issue opened in the tracker is acted upon, but we\u2019re not there yet. We need all the help we can from maintainers to triage issues and make sure we don't miss issues that introduce regressions or introduce breaking changes, especially those that affect newly created projects. People interested in helping out can use the Facebook GitHub Bot to triage issues and pull requests. The new Maintainers Guide contains more information on triage and use of the GitHub Bot. Please add yourself to the ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/master/bots/IssueCommands.txt",children:"issue task force"})," and encourage other active community members to do the same!"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"microsoft",children:"Microsoft"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The new Skype app is built on top of React Native in order to facilitate sharing as much code between platforms as possible. The React Native-based Skype app is currently available in the Android and iOS app stores."}),"\n",(0,s.jsxs)(t.li,{children:["While building the Skype app on React Native, we send pull requests to React Native in order to address bugs and missing features that we come across. So far, we've gotten about ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/react-native/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Arigdern%20",children:"70 pull requests merged"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["React Native enabled us to power both the Android and iOS Skype apps from the same codebase. We also want to use that codebase to power the Skype web app. To help us achieve that goal, we built and open sourced a thin layer on top of React/React Native called ",(0,s.jsx)(t.a,{href:"https://microsoft.github.io/reactxp/blog/2017/04/06/introducing-reactxp.html",children:"ReactXP"}),". ReactXP provides a set of cross platform components that get mapped to React Native when targeting iOS/Android and to react-dom when targeting the web. ReactXP's goals are similar to another open source library called React Native for Web. There's a brief description of how the approaches of these libraries differ in the ",(0,s.jsx)(t.a,{href:"https://microsoft.github.io/reactxp/docs/faq.html",children:"ReactXP FAQ"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"shoutem",children:"Shoutem"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["We are continuing our efforts on improving and simplifying the developer experience when building apps using ",(0,s.jsx)(t.a,{href:"https://shoutem.github.io/",children:"Shoutem"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Started migrating all our apps to react-navigation, but we ended postponing this until a more stable version is released, or one of the native navigation solutions becomes stable."}),"\n",(0,s.jsxs)(t.li,{children:["Updating all our ",(0,s.jsx)(t.a,{href:"https://github.com/shoutem/extensions",children:"extensions"})," and most of our open source libraries (",(0,s.jsx)(t.a,{href:"https://github.com/shoutem/animation",children:"animation"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/shoutem/theme",children:"theme"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/shoutem/ui",children:"ui"}),") to React Native 0.47.1."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"next-session",children:"Next session"}),"\n",(0,s.jsxs)(t.p,{children:["The next session is scheduled for Wednesday 13, September 2017. As this was only our third meeting, we'd like to know how do these notes benefit the React Native community. Feel free to ping me ",(0,s.jsx)(t.a,{href:"https://twitter.com/grabbou",children:"on Twitter"})," if you have any suggestion on how we should improve the output of the meeting."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},71426:(e,t,a)=>{var s=a(27378),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,a){var s,n={},h=null,c=null;for(s in void 0!==a&&(h=""+a),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,s)&&!l.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:i,type:e,key:h,ref:c,props:n,_owner:r.current}}t.Fragment=n,t.jsx=h,t.jsxs=h},24246:(e,t,a)=>{e.exports=a(71426)},71670:(e,t,a)=>{a.d(t,{Zo:()=>r,ah:()=>n});var s=a(27378);const i=s.createContext({});function n(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function r({components:e,children:t,disableParentContext:a}){let r;return r=a?"function"==typeof e?e({}):e||o:n(e),s.createElement(i.Provider,{value:r},t)}}}]);