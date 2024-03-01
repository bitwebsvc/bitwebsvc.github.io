/*! For license information please see 4865bf41.f23fed14.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[43986],{20512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>C});var a=t(24246),r=t(71670),o=t(48375),i=t(86386),s=t(11674);const l={id:"interactionmanager",title:"InteractionManager"},c=void 0,d={id:"interactionmanager",title:"InteractionManager",description:"InteractionManager allows long-running work to be scheduled after any interactions/animations have completed. In particular, this allows JavaScript animations to run smoothly.",source:"@site/versioned_docs/version-0.72/interactionmanager.md",sourceDirName:".",slug:"/interactionmanager",permalink:"/docs/0.72/interactionmanager",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/interactionmanager.md",tags:[],version:"0.72",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"interactionmanager",title:"InteractionManager"},sidebar:"api",previous:{title:"Easing",permalink:"/docs/0.72/easing"},next:{title:"Keyboard",permalink:"/docs/0.72/keyboard"}},u={},C=[{value:"Example",id:"example",level:2},{value:"Basic",id:"basic",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>runAfterInteractions()</code>",id:"runafterinteractions",level:3},{value:"<code>createInteractionHandle()</code>",id:"createinteractionhandle",level:3},{value:"<code>clearInteractionHandle()</code>",id:"clearinteractionhandle",level:3},{value:"<code>setDeadline()</code>",id:"setdeadline",level:3}];function p(e){const n=Object.assign({p:"p",pre:"pre",code:"code",ul:"ul",li:"li",hr:"hr",h2:"h2",h3:"h3",div:"div",blockquote:"blockquote",strong:"strong",h1:"h1"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"InteractionManager allows long-running work to be scheduled after any interactions/animations have completed. In particular, this allows JavaScript animations to run smoothly."}),"\n",(0,a.jsx)(n.p,{children:"Applications can schedule tasks to run after interactions with the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"InteractionManager.runAfterInteractions(() => {\n  // ...long-running synchronous task...\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"Compare this to other scheduling alternatives:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"requestAnimationFrame()"})," for code that animates a view over time."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"setImmediate/setTimeout()"})," run code later, note this may delay animations."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"runAfterInteractions()"})," run code later, without delaying active animations."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The touch handling system considers one or more active touches to be an 'interaction' and will delay ",(0,a.jsx)(n.code,{children:"runAfterInteractions()"})," callbacks until all touches have ended or been cancelled."]}),"\n",(0,a.jsx)(n.p,{children:"InteractionManager also allows applications to register animations by creating an interaction 'handle' on animation start, and clearing it upon completion:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const handle = InteractionManager.createInteractionHandle();\n// run animation... (`runAfterInteractions` tasks are queued)\n// later, on animation completion:\nInteractionManager.clearInteractionHandle(handle);\n// queued tasks run if all handles were cleared\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"runAfterInteractions"})," takes either a plain callback function, or a ",(0,a.jsx)(n.code,{children:"PromiseTask"})," object with a ",(0,a.jsx)(n.code,{children:"gen"})," method that returns a ",(0,a.jsx)(n.code,{children:"Promise"}),". If a ",(0,a.jsx)(n.code,{children:"PromiseTask"})," is supplied, then it is fully resolved (including asynchronous dependencies that also schedule more tasks via ",(0,a.jsx)(n.code,{children:"runAfterInteractions"}),") before starting on the next task that might have been queued up synchronously earlier."]}),"\n",(0,a.jsxs)(n.p,{children:["By default, queued tasks are executed together in a loop in one ",(0,a.jsx)(n.code,{children:"setImmediate"})," batch. If ",(0,a.jsx)(n.code,{children:"setDeadline"})," is called with a positive number, then tasks will only be executed until the deadline (in terms of js event loop run time) approaches, at which point execution will yield via setTimeout, allowing events such as touches to start interactions and block queued tasks from executing, making apps more responsive."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.h3,{id:"basic",children:"Basic"}),"\n",(0,a.jsxs)(o.Z,{groupId:"language",queryString:!0,defaultValue:s.Z.defaultSnackLanguage,values:s.Z.snackLanguages,children:[(0,a.jsx)(i.Z,{value:"javascript",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"InteractionManager Function Component Basic Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.js%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%2C%20useEffect%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Animated%2C%5Cn%20%20InteractionManager%2C%5Cn%20%20Platform%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20instructions%20%3D%20Platform.select(%7B%5Cn%20%20ios%3A%20'Press%20Cmd%2BR%20to%20reload%2C%5C%5Cn'%20%2B%20'Cmd%2BD%20or%20shake%20for%20dev%20menu'%2C%5Cn%20%20android%3A%5Cn%20%20%20%20'Double%20tap%20R%20on%20your%20keyboard%20to%20reload%2C%5C%5Cn'%20%2B%5Cn%20%20%20%20'Shake%20or%20press%20menu%20button%20for%20dev%20menu'%2C%5Cn%7D)%3B%5Cn%5Cnconst%20useFadeIn%20%3D%20(duration%20%3D%205000)%20%3D%3E%20%7B%5Cn%20%20const%20%5Bopacity%5D%20%3D%20useState(new%20Animated.Value(0))%3B%5Cn%5Cn%20%20%2F%2F%20Running%20the%20animation%20when%20the%20component%20is%20mounted%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20%2F%2F%20Animated.timing()%20create%20a%20interaction%20handle%20by%20default%2C%20if%20you%20want%20to%20disabled%20that%5Cn%20%20%20%20%2F%2F%20behaviour%20you%20can%20set%20isInteraction%20to%20false%20to%20disabled%20that.%5Cn%20%20%20%20Animated.timing(opacity%2C%20%7B%5Cn%20%20%20%20%20%20toValue%3A%201%2C%5Cn%20%20%20%20%20%20duration%2C%5Cn%20%20%20%20%20%20useNativeDriver%3A%20true%2C%5Cn%20%20%20%20%7D).start()%3B%5Cn%20%20%7D%2C%20%5Bduration%2C%20opacity%5D)%3B%5Cn%5Cn%20%20return%20opacity%3B%5Cn%7D%3B%5Cn%5Cnconst%20Ball%20%3D%20(%7BonShown%7D)%20%3D%3E%20%7B%5Cn%20%20const%20opacity%20%3D%20useFadeIn()%3B%5Cn%5Cn%20%20%2F%2F%20Running%20a%20method%20after%20the%20animation%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20interactionPromise%20%3D%20InteractionManager.runAfterInteractions(()%20%3D%3E%5Cn%20%20%20%20%20%20onShown()%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20return%20()%20%3D%3E%20interactionPromise.cancel()%3B%5Cn%20%20%7D%2C%20%5BonShown%5D)%3B%5Cn%5Cn%20%20return%20%3CAnimated.View%20style%3D%7B%5Bstyles.ball%2C%20%7Bopacity%7D%5D%7D%20%2F%3E%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3E%7Binstructions%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CBall%20onShown%3D%7B()%20%3D%3E%20Alert.alert('Animation%20is%20done')%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20ball%3A%20%7B%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20'salmon'%2C%5Cn%20%20%20%20borderRadius%3A%20100%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(i.Z,{value:"typescript",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"InteractionManager Function Component Basic Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%2C%20useEffect%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Animated%2C%5Cn%20%20InteractionManager%2C%5Cn%20%20Platform%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20instructions%20%3D%20Platform.select(%7B%5Cn%20%20ios%3A%20'Press%20Cmd%2BR%20to%20reload%2C%5C%5Cn'%20%2B%20'Cmd%2BD%20or%20shake%20for%20dev%20menu'%2C%5Cn%20%20android%3A%5Cn%20%20%20%20'Double%20tap%20R%20on%20your%20keyboard%20to%20reload%2C%5C%5Cn'%20%2B%5Cn%20%20%20%20'Shake%20or%20press%20menu%20button%20for%20dev%20menu'%2C%5Cn%7D)%3B%5Cn%5Cnconst%20useFadeIn%20%3D%20(duration%20%3D%205000)%20%3D%3E%20%7B%5Cn%20%20const%20%5Bopacity%5D%20%3D%20useState(new%20Animated.Value(0))%3B%5Cn%5Cn%20%20%2F%2F%20Running%20the%20animation%20when%20the%20component%20is%20mounted%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20%2F%2F%20Animated.timing()%20create%20a%20interaction%20handle%20by%20default%2C%20if%20you%20want%20to%20disabled%20that%5Cn%20%20%20%20%2F%2F%20behaviour%20you%20can%20set%20isInteraction%20to%20false%20to%20disabled%20that.%5Cn%20%20%20%20Animated.timing(opacity%2C%20%7B%5Cn%20%20%20%20%20%20toValue%3A%201%2C%5Cn%20%20%20%20%20%20duration%2C%5Cn%20%20%20%20%20%20useNativeDriver%3A%20true%2C%5Cn%20%20%20%20%7D).start()%3B%5Cn%20%20%7D%2C%20%5Bduration%2C%20opacity%5D)%3B%5Cn%5Cn%20%20return%20opacity%3B%5Cn%7D%3B%5Cn%5Cntype%20BallProps%20%3D%20%7B%5Cn%20%20onShown%3A%20()%20%3D%3E%20void%3B%5Cn%7D%3B%5Cn%5Cnconst%20Ball%20%3D%20(%7BonShown%7D%3A%20BallProps)%20%3D%3E%20%7B%5Cn%20%20const%20opacity%20%3D%20useFadeIn()%3B%5Cn%5Cn%20%20%2F%2F%20Running%20a%20method%20after%20the%20animation%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20interactionPromise%20%3D%20InteractionManager.runAfterInteractions(()%20%3D%3E%5Cn%20%20%20%20%20%20onShown()%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20return%20()%20%3D%3E%20interactionPromise.cancel()%3B%5Cn%20%20%7D%2C%20%5BonShown%5D)%3B%5Cn%5Cn%20%20return%20%3CAnimated.View%20style%3D%7B%5Bstyles.ball%2C%20%7Bopacity%7D%5D%7D%20%2F%3E%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3E%7Binstructions%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CBall%20onShown%3D%7B()%20%3D%3E%20Alert.alert('Animation%20is%20done')%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20ball%3A%20%7B%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20'salmon'%2C%5Cn%20%20%20%20borderRadius%3A%20100%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsx)(n.h3,{id:"advanced",children:"Advanced"}),"\n",(0,a.jsxs)(o.Z,{groupId:"language",queryString:!0,defaultValue:s.Z.defaultSnackLanguage,values:s.Z.snackLanguages,children:[(0,a.jsx)(i.Z,{value:"javascript",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"InteractionManager Function Component Advanced Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.js%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseEffect%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Animated%2C%5Cn%20%20InteractionManager%2C%5Cn%20%20Platform%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20instructions%20%3D%20Platform.select(%7B%5Cn%20%20ios%3A%20'Press%20Cmd%2BR%20to%20reload%2C%5C%5Cn'%20%2B%20'Cmd%2BD%20or%20shake%20for%20dev%20menu'%2C%5Cn%20%20android%3A%5Cn%20%20%20%20'Double%20tap%20R%20on%20your%20keyboard%20to%20reload%2C%5C%5Cn'%20%2B%5Cn%20%20%20%20'Shake%20or%20press%20menu%20button%20for%20dev%20menu'%2C%5Cn%7D)%3B%5Cn%5Cn%2F%2F%20You%20can%20create%20a%20custom%20interaction%2Fanimation%20and%20add%5Cn%2F%2F%20support%20for%20InteractionManager%5Cnconst%20useCustomInteraction%20%3D%20(timeLocked%20%3D%202000)%20%3D%3E%20%7B%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20handle%20%3D%20InteractionManager.createInteractionHandle()%3B%5Cn%5Cn%20%20%20%20setTimeout(%5Cn%20%20%20%20%20%20()%20%3D%3E%20InteractionManager.clearInteractionHandle(handle)%2C%5Cn%20%20%20%20%20%20timeLocked%2C%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20InteractionManager.clearInteractionHandle(handle)%3B%5Cn%20%20%7D%2C%20%5BtimeLocked%5D)%3B%5Cn%7D%3B%5Cn%5Cnconst%20Ball%20%3D%20(%7BonInteractionIsDone%7D)%20%3D%3E%20%7B%5Cn%20%20useCustomInteraction()%3B%5Cn%5Cn%20%20%2F%2F%20Running%20a%20method%20after%20the%20interaction%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20InteractionManager.runAfterInteractions(()%20%3D%3E%20onInteractionIsDone())%3B%5Cn%20%20%7D%2C%20%5BonInteractionIsDone%5D)%3B%5Cn%5Cn%20%20return%20%3CAnimated.View%20style%3D%7B%5Bstyles.ball%5D%7D%20%2F%3E%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3E%7Binstructions%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CBall%20onInteractionIsDone%3D%7B()%20%3D%3E%20Alert.alert('Interaction%20is%20done')%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20ball%3A%20%7B%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20'salmon'%2C%5Cn%20%20%20%20borderRadius%3A%20100%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(i.Z,{value:"typescript",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"InteractionManager Function Component Advanced Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseEffect%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Animated%2C%5Cn%20%20InteractionManager%2C%5Cn%20%20Platform%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20instructions%20%3D%20Platform.select(%7B%5Cn%20%20ios%3A%20'Press%20Cmd%2BR%20to%20reload%2C%5C%5Cn'%20%2B%20'Cmd%2BD%20or%20shake%20for%20dev%20menu'%2C%5Cn%20%20android%3A%5Cn%20%20%20%20'Double%20tap%20R%20on%20your%20keyboard%20to%20reload%2C%5C%5Cn'%20%2B%5Cn%20%20%20%20'Shake%20or%20press%20menu%20button%20for%20dev%20menu'%2C%5Cn%7D)%3B%5Cn%5Cn%2F%2F%20You%20can%20create%20a%20custom%20interaction%2Fanimation%20and%20add%5Cn%2F%2F%20support%20for%20InteractionManager%5Cnconst%20useCustomInteraction%20%3D%20(timeLocked%20%3D%202000)%20%3D%3E%20%7B%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20handle%20%3D%20InteractionManager.createInteractionHandle()%3B%5Cn%5Cn%20%20%20%20setTimeout(%5Cn%20%20%20%20%20%20()%20%3D%3E%20InteractionManager.clearInteractionHandle(handle)%2C%5Cn%20%20%20%20%20%20timeLocked%2C%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20InteractionManager.clearInteractionHandle(handle)%3B%5Cn%20%20%7D%2C%20%5BtimeLocked%5D)%3B%5Cn%7D%3B%5Cn%5Cntype%20BallProps%20%3D%20%7B%5Cn%20%20onInteractionIsDone%3A%20()%20%3D%3E%20void%3B%5Cn%7D%3B%5Cn%5Cnconst%20Ball%20%3D%20(%7BonInteractionIsDone%7D%3A%20BallProps)%20%3D%3E%20%7B%5Cn%20%20useCustomInteraction()%3B%5Cn%5Cn%20%20%2F%2F%20Running%20a%20method%20after%20the%20interaction%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20InteractionManager.runAfterInteractions(()%20%3D%3E%20onInteractionIsDone())%3B%5Cn%20%20%7D%2C%20%5BonInteractionIsDone%5D)%3B%5Cn%5Cn%20%20return%20%3CAnimated.View%20style%3D%7B%5Bstyles.ball%5D%7D%20%2F%3E%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3E%7Binstructions%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CBall%20onInteractionIsDone%3D%7B()%20%3D%3E%20Alert.alert('Interaction%20is%20done')%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20ball%3A%20%7B%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20'salmon'%2C%5Cn%20%20%20%20borderRadius%3A%20100%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"}),": ",(0,a.jsx)(n.code,{children:"InteractionManager.runAfterInteractions()"})," is not working properly on web. It triggers immediately without waiting until the interaction is finished."]}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(n.h3,{id:"runafterinteractions",children:(0,a.jsx)(n.code,{children:"runAfterInteractions()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"static runAfterInteractions(task?: (() => any) | SimpleTask | PromiseTask);\n"})}),"\n",(0,a.jsx)(n.p,{children:'Schedule a function to run after all interactions have completed. Returns a cancellable "promise".'}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"createinteractionhandle",children:(0,a.jsx)(n.code,{children:"createInteractionHandle()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"static createInteractionHandle(): Handle;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Notify manager that an interaction has started."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"clearinteractionhandle",children:(0,a.jsx)(n.code,{children:"clearInteractionHandle()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"static clearInteractionHandle(handle: Handle);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Notify manager that an interaction has completed."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"setdeadline",children:(0,a.jsx)(n.code,{children:"setDeadline()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"static setDeadline(deadline: number);\n"})}),"\n",(0,a.jsx)(n.p,{children:"A positive number will use setTimeout to schedule any tasks after the eventLoopRunningTime hits the deadline value, otherwise all tasks will be executed in one setImmediate batch (default)."})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(p,e)})):p(e)}},86386:(e,n,t)=>{t.d(n,{Z:()=>C});var a=t(27378),r=t(38944);const o={tabItem:"tabItem_wHwb"};var i=Object.defineProperty,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&d(e,t,n[t]);if(s)for(var t of s(n))c.call(n,t)&&d(e,t,n[t]);return e};function C({children:e,hidden:n,className:t}){return a.createElement("div",u({role:"tabpanel",className:(0,r.Z)(o.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>_});var a=t(27378),r=t(38944),o=t(12112),i=t(3620),s=t(69490),l=t(14953),c=t(27886),d=t(7106),u=Object.defineProperty,C=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,D=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))h.call(n,t)&&D(e,t,n[t]);if(m)for(var t of m(n))f.call(n,t)&&D(e,t,n[t]);return e},g=(e,n)=>C(e,p(n));function B(e){var n,t;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function v(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return B(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function y({value:e,tabValues:n}){return n.some((n=>n.value===e))}function x({queryString:e=!1,groupId:n}){const t=(0,i.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(g(b({},t.location),{search:n.toString()}))}),[r,t])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=v(e),[i,l]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!y({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,u]=x({queryString:t,groupId:r}),[C,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),m=(()=>{const e=null!=c?c:C;return y({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!y({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,o]),tabValues:o}}var A=t(14185);const w={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var I=Object.defineProperty,E=Object.defineProperties,j=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,P=(e,n,t)=>n in e?I(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,T=(e,n)=>{for(var t in n||(n={}))F.call(n,t)&&P(e,t,n[t]);if(S)for(var t of S(n))O.call(n,t)&&P(e,t,n[t]);return e},V=(e,n)=>E(e,j(n));function M({className:e,block:n,selectedValue:t,selectValue:i,tabValues:s}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),r=s[a].value;r!==t&&(c(n),i(r))},u=e=>{var n,t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=null!=(n=l[t])?n:l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;a=null!=(t=l[n])?t:l[l.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e)},s.map((({value:e,label:n,attributes:o})=>a.createElement("li",V(T({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>l.push(e),onKeyDown:u,onClick:d},o),{className:(0,r.Z)("tabs__item",w.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function R({lazy:e,children:n,selectedValue:t}){const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function N(e){const n=k(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",w.tabList)},a.createElement(M,T(T({},e),n)),a.createElement(R,T(T({},e),n)))}function _(e){const n=(0,A.Z)();return a.createElement(N,T({key:String(n)},e),B(e.children))}},11674:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,t)=>{var a=t(27378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var a,o={},c=null,d=null;for(a in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,a)&&!l.hasOwnProperty(a)&&(o[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===o[a]&&(o[a]=n[a]);return{$$typeof:r,type:e,key:c,ref:d,props:o,_owner:s.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>o});var a=t(27378);const r=a.createContext({});function o(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||i:o(e),a.createElement(r.Provider,{value:s},n)}}}]);