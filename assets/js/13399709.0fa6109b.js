/*! For license information please see 13399709.0fa6109b.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[45799],{58087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(24246),s=t(71670);const r={id:"optimizing-flatlist-configuration",title:"Optimizing Flatlist Configuration"},o=void 0,l={id:"optimizing-flatlist-configuration",title:"Optimizing Flatlist Configuration",description:"Terms",source:"@site/../docs/optimizing-flatlist-configuration.md",sourceDirName:".",slug:"/optimizing-flatlist-configuration",permalink:"/docs/next/optimizing-flatlist-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/optimizing-flatlist-configuration.md",tags:[],version:"current",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"optimizing-flatlist-configuration",title:"Optimizing Flatlist Configuration"},sidebar:"docs",previous:{title:"Speeding Up CI Builds",permalink:"/docs/next/speeding-ci-builds"},next:{title:"RAM Bundles and Inline Requires",permalink:"/docs/next/ram-bundles-inline-requires"}},a={},d=[{value:"Terms",id:"terms",level:2},{value:"Props",id:"props",level:2},{value:"removeClippedSubviews",id:"removeclippedsubviews",level:3},{value:"maxToRenderPerBatch",id:"maxtorenderperbatch",level:3},{value:"updateCellsBatchingPeriod",id:"updatecellsbatchingperiod",level:3},{value:"initialNumToRender",id:"initialnumtorender",level:3},{value:"windowSize",id:"windowsize",level:3},{value:"List items",id:"list-items",level:2},{value:"Use basic components",id:"use-basic-components",level:3},{value:"Use light components",id:"use-light-components",level:3},{value:"Use <code>memo()</code>",id:"use-memo",level:3},{value:"Use cached optimized images",id:"use-cached-optimized-images",level:3},{value:"Use getItemLayout",id:"use-getitemlayout",level:3},{value:"Use keyExtractor or key",id:"use-keyextractor-or-key",level:3},{value:"Avoid anonymous function on renderItem",id:"avoid-anonymous-function-on-renderitem",level:3}];function c(e){const n=Object.assign({h2:"h2",ul:"ul",li:"li",p:"p",strong:"strong",code:"code",a:"a",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"terms",children:"Terms"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VirtualizedList:"})," The component behind ",(0,i.jsx)(n.code,{children:"FlatList"})," (React Native's implementation of the ",(0,i.jsx)(n.a,{href:"https://bvaughn.github.io/react-virtualized/#/components/List",children:(0,i.jsx)(n.code,{children:"Virtual List"})})," concept.)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Memory consumption:"})," How much information about your list is being stored in memory, which could lead to an app crash."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Responsiveness:"})," Application ability to respond to interactions. Low responsiveness, for instance, is when you touch on a component and it waits a bit to respond, instead of responding immediately as expected."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Blank areas:"})," When ",(0,i.jsx)(n.code,{children:"VirtualizedList"})," can't render your items fast enough, you may enter a part of your list with non-rendered components that appear as blank space."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Viewport:"})," The visible area of content that is rendered to pixels."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Window:"})," The area in which items should be mounted, which is generally much larger than the viewport."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(n.p,{children:["Here are a list of props that can help to improve ",(0,i.jsx)(n.code,{children:"FlatList"})," performance:"]}),"\n",(0,i.jsx)(n.h3,{id:"removeclippedsubviews",children:"removeClippedSubviews"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"False"})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"true"}),", views that are outside of the viewport are detached from the native view hierarchy."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pros:"})," This reduces time spent on the main thread, and thus reduces the risk of dropped frames, by excluding views outside of the viewport from the native rendering and drawing traversals."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cons:"})," Be aware that this implementation can have bugs, such as missing content (mainly observed on iOS), especially if you are doing complex things with transforms and/or absolute positioning. Also note this does not save significant memory because the views are not deallocated, only detached."]}),"\n",(0,i.jsx)(n.h3,{id:"maxtorenderperbatch",children:"maxToRenderPerBatch"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"10"})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["It is a ",(0,i.jsx)(n.code,{children:"VirtualizedList"})," prop that can be passed through ",(0,i.jsx)(n.code,{children:"FlatList"}),". This controls the amount of items rendered per batch, which is the next chunk of items rendered on every scroll."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pros:"})," Setting a bigger number means less visual blank areas when scrolling (increases the fill rate)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cons:"})," More items per batch means longer periods of JavaScript execution potentially blocking other event processing, like presses, hurting responsiveness."]}),"\n",(0,i.jsx)(n.h3,{id:"updatecellsbatchingperiod",children:"updateCellsBatchingPeriod"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"50"})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["While ",(0,i.jsx)(n.code,{children:"maxToRenderPerBatch"})," tells the amount of items rendered per batch, setting ",(0,i.jsx)(n.code,{children:"updateCellsBatchingPeriod"})," tells your ",(0,i.jsx)(n.code,{children:"VirtualizedList"})," the delay in milliseconds between batch renders (how frequently your component will be rendering the windowed items)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pros:"})," Combining this prop with ",(0,i.jsx)(n.code,{children:"maxToRenderPerBatch"})," gives you the power to, for example, render more items in a less frequent batch, or less items in a more frequent batch."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cons:"})," Less frequent batches may cause blank areas, More frequent batches may cause responsiveness issues."]}),"\n",(0,i.jsx)(n.h3,{id:"initialnumtorender",children:"initialNumToRender"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"10"})]})})]}),"\n",(0,i.jsx)(n.p,{children:"The initial amount of items to render."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pros:"})," Define precise number of items that would cover the screen for every device. This can be a big performance boost for the initial render."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cons:"})," Setting a low ",(0,i.jsx)(n.code,{children:"initialNumToRender"})," may cause blank areas, especially if it's too small to cover the viewport on initial render."]}),"\n",(0,i.jsx)(n.h3,{id:"windowsize",children:"windowSize"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"21"})]})})]}),"\n",(0,i.jsx)(n.p,{children:"The number passed here is a measurement unit where 1 is equivalent to your viewport height. The default value is 21 (10 viewports above, 10 below, and one in between)."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pros:"})," Bigger ",(0,i.jsx)(n.code,{children:"windowSize"})," will result in less chance of seeing blank space while scrolling. On the other hand, smaller ",(0,i.jsx)(n.code,{children:"windowSize"})," will result in fewer items mounted simultaneously, saving memory."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cons:"})," For a bigger ",(0,i.jsx)(n.code,{children:"windowSize"}),", you will have more memory consumption. For a lower ",(0,i.jsx)(n.code,{children:"windowSize"}),", you will have a bigger chance of seeing blank areas."]}),"\n",(0,i.jsx)(n.h2,{id:"list-items",children:"List items"}),"\n",(0,i.jsx)(n.p,{children:"Below are some tips about list item components. They are the core of your list, so they need to be fast."}),"\n",(0,i.jsx)(n.h3,{id:"use-basic-components",children:"Use basic components"}),"\n",(0,i.jsx)(n.p,{children:"The more complex your components are, the slower they will render. Try to avoid a lot of logic and nesting in your list items. If you are reusing this list item component a lot in your app, create a component only for your big lists and make them with as little logic and nesting as possible."}),"\n",(0,i.jsx)(n.h3,{id:"use-light-components",children:"Use light components"}),"\n",(0,i.jsx)(n.p,{children:"The heavier your components are, the slower they render. Avoid heavy images (use a cropped version or thumbnail for list items, as small as possible). Talk to your design team, use as little effects and interactions and information as possible in your list. Show them in your item's detail."}),"\n",(0,i.jsxs)(n.h3,{id:"use-memo",children:["Use ",(0,i.jsx)(n.code,{children:"memo()"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"React.memo()"})," creates a memoized component that will be re-rendered only when the props passed to the component change. We can use this function to optimize the components in the FlatList."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import React, {memo} from 'react';\nimport {View, Text} from 'react-native';\n\nconst MyListItem = memo(\n  ({title}: {title: string}) => (\n    <View>\n      <Text>{title}</Text>\n    </View>\n  ),\n  (prevProps, nextProps) => {\n    return prevProps.title === nextProps.title;\n  },\n);\n\nexport default MyListItem;\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this example, we have determined that MyListItem should be re-rendered only when the title changes. We passed the comparison function as the second argument to React.memo() so that the component is re-rendered only when the specified prop is changed. If the comparison function returns true, the component will not be re-rendered."}),"\n",(0,i.jsx)(n.h3,{id:"use-cached-optimized-images",children:"Use cached optimized images"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the community packages (such as ",(0,i.jsx)(n.a,{href:"https://github.com/DylanVann/react-native-fast-image",children:"react-native-fast-image"})," from ",(0,i.jsx)(n.a,{href:"https://github.com/DylanVann",children:"@DylanVann"}),") for more performant images. Every image in your list is a ",(0,i.jsx)(n.code,{children:"new Image()"})," instance. The faster it reaches the ",(0,i.jsx)(n.code,{children:"loaded"})," hook, the faster your JavaScript thread will be free again."]}),"\n",(0,i.jsx)(n.h3,{id:"use-getitemlayout",children:"Use getItemLayout"}),"\n",(0,i.jsxs)(n.p,{children:["If all your list item components have the same height (or width, for a horizontal list), providing the ",(0,i.jsx)(n.a,{href:"flatlist#getitemlayout",children:"getItemLayout"})," prop removes the need for your ",(0,i.jsx)(n.code,{children:"FlatList"})," to manage async layout calculations. This is a very desirable optimization technique."]}),"\n",(0,i.jsx)(n.p,{children:"If your components have dynamic size and you really need performance, consider asking your design team if they may think of a redesign in order to perform better."}),"\n",(0,i.jsx)(n.h3,{id:"use-keyextractor-or-key",children:"Use keyExtractor or key"}),"\n",(0,i.jsxs)(n.p,{children:["You can set the ",(0,i.jsx)(n.a,{href:"flatlist#keyextractor",children:(0,i.jsx)(n.code,{children:"keyExtractor"})})," to your ",(0,i.jsx)(n.code,{children:"FlatList"})," component. This prop is used for caching and as the React ",(0,i.jsx)(n.code,{children:"key"})," to track item re-ordering."]}),"\n",(0,i.jsxs)(n.p,{children:["You can also use a ",(0,i.jsx)(n.code,{children:"key"})," prop in your item component."]}),"\n",(0,i.jsx)(n.h3,{id:"avoid-anonymous-function-on-renderitem",children:"Avoid anonymous function on renderItem"}),"\n",(0,i.jsxs)(n.p,{children:["For functional components, move the ",(0,i.jsx)(n.code,{children:"renderItem"})," function outside of the returned JSX. Also, ensure that it is wrapped in a ",(0,i.jsx)(n.code,{children:"useCallback"})," hook to prevent it from being recreated each render."]}),"\n",(0,i.jsxs)(n.p,{children:["For class componenents, move the ",(0,i.jsx)(n.code,{children:"renderItem"})," function outside of the render function, so it won't recreate itself each time the render function is called."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const renderItem = useCallback(({item}) => (\n   <View key={item.key}>\n      <Text>{item.title}</Text>\n   </View>\n ), []);\n\nreturn (\n  // ...\n\n  <FlatList data={items} renderItem={renderItem} />;\n  // ...\n);\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},71426:(e,n,t)=>{var i=t(27378),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var i,r={},d=null,c=null;for(i in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,i)&&!a.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:s,type:e,key:d,ref:c,props:r,_owner:l.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>r});var i=t(27378);const s=i.createContext({});function r(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||o:r(e),i.createElement(s.Provider,{value:l},n)}}}]);