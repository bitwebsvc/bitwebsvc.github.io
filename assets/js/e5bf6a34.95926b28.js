/*! For license information please see e5bf6a34.95926b28.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[21947],{99990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(24246),a=n(71670);const i={id:"performance",title:"Performance Overview"},r=void 0,s={id:"performance",title:"Performance Overview",description:"A compelling reason for using React Native instead of WebView-based tools is to achieve 60 frames per second and a native look and feel to your apps. Where possible, we would like for React Native to do the right thing and help you to focus on your app instead of performance optimization, but there are areas where we're not quite there yet, and others where React Native (similar to writing native code directly) cannot possibly determine the best way to optimize for you and so manual intervention will be necessary. We try our best to deliver buttery-smooth UI performance by default, but sometimes that isn't possible.",source:"@site/versioned_docs/version-0.71/performance.md",sourceDirName:".",slug:"/performance",permalink:"/docs/0.71/performance",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/performance.md",tags:[],version:"0.71",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"performance",title:"Performance Overview"},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/0.71/testing-overview"},next:{title:"Speeding up your Build phase",permalink:"/docs/0.71/build-speed"}},d={},l=[{value:"What you need to know about frames",id:"what-you-need-to-know-about-frames",level:2},{value:"JS frame rate (JavaScript thread)",id:"js-frame-rate-javascript-thread",level:3},{value:"UI frame rate (main thread)",id:"ui-frame-rate-main-thread",level:3},{value:"Common sources of performance problems",id:"common-sources-of-performance-problems",level:2},{value:"Running in development mode (<code>dev=true</code>)",id:"running-in-development-mode-devtrue",level:3},{value:"Using <code>console.log</code> statements",id:"using-consolelog-statements",level:3},{value:"<code>ListView</code> initial rendering is too slow or scroll performance is bad for large lists",id:"listview-initial-rendering-is-too-slow-or-scroll-performance-is-bad-for-large-lists",level:3},{value:"JS FPS plunges when re-rendering a view that hardly changes",id:"js-fps-plunges-when-re-rendering-a-view-that-hardly-changes",level:3},{value:"Dropping JS thread FPS because of doing a lot of work on the JavaScript thread at the same time",id:"dropping-js-thread-fps-because-of-doing-a-lot-of-work-on-the-javascript-thread-at-the-same-time",level:3},{value:"Moving a view on the screen (scrolling, translating, rotating) drops UI thread FPS",id:"moving-a-view-on-the-screen-scrolling-translating-rotating-drops-ui-thread-fps",level:3},{value:"Animating the size of an image drops UI thread FPS",id:"animating-the-size-of-an-image-drops-ui-thread-fps",level:3},{value:"My TouchableX view isn&#39;t very responsive",id:"my-touchablex-view-isnt-very-responsive",level:3},{value:"Slow navigator transitions",id:"slow-navigator-transitions",level:3}];function h(e){const t=Object.assign({p:"p",a:"a",h2:"h2",code:"code",img:"img",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"A compelling reason for using React Native instead of WebView-based tools is to achieve 60 frames per second and a native look and feel to your apps. Where possible, we would like for React Native to do the right thing and help you to focus on your app instead of performance optimization, but there are areas where we're not quite there yet, and others where React Native (similar to writing native code directly) cannot possibly determine the best way to optimize for you and so manual intervention will be necessary. We try our best to deliver buttery-smooth UI performance by default, but sometimes that isn't possible."}),"\n",(0,o.jsxs)(t.p,{children:["This guide is intended to teach you some basics to help you to ",(0,o.jsx)(t.a,{href:"/docs/0.71/profiling",children:"troubleshoot performance issues"}),", as well as discuss ",(0,o.jsx)(t.a,{href:"/docs/0.71/performance#common-sources-of-performance-problems",children:"common sources of problems and their suggested solutions"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"what-you-need-to-know-about-frames",children:"What you need to know about frames"}),"\n",(0,o.jsxs)(t.p,{children:["Your grandparents' generation called movies ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=F1i40rnpOsA",children:'"moving pictures"'}),' for a reason: realistic motion in video is an illusion created by quickly changing static images at a consistent speed. We refer to each of these images as frames. The number of frames that is displayed each second has a direct impact on how smooth and ultimately life-like a video (or user interface) seems to be. iOS devices display 60 frames per second, which gives you and the UI system about 16.67ms to do all of the work needed to generate the static image (frame) that the user will see on the screen for that interval. If you are unable to do the work necessary to generate that frame within the allotted 16.67ms, then you will "drop a frame" and the UI will appear unresponsive.']}),"\n",(0,o.jsxs)(t.p,{children:["Now to confuse the matter a little bit, open up the developer menu in your app and toggle ",(0,o.jsx)(t.code,{children:"Show Perf Monitor"}),". You will notice that there are two different frame rates."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(34044).Z+"",width:"522",height:"138"})}),"\n",(0,o.jsx)(t.h3,{id:"js-frame-rate-javascript-thread",children:"JS frame rate (JavaScript thread)"}),"\n",(0,o.jsxs)(t.p,{children:["For most React Native applications, your business logic will run on the JavaScript thread. This is where your React application lives, API calls are made, touch events are processed, etc... Updates to native-backed views are batched and sent over to the native side at the end of each iteration of the event loop, before the frame deadline (if all goes well). If the JavaScript thread is unresponsive for a frame, it will be considered a dropped frame. For example, if you were to call ",(0,o.jsx)(t.code,{children:"this.setState"})," on the root component of a complex application and it resulted in re-rendering computationally expensive component subtrees, it's conceivable that this might take 200ms and result in 12 frames being dropped. Any animations controlled by JavaScript would appear to freeze during that time. If anything takes longer than 100ms, the user will feel it."]}),"\n",(0,o.jsxs)(t.p,{children:["This often happens during ",(0,o.jsx)(t.code,{children:"Navigator"})," transitions: when you push a new route, the JavaScript thread needs to render all of the components necessary for the scene in order to send over the proper commands to the native side to create the backing views. It's common for the work being done here to take a few frames and cause ",(0,o.jsx)(t.a,{href:"http://jankfree.org/",children:"jank"})," because the transition is controlled by the JavaScript thread. Sometimes components will do additional work on ",(0,o.jsx)(t.code,{children:"componentDidMount"}),", which might result in a second stutter in the transition."]}),"\n",(0,o.jsxs)(t.p,{children:["Another example is responding to touches: if you are doing work across multiple frames on the JavaScript thread, you might notice a delay in responding to ",(0,o.jsx)(t.code,{children:"TouchableOpacity"}),", for example. This is because the JavaScript thread is busy and cannot process the raw touch events sent over from the main thread. As a result, ",(0,o.jsx)(t.code,{children:"TouchableOpacity"})," cannot react to the touch events and command the native view to adjust its opacity."]}),"\n",(0,o.jsx)(t.h3,{id:"ui-frame-rate-main-thread",children:"UI frame rate (main thread)"}),"\n",(0,o.jsxs)(t.p,{children:["Many people have noticed that performance of ",(0,o.jsx)(t.code,{children:"NavigatorIOS"})," is better out of the box than ",(0,o.jsx)(t.code,{children:"Navigator"}),". The reason for this is that the animations for the transitions are done entirely on the main thread, and so they are not interrupted by frame drops on the JavaScript thread."]}),"\n",(0,o.jsxs)(t.p,{children:["Similarly, you can happily scroll up and down through a ",(0,o.jsx)(t.code,{children:"ScrollView"})," when the JavaScript thread is locked up because the ",(0,o.jsx)(t.code,{children:"ScrollView"})," lives on the main thread. The scroll events are dispatched to the JS thread, but their receipt is not necessary for the scroll to occur."]}),"\n",(0,o.jsx)(t.h2,{id:"common-sources-of-performance-problems",children:"Common sources of performance problems"}),"\n",(0,o.jsxs)(t.h3,{id:"running-in-development-mode-devtrue",children:["Running in development mode (",(0,o.jsx)(t.code,{children:"dev=true"}),")"]}),"\n",(0,o.jsxs)(t.p,{children:["JavaScript thread performance suffers greatly when running in dev mode. This is unavoidable: a lot more work needs to be done at runtime to provide you with good warnings and error messages, such as validating propTypes and various other assertions. Always make sure to test performance in ",(0,o.jsx)(t.a,{href:"/docs/0.71/running-on-device#building-your-app-for-production",children:"release builds"}),"."]}),"\n",(0,o.jsxs)(t.h3,{id:"using-consolelog-statements",children:["Using ",(0,o.jsx)(t.code,{children:"console.log"})," statements"]}),"\n",(0,o.jsxs)(t.p,{children:["When running a bundled app, these statements can cause a big bottleneck in the JavaScript thread. This includes calls from debugging libraries such as ",(0,o.jsx)(t.a,{href:"https://github.com/evgenyrodionov/redux-logger",children:"redux-logger"}),", so make sure to remove them before bundling. You can also use this ",(0,o.jsx)(t.a,{href:"https://babeljs.io/docs/plugins/transform-remove-console/",children:"babel plugin"})," that removes all the ",(0,o.jsx)(t.code,{children:"console.*"})," calls. You need to install it first with ",(0,o.jsx)(t.code,{children:"npm i babel-plugin-transform-remove-console --save-dev"}),", and then edit the ",(0,o.jsx)(t.code,{children:".babelrc"})," file under your project directory like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "env": {\n    "production": {\n      "plugins": ["transform-remove-console"]\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["This will automatically remove all ",(0,o.jsx)(t.code,{children:"console.*"})," calls in the release (production) versions of your project."]}),"\n",(0,o.jsxs)(t.p,{children:["It is recommended to use the plugin even if no ",(0,o.jsx)(t.code,{children:"console.*"})," calls are made in your project. A third party library could also call them."]}),"\n",(0,o.jsxs)(t.h3,{id:"listview-initial-rendering-is-too-slow-or-scroll-performance-is-bad-for-large-lists",children:[(0,o.jsx)(t.code,{children:"ListView"})," initial rendering is too slow or scroll performance is bad for large lists"]}),"\n",(0,o.jsxs)(t.p,{children:["Use the new ",(0,o.jsx)(t.a,{href:"/docs/0.71/flatlist",children:(0,o.jsx)(t.code,{children:"FlatList"})})," or ",(0,o.jsx)(t.a,{href:"/docs/0.71/sectionlist",children:(0,o.jsx)(t.code,{children:"SectionList"})})," component instead. Besides simplifying the API, the new list components also have significant performance enhancements, the main one being nearly constant memory usage for any number of rows."]}),"\n",(0,o.jsxs)(t.p,{children:["If your ",(0,o.jsx)(t.a,{href:"/docs/0.71/flatlist",children:(0,o.jsx)(t.code,{children:"FlatList"})})," is rendering slow, be sure that you've implemented ",(0,o.jsx)(t.a,{href:"/docs/0.71/flatlist#getitemlayout",children:(0,o.jsx)(t.code,{children:"getItemLayout"})})," to optimize rendering speed by skipping measurement of the rendered items."]}),"\n",(0,o.jsx)(t.h3,{id:"js-fps-plunges-when-re-rendering-a-view-that-hardly-changes",children:"JS FPS plunges when re-rendering a view that hardly changes"}),"\n",(0,o.jsxs)(t.p,{children:["If you are using a ListView, you must provide a ",(0,o.jsx)(t.code,{children:"rowHasChanged"})," function that can reduce a lot of work by quickly determining whether or not a row needs to be re-rendered. If you are using immutable data structures, this would only need to be a reference equality check."]}),"\n",(0,o.jsxs)(t.p,{children:["Similarly, you can implement ",(0,o.jsx)(t.code,{children:"shouldComponentUpdate"})," and indicate the exact conditions under which you would like the component to re-render. If you write pure components (where the return value of the render function is entirely dependent on props and state), you can leverage PureComponent to do this for you. Once again, immutable data structures are useful to keep this fast -- if you have to do a deep comparison of a large list of objects, it may be that re-rendering your entire component would be quicker, and it would certainly require less code."]}),"\n",(0,o.jsx)(t.h3,{id:"dropping-js-thread-fps-because-of-doing-a-lot-of-work-on-the-javascript-thread-at-the-same-time",children:"Dropping JS thread FPS because of doing a lot of work on the JavaScript thread at the same time"}),"\n",(0,o.jsx)(t.p,{children:'"Slow Navigator transitions" is the most common manifestation of this, but there are other times this can happen. Using InteractionManager can be a good approach, but if the user experience cost is too high to delay work during an animation, then you might want to consider LayoutAnimation.'}),"\n",(0,o.jsxs)(t.p,{children:["The Animated API currently calculates each keyframe on-demand on the JavaScript thread unless you ",(0,o.jsxs)(t.a,{href:"/blog/2017/02/14/using-native-driver-for-animated#how-do-i-use-this-in-my-app",children:["set ",(0,o.jsx)(t.code,{children:"useNativeDriver: true"})]}),", while LayoutAnimation leverages Core Animation and is unaffected by JS thread and main thread frame drops."]}),"\n",(0,o.jsx)(t.p,{children:"One case where I have used this is for animating in a modal (sliding down from top and fading in a translucent overlay) while initializing and perhaps receiving responses for several network requests, rendering the contents of the modal, and updating the view where the modal was opened from. See the Animations guide for more information about how to use LayoutAnimation."}),"\n",(0,o.jsx)(t.p,{children:"Caveats:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:['LayoutAnimation only works for fire-and-forget animations ("static" animations) -- if it must be interruptible, you will need to use ',(0,o.jsx)(t.code,{children:"Animated"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"moving-a-view-on-the-screen-scrolling-translating-rotating-drops-ui-thread-fps",children:"Moving a view on the screen (scrolling, translating, rotating) drops UI thread FPS"}),"\n",(0,o.jsxs)(t.p,{children:["This is especially true when you have text with a transparent background positioned on top of an image, or any other situation where alpha compositing would be required to re-draw the view on each frame. You will find that enabling ",(0,o.jsx)(t.code,{children:"shouldRasterizeIOS"})," or ",(0,o.jsx)(t.code,{children:"renderToHardwareTextureAndroid"})," can help with this significantly."]}),"\n",(0,o.jsx)(t.p,{children:"Be careful not to overuse this or your memory usage could go through the roof. Profile your performance and memory usage when using these props. If you don't plan to move a view anymore, turn this property off."}),"\n",(0,o.jsx)(t.h3,{id:"animating-the-size-of-an-image-drops-ui-thread-fps",children:"Animating the size of an image drops UI thread FPS"}),"\n",(0,o.jsxs)(t.p,{children:["On iOS, each time you adjust the width or height of an Image component it is re-cropped and scaled from the original image. This can be very expensive, especially for large images. Instead, use the ",(0,o.jsx)(t.code,{children:"transform: [{scale}]"})," style property to animate the size. An example of when you might do this is when you tap an image and zoom it in to full screen."]}),"\n",(0,o.jsx)(t.h3,{id:"my-touchablex-view-isnt-very-responsive",children:"My TouchableX view isn't very responsive"}),"\n",(0,o.jsxs)(t.p,{children:["Sometimes, if we do an action in the same frame that we are adjusting the opacity or highlight of a component that is responding to a touch, we won't see that effect until after the ",(0,o.jsx)(t.code,{children:"onPress"})," function has returned. If ",(0,o.jsx)(t.code,{children:"onPress"})," does a ",(0,o.jsx)(t.code,{children:"setState"})," that results in a lot of work and a few frames dropped, this may occur. A solution to this is to wrap any action inside of your ",(0,o.jsx)(t.code,{children:"onPress"})," handler in ",(0,o.jsx)(t.code,{children:"requestAnimationFrame"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"handleOnPress() {\n  requestAnimationFrame(() => {\n    this.doExpensiveAction();\n  });\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"slow-navigator-transitions",children:"Slow navigator transitions"}),"\n",(0,o.jsxs)(t.p,{children:["As mentioned above, ",(0,o.jsx)(t.code,{children:"Navigator"}),' animations are controlled by the JavaScript thread. Imagine the "push from right" scene transition: each frame, the new scene is moved from the right to left, starting offscreen (let\'s say at an x-offset of 320) and ultimately settling when the scene sits at an x-offset of 0. Each frame during this transition, the JavaScript thread needs to send a new x-offset to the main thread. If the JavaScript thread is locked up, it cannot do this and so no update occurs on that frame and the animation stutters.']}),"\n",(0,o.jsx)(t.p,{children:"One solution to this is to allow for JavaScript-based animations to be offloaded to the main thread. If we were to do the same thing as in the above example with this approach, we might calculate a list of all x-offsets for the new scene when we are starting the transition and send them to the main thread to execute in an optimized way. Now that the JavaScript thread is freed of this responsibility, it's not a big deal if it drops a few frames while rendering the scene -- you probably won't even notice because you will be too distracted by the pretty transition."}),"\n",(0,o.jsxs)(t.p,{children:["Solving this is one of the main goals behind the new ",(0,o.jsx)(t.a,{href:"/docs/0.71/navigation",children:"React Navigation"})," library. The views in React Navigation use native components and the ",(0,o.jsx)(t.a,{href:"/docs/0.71/animated",children:(0,o.jsx)(t.code,{children:"Animated"})})," library to deliver 60 FPS animations that are run on the native thread."]})]})}const c=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(h,e)})):h(e)}},71426:(e,t,n)=>{var o=n(27378),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,i={},l=null,h=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)r.call(t,o)&&!d.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:a,type:e,key:l,ref:h,props:i,_owner:s.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},24246:(e,t,n)=>{e.exports=n(71426)},34044:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/PerfUtil-38a2ddbf1777887d70563a644c72aa64.png"},71670:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>i});var o=n(27378);const a=o.createContext({});function i(e){const t=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||r:i(e),o.createElement(a.Provider,{value:s},t)}}}]);