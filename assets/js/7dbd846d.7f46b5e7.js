/*! For license information please see 7dbd846d.7f46b5e7.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[71292],{50346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(24246),o=n(71670);const r={id:"fast-refresh",title:"Fast Refresh"},i=void 0,a={id:"fast-refresh",title:"Fast Refresh",description:'Fast Refresh is a React Native feature that allows you to get near-instant feedback for changes in your React components. Fast Refresh is enabled by default, and you can toggle "Enable Fast Refresh" in the React Native developer menu. With Fast Refresh enabled, most edits should be visible within a second or two.',source:"@site/versioned_docs/version-0.70/fast-refresh.md",sourceDirName:".",slug:"/fast-refresh",permalink:"/docs/0.70/fast-refresh",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/fast-refresh.md",tags:[],version:"0.70",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"fast-refresh",title:"Fast Refresh"},sidebar:"docs",previous:{title:"Running On Device",permalink:"/docs/0.70/running-on-device"},next:{title:"Symbolicating a stack trace",permalink:"/docs/0.70/symbolication"}},l={},d=[{value:"How It Works",id:"how-it-works",level:2},{value:"Error Resilience",id:"error-resilience",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Tips",id:"tips",level:2},{value:"Fast Refresh and Hooks",id:"fast-refresh-and-hooks",level:2}];function c(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong",em:"em",code:"code"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:['Fast Refresh is a React Native feature that allows you to get near-instant feedback for changes in your React components. Fast Refresh is enabled by default, and you can toggle "Enable Fast Refresh" in the ',(0,s.jsx)(t.a,{href:"/docs/debugging#accessing-the-in-app-developer-menu",children:"React Native developer menu"}),". With Fast Refresh enabled, most edits should be visible within a second or two."]}),"\n",(0,s.jsx)(t.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If you edit a module that ",(0,s.jsx)(t.strong,{children:"only exports React component(s)"}),", Fast Refresh will update the code only for that module, and re-render your component. You can edit anything in that file, including styles, rendering logic, event handlers, or effects."]}),"\n",(0,s.jsxs)(t.li,{children:["If you edit a module with exports that ",(0,s.jsx)(t.em,{children:"aren't"})," React components, Fast Refresh will re-run both that module, and the other modules importing it. So if both ",(0,s.jsx)(t.code,{children:"Button.js"})," and ",(0,s.jsx)(t.code,{children:"Modal.js"})," import ",(0,s.jsx)(t.code,{children:"Theme.js"}),", editing ",(0,s.jsx)(t.code,{children:"Theme.js"})," will update both components."]}),"\n",(0,s.jsxs)(t.li,{children:["Finally, if you ",(0,s.jsx)(t.strong,{children:"edit a file"})," that's ",(0,s.jsx)(t.strong,{children:"imported by modules outside of the React tree"}),", Fast Refresh ",(0,s.jsx)(t.strong,{children:"will fall back to doing a full reload"}),". You might have a file which renders a React component but also exports a value that is imported by a ",(0,s.jsx)(t.strong,{children:"non-React component"}),". For example, maybe your component also exports a constant, and a non-React utility module imports it. In that case, consider migrating the constant to a separate file and importing it into both files. This will re-enable Fast Refresh to work. Other cases can usually be solved in a similar way."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"error-resilience",children:"Error Resilience"}),"\n",(0,s.jsxs)(t.p,{children:["If you make a ",(0,s.jsx)(t.strong,{children:"syntax error"})," during a Fast Refresh session, you can fix it and save the file again. The redbox will disappear. Modules with syntax errors are prevented from running, so you won't need to reload the app."]}),"\n",(0,s.jsxs)(t.p,{children:["If you make a ",(0,s.jsx)(t.strong,{children:"runtime error during the module initialization"})," (for example, typing ",(0,s.jsx)(t.code,{children:"Style.create"})," instead of ",(0,s.jsx)(t.code,{children:"StyleSheet.create"}),"), the Fast Refresh session will continue once you fix the error. The redbox will disappear, and the module will be updated."]}),"\n",(0,s.jsxs)(t.p,{children:["If you make a mistake that leads to a ",(0,s.jsx)(t.strong,{children:"runtime error inside your component"}),", the Fast Refresh session will ",(0,s.jsx)(t.em,{children:"also"})," continue after you fix the error. In that case, React will remount your application using the updated code."]}),"\n",(0,s.jsxs)(t.p,{children:["If you have ",(0,s.jsx)(t.a,{href:"https://reactjs.org/docs/error-boundaries.html",children:"error boundaries"})," in your app (which is a good idea for graceful failures in production), they will retry rendering on the next edit after a redbox. In that sense, having an error boundary can prevent you from always getting kicked out to the root app screen. However, keep in mind that error boundaries shouldn't be ",(0,s.jsx)(t.em,{children:"too"})," granular. They are used by React in production, and should always be designed intentionally."]}),"\n",(0,s.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsx)(t.p,{children:"Fast Refresh tries to preserve local React state in the component you're editing, but only if it's safe to do so. Here's a few reasons why you might see local state being reset on every edit to a file:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Local state is not preserved for class components (only function components and Hooks preserve state)."}),"\n",(0,s.jsxs)(t.li,{children:["The module you're editing might have ",(0,s.jsx)(t.em,{children:"other"})," exports in addition to a React component."]}),"\n",(0,s.jsxs)(t.li,{children:["Sometimes, a module would export the result of calling higher-order component like ",(0,s.jsx)(t.code,{children:"createNavigationContainer(MyScreen)"}),". If the returned component is a class, state will be reset."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In the longer term, as more of your codebase moves to function components and Hooks, you can expect state to be preserved in more cases."}),"\n",(0,s.jsx)(t.h2,{id:"tips",children:"Tips"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Fast Refresh preserves React local state in function components (and Hooks) by default."}),"\n",(0,s.jsxs)(t.li,{children:["Sometimes you might want to ",(0,s.jsx)(t.em,{children:"force"})," the state to be reset, and a component to be remounted. For example, this can be handy if you're tweaking an animation that only happens on mount. To do this, you can add ",(0,s.jsx)(t.code,{children:"// @refresh reset"})," anywhere in the file you're editing. This directive is local to the file, and instructs Fast Refresh to remount components defined in that file on every edit."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"fast-refresh-and-hooks",children:"Fast Refresh and Hooks"}),"\n",(0,s.jsxs)(t.p,{children:["When possible, Fast Refresh attempts to preserve the state of your component between edits. In particular, ",(0,s.jsx)(t.code,{children:"useState"})," and ",(0,s.jsx)(t.code,{children:"useRef"})," preserve their previous values as long as you don't change their arguments or the order of the Hook calls."]}),"\n",(0,s.jsxs)(t.p,{children:["Hooks with dependencies\u2014such as ",(0,s.jsx)(t.code,{children:"useEffect"}),", ",(0,s.jsx)(t.code,{children:"useMemo"}),", and ",(0,s.jsx)(t.code,{children:"useCallback"}),"\u2014will ",(0,s.jsx)(t.em,{children:"always"})," update during Fast Refresh. Their list of dependencies will be ignored while Fast Refresh is happening."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, when you edit ",(0,s.jsx)(t.code,{children:"useMemo(() => x * 2, [x])"})," to ",(0,s.jsx)(t.code,{children:"useMemo(() => x * 10, [x])"}),", it will re-run even though ",(0,s.jsx)(t.code,{children:"x"})," (the dependency) has not changed. If React didn't do that, your edit wouldn't reflect on the screen!"]}),"\n",(0,s.jsxs)(t.p,{children:["Sometimes, this can lead to unexpected results. For example, even a ",(0,s.jsx)(t.code,{children:"useEffect"})," with an empty array of dependencies would still re-run once during Fast Refresh. However, writing code resilient to an occasional re-running of ",(0,s.jsx)(t.code,{children:"useEffect"})," is a good practice even without Fast Refresh. This makes it easier for you to later introduce new dependencies to it."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},71426:(e,t,n)=>{var s=n(27378),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var s,r={},d=null,c=null;for(s in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,s)&&!l.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:o,type:e,key:d,ref:c,props:r,_owner:a.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>r});var s=n(27378);const o=s.createContext({});function r(e){const t=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||i:r(e),s.createElement(o.Provider,{value:a},t)}}}]);