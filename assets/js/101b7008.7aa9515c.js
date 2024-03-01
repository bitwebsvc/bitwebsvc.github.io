/*! For license information please see 101b7008.7aa9515c.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[62201],{46476:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(24246),o=s(71670);const r={id:"components-and-apis",title:"Core Components and APIs"},t=void 0,a={id:"components-and-apis",title:"Core Components and APIs",description:"React Native provides a number of built-in Core Components ready for you to use in your app. You can find them all in the left sidebar (or menu above, if you are on a narrow screen). If you're not sure where to get started, take a look at the following categories:",source:"@site/versioned_docs/version-0.73/components-and-apis.md",sourceDirName:".",slug:"/components-and-apis",permalink:"/docs/components-and-apis",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/components-and-apis.md",tags:[],version:"0.73",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"components-and-apis",title:"Core Components and APIs"},sidebar:"components",next:{title:"ActivityIndicator",permalink:"/docs/activityindicator"}},c={},d=[{value:"Basic Components",id:"basic-components",level:2},{value:"User Interface",id:"user-interface",level:2},{value:"List Views",id:"list-views",level:2},{value:"Android Components and APIs",id:"android-components-and-apis",level:2},{value:"iOS Components and APIs",id:"ios-components-and-apis",level:2},{value:"Others",id:"others",level:2}];function l(e){const n=Object.assign({p:"p",a:"a",ul:"ul",li:"li",h2:"h2",code:"code"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["React Native provides a number of built-in ",(0,i.jsx)(n.a,{href:"intro-react-native-components",children:"Core Components"})," ready for you to use in your app. You can find them all in the left sidebar (or menu above, if you are on a narrow screen). If you're not sure where to get started, take a look at the following categories:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"components-and-apis#basic-components",children:"Basic Components"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"components-and-apis#user-interface",children:"User Interface"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"components-and-apis#list-views",children:"List Views"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"components-and-apis#android-components-and-apis",children:"Android-specific"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"components-and-apis#ios-components-and-apis",children:"iOS-specific"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"components-and-apis#others",children:"Others"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If you're looking for a library that does something specific, please refer to ",(0,i.jsx)(n.a,{href:"libraries#finding-libraries",children:"this guide about finding libraries"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"basic-components",children:"Basic Components"}),"\n",(0,i.jsx)(n.p,{children:"Most apps will end up using one or more of these basic components."}),"\n",(0,i.jsxs)("div",{className:"component-grid component-grid-border",children:[(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./view",children:[(0,i.jsx)("h3",{children:"View"}),(0,i.jsx)("p",{children:"The most fundamental component for building a UI."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./text",children:[(0,i.jsx)("h3",{children:"Text"}),(0,i.jsx)("p",{children:"A component for displaying text."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./image",children:[(0,i.jsx)("h3",{children:"Image"}),(0,i.jsx)("p",{children:"A component for displaying images."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./textinput",children:[(0,i.jsx)("h3",{children:"TextInput"}),(0,i.jsx)("p",{children:"A component for inputting text into the app via a keyboard."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./scrollview",children:[(0,i.jsx)("h3",{children:"ScrollView"}),(0,i.jsx)("p",{children:"Provides a scrolling container that can host multiple components and views."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./stylesheet",children:[(0,i.jsx)("h3",{children:"StyleSheet"}),(0,i.jsx)("p",{children:"Provides an abstraction layer similar to CSS stylesheets."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"user-interface",children:"User Interface"}),"\n",(0,i.jsx)(n.p,{children:"These common user interface controls will render on any platform."}),"\n",(0,i.jsxs)("div",{className:"component-grid component-grid-border",children:[(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./button",children:[(0,i.jsx)("h3",{children:"Button"}),(0,i.jsx)("p",{children:"A basic button component for handling touches that should render nicely on any platform."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./switch",children:[(0,i.jsx)("h3",{children:"Switch"}),(0,i.jsx)("p",{children:"Renders a boolean input."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"list-views",children:"List Views"}),"\n",(0,i.jsxs)(n.p,{children:["Unlike the more generic ",(0,i.jsx)(n.a,{href:"./scrollview",children:(0,i.jsx)(n.code,{children:"ScrollView"})}),", the following list view components only render elements that are currently showing on the screen. This makes them a performant choice for displaying long lists of data."]}),"\n",(0,i.jsxs)("div",{className:"component-grid component-grid-border",children:[(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./flatlist",children:[(0,i.jsx)("h3",{children:"FlatList"}),(0,i.jsx)("p",{children:"A component for rendering performant scrollable lists."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./sectionlist",children:[(0,i.jsx)("h3",{children:"SectionList"}),(0,i.jsxs)("p",{children:["Like ",(0,i.jsx)("code",{children:"FlatList"}),", but for sectioned lists."]})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"android-components-and-apis",children:"Android Components and APIs"}),"\n",(0,i.jsx)(n.p,{children:"Many of the following components provide wrappers for commonly used Android classes."}),"\n",(0,i.jsxs)("div",{className:"component-grid component-grid-border",children:[(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./backhandler",children:[(0,i.jsx)("h3",{children:"BackHandler"}),(0,i.jsx)("p",{children:"Detect hardware button presses for back navigation."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./drawerlayoutandroid",children:[(0,i.jsx)("h3",{children:"DrawerLayoutAndroid"}),(0,i.jsxs)("p",{children:["Renders a ",(0,i.jsx)("code",{children:"DrawerLayout"})," on Android."]})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./permissionsandroid",children:[(0,i.jsx)("h3",{children:"PermissionsAndroid"}),(0,i.jsx)("p",{children:"Provides access to the permissions model introduced in Android M."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./toastandroid",children:[(0,i.jsx)("h3",{children:"ToastAndroid"}),(0,i.jsx)("p",{children:"Create an Android Toast alert."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"ios-components-and-apis",children:"iOS Components and APIs"}),"\n",(0,i.jsx)(n.p,{children:"Many of the following components provide wrappers for commonly used UIKit classes."}),"\n",(0,i.jsx)("div",{className:"component-grid component-grid-border",children:(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./actionsheetios",children:[(0,i.jsx)("h3",{children:"ActionSheetIOS"}),(0,i.jsx)("p",{children:"API to display an iOS action sheet or share sheet."})]})})}),"\n",(0,i.jsx)(n.h2,{id:"others",children:"Others"}),"\n",(0,i.jsx)(n.p,{children:"These components may be useful for certain applications. For an exhaustive list of components and APIs, check out the sidebar to the left (or menu above, if you are on a narrow screen)."}),"\n",(0,i.jsxs)("div",{className:"component-grid",children:[(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./activityindicator",children:[(0,i.jsx)("h3",{children:"ActivityIndicator"}),(0,i.jsx)("p",{children:"Displays a circular loading indicator."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./alert",children:[(0,i.jsx)("h3",{children:"Alert"}),(0,i.jsx)("p",{children:"Launches an alert dialog with the specified title and message."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./animated",children:[(0,i.jsx)("h3",{children:"Animated"}),(0,i.jsx)("p",{children:"A library for creating fluid, powerful animations that are easy to build and maintain."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./dimensions",children:[(0,i.jsx)("h3",{children:"Dimensions"}),(0,i.jsx)("p",{children:"Provides an interface for getting device dimensions."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./keyboardavoidingview",children:[(0,i.jsx)("h3",{children:"KeyboardAvoidingView"}),(0,i.jsx)("p",{children:"Provides a view that moves out of the way of the virtual keyboard automatically."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./linking",children:[(0,i.jsx)("h3",{children:"Linking"}),(0,i.jsx)("p",{children:"Provides a general interface to interact with both incoming and outgoing app links."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./modal",children:[(0,i.jsx)("h3",{children:"Modal"}),(0,i.jsx)("p",{children:"Provides a simple way to present content above an enclosing view."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./pixelratio",children:[(0,i.jsx)("h3",{children:"PixelRatio"}),(0,i.jsx)("p",{children:"Provides access to the device pixel density."})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./refreshcontrol",children:[(0,i.jsx)("h3",{children:"RefreshControl"}),(0,i.jsxs)("p",{children:["This component is used inside a ",(0,i.jsx)("code",{children:"ScrollView"})," to add pull to refresh functionality."]})]})}),(0,i.jsx)("div",{className:"component",children:(0,i.jsxs)("a",{href:"./statusbar",children:[(0,i.jsx)("h3",{children:"StatusBar"}),(0,i.jsx)("p",{children:"Component to control the app status bar."})]})})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},71426:(e,n,s)=>{var i=s(27378),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var i,r={},d=null,l=null;for(i in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)t.call(n,i)&&!c.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:o,type:e,key:d,ref:l,props:r,_owner:a.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},24246:(e,n,s)=>{e.exports=s(71426)},71670:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>r});var i=s(27378);const o=i.createContext({});function r(e){const n=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||t:r(e),i.createElement(o.Provider,{value:a},n)}}}]);