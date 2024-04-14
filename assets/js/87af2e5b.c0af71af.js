/*! For license information please see 87af2e5b.c0af71af.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[27857],{1503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(24246),o=r(71670);const i={title:"Toward Hermes being the Default",authors:["huxpro"],tags:["announcement"]},n=void 0,s={permalink:"/blog/2021/10/26/toward-hermes-being-the-default",source:"@site/blog/2021-10-26-toward-hermes-being-the-default.md",title:"Toward Hermes being the Default",description:"Since we announced Hermes in 2019, it has been increasingly gaining adoption in the community. The team at Expo, who maintain a popular meta-framework for React Native apps, recently announced experimental support for Hermes after being one of the most requested features of Expo. The team at Realm, a popular mobile database, also recently shipped its alpha support for Hermes. In this post, we want to highlight some of the most exciting progress we've made over the past two years to push Hermes towards being the best JavaScript engine for React Native. Looking forward, we are confident that with these improvements and more to come, we can make Hermes the default JavaScript engine for React Native across all platforms.",date:"2021-10-26T00:00:00.000Z",formattedDate:"October 26, 2021",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:11.055,hasTruncateMarker:!0,authors:[{name:"Xuan Huang",title:"Software Engineer at Meta",url:"https://twitter.com/huxpro",imageURL:"https://github.com/huxpro.png",key:"huxpro"}],frontMatter:{title:"Toward Hermes being the Default",authors:["huxpro"],tags:["announcement"]},unlisted:!1,prevItem:{title:"Announcing React Native 0.67",permalink:"/blog/2022/01/19/version-067"},nextItem:{title:"Announcing React Native 0.66",permalink:"/blog/2021/10/01/version-066"}},c={authorsImageUrls:[void 0]},l=[{value:"Optimizing for React Native",id:"optimizing-for-react-native",level:2},{value:"Building a New Garbage Collector for Fabric",id:"building-a-new-garbage-collector-for-fabric",level:3},{value:"Striking on Performance Pain Points",id:"striking-on-performance-pain-points",level:3},{value:"Pioneering at Vertical Integrations",id:"pioneering-at-vertical-integrations",level:3},{value:"Bringing Along the Whole Community",id:"bringing-along-the-whole-community",level:2},{value:"Expanding to New Platforms",id:"expanding-to-new-platforms",level:3},{value:"Supporting our Community",id:"supporting-our-community",level:3},{value:"Summary",id:"summary",level:2},{value:"Thanks",id:"thanks",level:2}];function h(e){const t=Object.assign({p:"p",a:"a",em:"em",h2:"h2",h3:"h3",strong:"strong",ol:"ol",li:"li",ul:"ul",code:"code"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Since ",(0,a.jsx)(t.a,{href:"https://engineering.fb.com/2019/07/12/android/hermes/",children:"we announced Hermes in 2019"}),", it has been increasingly gaining adoption in the community. The team at ",(0,a.jsx)(t.a,{href:"https://expo.dev/",children:"Expo"}),", who maintain a popular meta-framework for React Native apps, recently ",(0,a.jsx)(t.a,{href:"https://blog.expo.dev/expo-sdk-42-579aee2348b6",children:"announced experimental"})," ",(0,a.jsx)(t.a,{href:"https://blog.expo.dev/expo-sdk-43-beta-is-now-available-47dc54a8d29f",children:"support"})," for Hermes after being ",(0,a.jsx)(t.a,{href:"https://expo.canny.io/feature-requests/p/enabling-hermes",children:"one of the most requested features of Expo"}),". The team at ",(0,a.jsx)(t.a,{href:"https://realm.io/",children:"Realm"}),", a popular mobile database, also recently shipped its ",(0,a.jsx)(t.a,{href:"https://github.com/realm/realm-js/issues/3940",children:"alpha support"})," for Hermes. In this post, we want to highlight some of the most exciting progress we've made over the past two years to push Hermes towards being ",(0,a.jsx)(t.em,{children:"the best"})," JavaScript engine for React Native. Looking forward, we are confident that with these improvements and more to come, we can make Hermes the default JavaScript engine for React Native across all platforms."]}),"\n",(0,a.jsx)(t.h2,{id:"optimizing-for-react-native",children:"Optimizing for React Native"}),"\n",(0,a.jsxs)(t.p,{children:["Hermes\u2019s defining feature is how it performs compilation work ahead-of-time, meaning that React Native apps with Hermes enabled ship with precompiled optimized bytecode instead of plain JavaScript source. This drastically reduces the amount of work needed to start up your product for users. Measurements from both Facebook and community apps have suggested that enabling Hermes often cut a product\u2019s TTI (or ",(0,a.jsx)(t.a,{href:"https://web.dev/interactive/",children:"Time-To-Interactive"}),") metric by nearly half."]}),"\n",(0,a.jsx)(t.p,{children:"That being said, we\u2019ve been working on improving Hermes in many other aspects to make it even better as a JavaScript engine specialized for React Native."}),"\n",(0,a.jsx)(t.h3,{id:"building-a-new-garbage-collector-for-fabric",children:"Building a New Garbage Collector for Fabric"}),"\n",(0,a.jsxs)(t.p,{children:["With the upcoming ",(0,a.jsx)(t.a,{href:"https://github.com/react-native-community/discussions-and-proposals/issues/4",children:"Fabric"})," renderer in the new React Native architecture, it will be possible to synchronously call JavaScript on the UI thread. However, this means if the JavaScript thread takes too long to execute, it can cause noticeable UI frame drops and block user inputs. The ",(0,a.jsx)(t.a,{href:"https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html",children:"concurrent rendering"})," enabled by React ",(0,a.jsx)(t.a,{href:"https://reactjs.org/docs/faq-internals.html#what-is-react-fiber",children:"Fiber"})," will avoid scheduling long JavaScript tasks by splitting rendering work into chunks. However, there is another common source of latency from the JavaScript thread \u2014 when the JavaScript engine has to \u201cstop the world\u201d to perform a garbage collection (GC)."]}),"\n",(0,a.jsxs)(t.p,{children:["The previous default garbage collector in Hermes, ",(0,a.jsx)(t.a,{href:"https://hermesengine.dev/docs/gengc/",children:"GenGC"}),", was a single-threaded generational garbage collector. The new generations uses a typical semi-space copying strategy, and the old generations uses a mark-compact strategy to make it really good at aggressively returning memory to the operating system. Due to its single-thread, GenGC has the downside of causing long GC pauses. On apps that are as complicated as Facebook for Android, we observed an average pause of 200ms, or 1.4s at p99. We have even seen it be as long as 7 seconds, considering the large and diverse user base of Facebook for Android."]}),"\n",(0,a.jsxs)(t.p,{children:["In order to mitigate this, we implemented a brand new ",(0,a.jsx)(t.em,{children:"mostly concurrent"})," GC named ",(0,a.jsx)(t.a,{href:"https://hermesengine.dev/docs/hades",children:"Hades"}),". Hades collects its young generation exactly the same as GenGC, but it manages its old generation with a snapshot-at-the-beginning style mark-sweep collector. which can significantly reduce GC pause time by performing most of its work in a background thread without blocking the engine\u2019s main thread from executing JavaScript code. ",(0,a.jsx)(t.strong,{children:"Our statistics show that Hades only pauses for 48ms at p99.9 on 64-bit devices (34x faster than GenGC!)"})," and around 88ms at p99.9 on 32-bit devices (where it operates as a single-threaded ",(0,a.jsx)(t.em,{children:"incremental"})," GC). These pause time improvements can come at the cost of overall throughput, due to the need for more expensive write barriers, slower freelist based allocation (as opposed to a bump pointer allocator), and increased heap fragmentation. We think those are the right trade-offs, and we were able to achieve overall lower memory consumption via coalescing and additional memory optimizations that we\u2019ll talk about."]}),"\n",(0,a.jsx)(t.h3,{id:"striking-on-performance-pain-points",children:"Striking on Performance Pain Points"}),"\n",(0,a.jsxs)(t.p,{children:["Startup time of applications is critical to the success of many apps, and we are continuously pushing the boundary for React Native. For any new JavaScript feature we implement in Hermes, we carefully monitor their impact on production performance and ensure that they don\u2019t regress metrics. At Facebook, we are currently experimenting with a ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/main/packages/react-native-babel-preset/src/configs/main.js#L41",children:"dedicated Babel transform profile for Hermes in Metro"})," to replace a dozen Babel transforms with Hermes\u2019s native ESNext implementations. We were able to observe ",(0,a.jsx)(t.strong,{children:"18-25% TTI improvements"})," on many surfaces and ",(0,a.jsx)(t.strong,{children:"overall bytecode size decreases"})," and we expect to see similar results for OSS."]}),"\n",(0,a.jsxs)(t.p,{children:["In addition to startup performance, we identified memory footprint as an opportunity for improvement in React Native apps especially for ",(0,a.jsx)(t.a,{href:"https://reactnative.dev/blog/2021/08/26/many-platform-vision#expanding-to-new-platforms",children:"virtual reality."})," Thanks to the low-level control we have as a JavaScript engine, we were able to deliver rounds of memory optimizations by squeezing bits and bytes out:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Previously, all JavaScript values were represented as 64-bit NaN-boxing encoded tagged values to represent floating point doubles and pointers on 64-bit architecture. However, this is wasteful in practice because most numbers are small integers (SMI) and JavaScript heap of client-side applications is not expected to be larger than 4GiB generally. To address this, we introduced a new 32-bit encoding in which SMI and pointers are encoded in 29 bits (because pointers are 8-byte aligned, we can assume the bottom 3 bits are always zero), and the rest of JS numbers are boxed onto the heap. ",(0,a.jsx)(t.strong,{children:"This reduced the JavaScript heap size by ~30%."})]}),"\n",(0,a.jsxs)(t.li,{children:["Different kinds of JavaScript objects are represented as different kinds of GC-managed cells in the JavaScript heap. By aggressively optimizing the memory layout of headers for those cells, ",(0,a.jsx)(t.strong,{children:"we are able to reduce memory usage by another ~15%"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["One of our key decisions with Hermes was to not implement a ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Just-in-time_compilation",children:"just-in-time (JIT) compiler"})," because we believe that for most React Native apps, the additional warm-up costs and extra footprints on binary and memory would not actually be worthwhile. For years, we invested a lot of effort in optimizing interpreter performance and compiler optimizations to make Hermes\u2019s throughput competitive with other engines for React Native workloads. We are continuing to focus on improving throughput by identifying performance bottlenecks from everywhere (interpreter dispatch loop, stack layout, object model, GC, etc.). Expect some more numbers in upcoming releases!"]}),"\n",(0,a.jsx)(t.h3,{id:"pioneering-at-vertical-integrations",children:"Pioneering at Vertical Integrations"}),"\n",(0,a.jsxs)(t.p,{children:["At Facebook, we prefer to colocate projects within a large ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Monorepo",children:"monorepo"}),". By having the engine (Hermes) and the host (React Native) closely iterating together, we opened a lot of room for vertical integrations. To name a few:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Hermes supports ",(0,a.jsx)(t.a,{href:"https://reactnative.dev/docs/hermes#debugging-js-on-hermes-using-google-chromes-devtools",children:"on-device JavaScript debugging with the Chrome debugger"})," by speaking the ",(0,a.jsx)(t.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"Chrome DevTools Protocol"}),". It\u2019s better than the legacy \u201c",(0,a.jsx)(t.a,{href:"https://reactnative.dev/docs/debugging#chrome-developer-tools",children:"Remote JS Debugging"}),"\u201d (which uses an in-app proxy to run JS in desktop Chrome) because it supports debugging synchronous native calls and guaranteed a consistent runtime environment. Together with React DevTools, Metro, Inspector, and so on, Hermes debugger is now part of ",(0,a.jsx)(t.a,{href:"https://reactnative.dev/blog/2020/03/26/version-0.62",children:"Flipper"})," to provide a one-stop developer experience."]}),"\n",(0,a.jsxs)(t.li,{children:["Objects allocated during the initialization path of React Native apps are often long-lived and don\u2019t follow the ",(0,a.jsx)(t.em,{children:"generational"})," ",(0,a.jsx)(t.em,{children:"hypothesis"})," leveraged by generational GCs. Therefore, we ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/main/ReactAndroid/src/main/java/com/facebook/hermes/reactexecutor/OnLoad.cpp#L37-L42",children:"configured Hermes in React Native"})," to allocate the first 32MiB directly into old generations (known as ",(0,a.jsx)(t.em,{children:"pre-tenuring"}),") to avoid triggering GC pauses and delaying TTI."]}),"\n",(0,a.jsxs)(t.li,{children:["The new React Native architecture is heavily based on ",(0,a.jsx)(t.a,{href:"https://github.com/react-native-community/discussions-and-proposals/issues/91",children:"JSI (or JavaScript Interface)"}),", a lightweight, general-purposed API for embedding a JavaScript engine into a C++ program. By having the team maintaining the JS engine also maintains the JSI API implementation, we are confident in providing the best possible integration that is reliable, performant and battle-tested at the Facebook\u2019s scale."]}),"\n",(0,a.jsxs)(t.li,{children:["Getting JavaScript concurrency primitives (e.g. ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",children:"promises"}),") and platform concurrency primitives (e.g. ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide",children:"microtasks"}),") both semantically correct and performant are critical to React concurrent rendering and the future of React Native apps. Historically, promises in React Native were ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/main/Libraries/Core/polyfillPromise.js#L37",children:"polyfilled"})," using non-standardized ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate",children:(0,a.jsx)(t.code,{children:"setImmediate"})})," APIs. We are working on making native promises and microtasks from JS engines available via JSI, and introducing ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask",children:(0,a.jsx)(t.code,{children:"queueMicrotask"})}),", a recent addition to the web standard, to the platform, to better support modern asynchronous JavaScript code."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"bringing-along-the-whole-community",children:"Bringing Along the Whole Community"}),"\n",(0,a.jsx)(t.p,{children:"Hermes has been really great for us at Facebook. But our work is not done until our community can use Hermes to power experiences throughout the ecosystem, so that everyone leverage all of its features and to embrace its full potential."}),"\n",(0,a.jsx)(t.h3,{id:"expanding-to-new-platforms",children:"Expanding to New Platforms"}),"\n",(0,a.jsxs)(t.p,{children:["Hermes was initially open sourced only for React Native on Android. Since then, we have been thrilled to see our members of the community expanding Hermes support into ",(0,a.jsx)(t.a,{href:"https://reactnative.dev/blog/2021/08/26/many-platform-vision",children:"many other platforms that React Native\u2019s ecosystem has expanded"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://callstack.com/",children:"Callstack"})," led the effort of bringing ",(0,a.jsx)(t.a,{href:"https://reactnative.dev/blog/2021/03/12/version-0.64",children:"Hermes to iOS in React Native 0.64"}),". They wrote a ",(0,a.jsx)(t.a,{href:"https://callstack.com/blog/bringing-hermes-to-ios-in-react-native/",children:"series of articles"})," and hosted a ",(0,a.jsx)(t.a,{href:"https://callstack.com/podcasts/react-native-0-64-with-hermes-for-ios-ep-5",children:"podcast"})," on how they achieved it. According to their benchmarks, Hermes was able to ",(0,a.jsx)(t.strong,{children:"consistently deliver ~40% improvement to startup and ~18% reduced memory on iOS"})," compared to JSC for the Mattermost app, with only 2.4 MiB of app size overhead. I encourage you to ",(0,a.jsx)(t.a,{href:"https://callstack.com/blog/hermes-performance-on-ios/",children:"see it live with your own eyes"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Microsoft has been bringing ",(0,a.jsx)(t.a,{href:"https://microsoft.github.io/react-native-windows/docs/hermes",children:"Hermes to React Native for Windows and macOS"}),". ",(0,a.jsx)(t.a,{href:"https://youtu.be/QMFbrHZnvvw?t=389",children:"At Microsoft Build 2020"}),", Microsoft shared that Hermes\u2019s memory impact (",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Working_set",children:"working set"}),") is 13% lower than the Chakra engine on React Native for Windows. Recently, on some synthetic benchmarks, they\u2019ve found Hermes 0.8 (shipped with Hades and aforementioned SMI and pointer compression optimization) ",(0,a.jsx)(t.strong,{children:"uses 30%-40% less memory than other engines"}),". Not surprisingly, the ",(0,a.jsx)(t.a,{href:"https://www.messenger.com/desktop",children:"desktop Messenger"})," video calling experience built on React Native, is also powered by Hermes."]}),"\n",(0,a.jsx)(t.p,{children:"Last but not least, Hermes has also been powering all virtual reality experiences built with the React family of technologies on Oculus, including Oculus Home."}),"\n",(0,a.jsx)(t.h3,{id:"supporting-our-community",children:"Supporting our Community"}),"\n",(0,a.jsx)(t.p,{children:"We acknowledge there are still blockers that prevent parts of the community from adopting Hermes and we are committed to building support for these missing features. Our goal is to be fully featured so that Hermes is the right choice for most React Native apps. Here is how the community has already shaped the Hermes roadmap:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsxs)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming",children:[(0,a.jsx)(t.code,{children:"Proxy"})," and ",(0,a.jsx)(t.code,{children:"Reflect"})]})," were originally excluded from Hermes because Facebook does not use them. We were also concerned that adding Proxy would hurt property lookup performance even when Proxy is not used. But Proxy quickly become ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/hermes/issues/33",children:"the most requested feature"})," of Hermes due to popular libraries such as ",(0,a.jsx)(t.a,{href:"https://mobx.js.org/README.html",children:"MobX"})," and ",(0,a.jsx)(t.a,{href:"https://immerjs.github.io/immer/",children:"Immer"}),". We carefully evaluated and decided to build it just for the community, and we managed to implement it with very low cost. Since this is a feature we don\u2019t use, we relied on our community to prove its stability. We started by testing Proxy behind a flag and created opt-in npm packages for ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/hermes/issues/33#issuecomment-668374607",children:"release v0.4"})," and ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/hermes/issues/33#issuecomment-668374607",children:"v0.5"}),", and it\u2019s ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/hermes/releases/tag/v0.7.0",children:"enabled by default starting from v0.7"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsxs)(t.a,{href:"https://hermesengine.dev/docs/intl",children:["ECMAScript Internationalization API Specification (ECMA-402, or ",(0,a.jsx)(t.code,{children:"Intl"}),")"]})," was ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/hermes/issues/23",children:"the second most requested feature"}),". ",(0,a.jsx)(t.code,{children:"Intl"})," is a huge set of APIs and often requires the implementation to include ",(0,a.jsx)(t.strong,{children:"6MB worth"})," of ",(0,a.jsx)(t.a,{href:"https://cldr.unicode.org/index",children:"Unicode CLDR"})," data. This is why polyfills like ",(0,a.jsxs)(t.a,{href:"https://github.com/formatjs/formatjs",children:["FormatJS (a.k.a. ",(0,a.jsx)(t.code,{children:"react-intl"}),")"]})," and JS engines like the ",(0,a.jsx)(t.a,{href:"https://github.com/react-native-community/jsc-android-buildscripts#international-variant",children:"international variant build of community JSC"})," are so huge. To avoid substantially increasing the binary size of Hermes, we decided to implement it with another strategy by consuming and mapping the ICU facilities provided by the libraries included in the operating systems, at the cost of some (often minor) variance in behaviors across platforms.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Microsoft collaborated to build support on Android. It covers almost everything from ECMA-402 up to ES2020, ",(0,a.jsx)(t.strong,{children:"with only a size impact as small as 3% (57-62K per ABI)"}),". We ran ",(0,a.jsx)(t.a,{href:"https://twitter.com/tmikov/status/1336442786694893568",children:"a poll on Twitter"})," and the results were strongly in favor of including ",(0,a.jsx)(t.code,{children:"Intl"})," by default, so that\u2019s what we did and it\u2019s available starting from ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/hermes/releases/tag/v0.8.0",children:"release v0.8"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Facebook has sponsored ",(0,a.jsx)(t.a,{href:"https://mlh.io/",children:"Major League Hacking"})," to launch a ",(0,a.jsx)(t.a,{href:"https://news.mlh.io/welcoming-facebook-back-as-a-sponsor-of-the-2020-2021-mlh-fellowship-08-12-2020",children:"remote open source fellowship program"}),". Last year, we launched the ",(0,a.jsx)(t.a,{href:"https://reactnative.dev/docs/profile-hermes",children:"Hermes sampling profiler"}),". This year, our fellows will be working with members from Hermes, React Native, and Callstack, to add support for Hermes ",(0,a.jsx)(t.code,{children:"Intl"})," on iOS. Stayed tuned!"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["We appreciate that people have been working with us to discover issues affecting the community.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["People have helped us identify critical spec divergence such as ",(0,a.jsxs)(t.a,{href:"https://github.com/facebook/hermes/issues/212",children:["stability of ",(0,a.jsx)(t.code,{children:"Array.prototype.sort"})]})," amended in ",(0,a.jsx)(t.a,{href:"https://github.com/tc39/ecma262/pull/1340",children:"ES2019"}),". This has been fixed and will be available in the next release."]}),"\n",(0,a.jsxs)(t.li,{children:["People found out that our default heap size limit was too small and caused ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/hermes/issues/295",children:"unnecessary GC pressure"})," and ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/hermes/issues/511",children:"OOM crashes"})," for many users who are not familiar with customizing Hermes\u2019s GC configs. So we increased it from 512MiB to 3GiB to be more than sufficient for most users by default."]}),"\n",(0,a.jsxs)(t.li,{children:["People also reported that our specialized ",(0,a.jsx)(t.code,{children:"Function.prototype.toString"})," implementation ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/hermes/issues/471#issuecomment-820123463",children:"caused performance to drop in libraries doing improper feature detection"})," and ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/hermes/issues/114#issuecomment-887106990",children:"blocked users from doing source code injecting"}),". This helped us strengthen our stance that Hermes, whenever possible, should not get in the way of developers and to respect de-facto practices."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(t.p,{children:"In summary, our vision is to make Hermes ready to be the default JavaScript engine across all React Native platforms. We\u2019ve already started working towards it, and we want to hear from all of you about this direction."}),"\n",(0,a.jsxs)(t.p,{children:["It\u2019s extremely important for us to prepare the ecosystem for a smooth adoption. We encourage you to try out Hermes, and file issues on our ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/hermes",children:"GitHub repository"})," for any feedbacks, questions, feature requests and incompatibilities."]}),"\n",(0,a.jsx)(t.h2,{id:"thanks",children:"Thanks"}),"\n",(0,a.jsx)(t.p,{children:"We\u2019d love to thank the Hermes team, the React Native team, and the many contributors from the React Native community for their work to improve Hermes."}),"\n",(0,a.jsx)(t.p,{children:"I\u2019d also love to personally thank (in alphabetic order) Eli White, Luna Wei, Neil Dhar, Tim Yung, Tzvetan Mikov, and many others for their help during the writing."})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},71426:(e,t,r)=>{var a=r(27378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var a,i={},l=null,h=null;for(a in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)n.call(t,a)&&!c.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:o,type:e,key:l,ref:h,props:i,_owner:s.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},24246:(e,t,r)=>{e.exports=r(71426)},71670:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>i});var a=r(27378);const o=a.createContext({});function i(e){const t=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const n={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||n:i(e),a.createElement(o.Provider,{value:s},t)}}}]);