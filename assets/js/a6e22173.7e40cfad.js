/*! For license information please see a6e22173.7e40cfad.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[63733],{21052:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=s(24246),t=s(71670);const r={id:"animatedvalue",title:"Animated.Value"},l=void 0,d={id:"animatedvalue",title:"Animated.Value",description:"Standard value for driving animations. One Animated.Value can drive multiple properties in a synchronized fashion, but can only be driven by one mechanism at a time. Using a new mechanism (e.g. starting a new animation, or calling setValue) will stop any previous ones.",source:"@site/versioned_docs/version-0.70/animatedvalue.md",sourceDirName:".",slug:"/animatedvalue",permalink:"/docs/0.70/animatedvalue",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/animatedvalue.md",tags:[],version:"0.70",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"animatedvalue",title:"Animated.Value"},sidebar:"api",previous:{title:"Animated",permalink:"/docs/0.70/animated"},next:{title:"Animated.ValueXY",permalink:"/docs/0.70/animatedvaluexy"}},a={},c=[{value:"Methods",id:"methods",level:2},{value:"<code>setValue()</code>",id:"setvalue",level:3},{value:"<code>setOffset()</code>",id:"setoffset",level:3},{value:"<code>flattenOffset()</code>",id:"flattenoffset",level:3},{value:"<code>extractOffset()</code>",id:"extractoffset",level:3},{value:"<code>addListener()</code>",id:"addlistener",level:3},{value:"<code>removeListener()</code>",id:"removelistener",level:3},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",level:3},{value:"<code>stopAnimation()</code>",id:"stopanimation",level:3},{value:"<code>resetAnimation()</code>",id:"resetanimation",level:3},{value:"<code>interpolate()</code>",id:"interpolate",level:3},{value:"<code>animate()</code>",id:"animate",level:3},{value:"<code>stopTracking()</code>",id:"stoptracking",level:3},{value:"<code>track()</code>",id:"track",level:3}];function h(e){const n=Object.assign({p:"p",code:"code",hr:"hr",h1:"h1",h2:"h2",h3:"h3",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Standard value for driving animations. One ",(0,i.jsx)(n.code,{children:"Animated.Value"})," can drive multiple properties in a synchronized fashion, but can only be driven by one mechanism at a time. Using a new mechanism (e.g. starting a new animation, or calling ",(0,i.jsx)(n.code,{children:"setValue"}),") will stop any previous ones."]}),"\n",(0,i.jsxs)(n.p,{children:["Typically initialized with ",(0,i.jsx)(n.code,{children:"new Animated.Value(0);"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"setvalue",children:(0,i.jsx)(n.code,{children:"setValue()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"setValue(value);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Directly set the value. This will stop any animations running on the value and update all the bound properties."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"value"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Value"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"setoffset",children:(0,i.jsx)(n.code,{children:"setOffset()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"setOffset(offset);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Sets an offset that is applied on top of whatever value is set, whether via ",(0,i.jsx)(n.code,{children:"setValue"}),", an animation, or ",(0,i.jsx)(n.code,{children:"Animated.event"}),". Useful for compensating things like the start of a pan gesture."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"offset"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Offset value"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"flattenoffset",children:(0,i.jsx)(n.code,{children:"flattenOffset()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"flattenOffset();\n"})}),"\n",(0,i.jsx)(n.p,{children:"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"extractoffset",children:(0,i.jsx)(n.code,{children:"extractOffset()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"extractOffset();\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"addlistener",children:(0,i.jsx)(n.code,{children:"addListener()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"addListener(callback);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively."}),"\n",(0,i.jsx)(n.p,{children:"Returns a string that serves as an identifier for the listener."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"callback"}),(0,i.jsx)(n.td,{children:"function"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsxs)(n.td,{children:["The callback function which will receive an object with a ",(0,i.jsx)(n.code,{children:"value"})," key set to the new value."]})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"removelistener",children:(0,i.jsx)(n.code,{children:"removeListener()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"removeListener(id);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Unregister a listener. The ",(0,i.jsx)(n.code,{children:"id"})," param shall match the identifier previously returned by ",(0,i.jsx)(n.code,{children:"addListener()"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Id for the listener being removed."})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"removealllisteners",children:(0,i.jsx)(n.code,{children:"removeAllListeners()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"removeAllListeners();\n"})}),"\n",(0,i.jsx)(n.p,{children:"Remove all registered listeners."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"stopanimation",children:(0,i.jsx)(n.code,{children:"stopAnimation()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"stopAnimation([callback]);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Stops any running animation or tracking. ",(0,i.jsx)(n.code,{children:"callback"})," is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"callback"}),(0,i.jsx)(n.td,{children:"function"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"A function that will receive the final value."})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"resetanimation",children:(0,i.jsx)(n.code,{children:"resetAnimation()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"resetAnimation([callback]);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Stops any animation and resets the value to its original."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"callback"}),(0,i.jsx)(n.td,{children:"function"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"A function that will receive the original value."})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"interpolate",children:(0,i.jsx)(n.code,{children:"interpolate()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"interpolate(config);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Interpolates the value before updating the property, e.g. mapping 0-1 to 0-10."}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.code,{children:"AnimatedInterpolation.js"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"config"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"See below."})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"config"})," object is composed of the following keys:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"inputRange"}),": an array of numbers"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"outputRange"}),": an array of numbers or strings"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"easing"})," (optional): a function that returns a number, given an input number"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"extrapolate"})," (optional): a string such as 'extend', 'identity', or 'clamp'"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"extrapolateLeft"})," (optional): a string such as 'extend', 'identity', or 'clamp'"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"extrapolateRight"})," (optional): a string such as 'extend', 'identity', or 'clamp'"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"animate",children:(0,i.jsx)(n.code,{children:"animate()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"animate(animation, callback);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Typically only used internally, but could be used by a custom Animation class."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"animation"}),(0,i.jsx)(n.td,{children:"Animation"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsxs)(n.td,{children:["See ",(0,i.jsx)(n.code,{children:"Animation.js"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"callback"}),(0,i.jsx)(n.td,{children:"function"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Callback function."})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"stoptracking",children:(0,i.jsx)(n.code,{children:"stopTracking()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"stopTracking();\n"})}),"\n",(0,i.jsx)(n.p,{children:"Typically only used internally."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"track",children:(0,i.jsx)(n.code,{children:"track()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"track(tracking);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Typically only used internally."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tracking"}),(0,i.jsx)(n.td,{children:"AnimatedNode"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsxs)(n.td,{children:["See ",(0,i.jsx)(n.code,{children:"AnimatedNode.js"})]})]})})]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}},71426:(e,n,s)=>{var i=s(27378),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var i,r={},c=null,h=null;for(i in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(h=n.ref),n)l.call(n,i)&&!a.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:t,type:e,key:c,ref:h,props:r,_owner:d.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},24246:(e,n,s)=>{e.exports=s(71426)},71670:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>r});var i=s(27378);const t=i.createContext({});function r(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||l:r(e),i.createElement(t.Provider,{value:d},n)}}}]);