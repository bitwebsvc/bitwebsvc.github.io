/*! For license information please see 29c99528.9f11a89c.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[54779],{25222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>C,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=n(24246),i=n(71670);const a={id:"using-a-listview",title:"Using List Views"},o=void 0,r={id:"using-a-listview",title:"Using List Views",description:"React Native provides a suite of components for presenting lists of data. Generally, you'll want to use either FlatList or SectionList.",source:"@site/../docs/using-a-listview.md",sourceDirName:".",slug:"/using-a-listview",permalink:"/docs/next/using-a-listview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/using-a-listview.md",tags:[],version:"current",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"using-a-listview",title:"Using List Views"},sidebar:"docs",previous:{title:"Using a ScrollView",permalink:"/docs/next/using-a-scrollview"},next:{title:"Troubleshooting",permalink:"/docs/next/troubleshooting"}},c={},l=[];function d(e){const t=Object.assign({p:"p",a:"a",code:"code",div:"div"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["React Native provides a suite of components for presenting lists of data. Generally, you'll want to use either ",(0,s.jsx)(t.a,{href:"/docs/next/flatlist",children:"FlatList"})," or ",(0,s.jsx)(t.a,{href:"/docs/next/sectionlist",children:"SectionList"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"FlatList"})," component displays a scrolling list of changing, but similarly structured, data. ",(0,s.jsx)(t.code,{children:"FlatList"})," works well for long lists of data, where the number of items might change over time. Unlike the more generic ",(0,s.jsx)(t.a,{href:"/docs/next/using-a-scrollview",children:(0,s.jsx)(t.code,{children:"ScrollView"})}),", the ",(0,s.jsx)(t.code,{children:"FlatList"})," only renders elements that are currently showing on the screen, not all the elements at once."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"FlatList"})," component requires two props: ",(0,s.jsx)(t.code,{children:"data"})," and ",(0,s.jsx)(t.code,{children:"renderItem"}),". ",(0,s.jsx)(t.code,{children:"data"})," is the source of information for the list. ",(0,s.jsx)(t.code,{children:"renderItem"})," takes one item from the source and returns a formatted component to render."]}),"\n",(0,s.jsxs)(t.p,{children:["This example creates a basic ",(0,s.jsx)(t.code,{children:"FlatList"})," of hardcoded data. Each item in the ",(0,s.jsx)(t.code,{children:"data"})," props is rendered as a ",(0,s.jsx)(t.code,{children:"Text"})," component. The ",(0,s.jsx)(t.code,{children:"FlatListBasics"})," component then renders the ",(0,s.jsx)(t.code,{children:"FlatList"})," and all ",(0,s.jsx)(t.code,{children:"Text"})," components."]}),"\n",(0,s.jsx)(t.div,{class:"snack-player","data-snack-name":"FlatList Basics","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BFlatList%2C%20StyleSheet%2C%20Text%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20paddingTop%3A%2022%2C%5Cn%20%20%7D%2C%5Cn%20%20item%3A%20%7B%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20height%3A%2044%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnconst%20FlatListBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CFlatList%5Cn%20%20%20%20%20%20%20%20data%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Devin'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Dan'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Dominic'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jackson'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'James'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Joel'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'John'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jillian'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jimmy'%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Julie'%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20%3CText%20style%3D%7Bstyles.item%7D%3E%7Bitem.key%7D%3C%2FText%3E%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20FlatListBasics%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsxs)(t.p,{children:["If you want to render a set of data broken into logical sections, maybe with section headers, similar to ",(0,s.jsx)(t.code,{children:"UITableView"}),"s on iOS, then a ",(0,s.jsx)(t.a,{href:"/docs/next/sectionlist",children:"SectionList"})," is the way to go."]}),"\n",(0,s.jsx)(t.div,{class:"snack-player","data-snack-name":"SectionList Basics","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BSectionList%2C%20StyleSheet%2C%20Text%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20paddingTop%3A%2022%2C%5Cn%20%20%7D%2C%5Cn%20%20sectionHeader%3A%20%7B%5Cn%20%20%20%20paddingTop%3A%202%2C%5Cn%20%20%20%20paddingLeft%3A%2010%2C%5Cn%20%20%20%20paddingRight%3A%2010%2C%5Cn%20%20%20%20paddingBottom%3A%202%2C%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20fontWeight%3A%20'bold'%2C%5Cn%20%20%20%20backgroundColor%3A%20'rgba(247%2C247%2C247%2C1.0)'%2C%5Cn%20%20%7D%2C%5Cn%20%20item%3A%20%7B%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20height%3A%2044%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnconst%20SectionListBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CSectionList%5Cn%20%20%20%20%20%20%20%20sections%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%7Btitle%3A%20'D'%2C%20data%3A%20%5B'Devin'%2C%20'Dan'%2C%20'Dominic'%5D%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20'J'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20data%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20'Jackson'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20'James'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20'Jillian'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20'Jimmy'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20'Joel'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20'John'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20'Julie'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20%3CText%20style%3D%7Bstyles.item%7D%3E%7Bitem%7D%3C%2FText%3E%7D%5Cn%20%20%20%20%20%20%20%20renderSectionHeader%3D%7B(%7Bsection%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.sectionHeader%7D%3E%7Bsection.title%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%20%20keyExtractor%3D%7Bitem%20%3D%3E%20%60basicListEntry-%24%7Bitem%7D%60%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20SectionListBasics%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsxs)(t.p,{children:["One of the most common uses for a list view is displaying data that you fetch from a server. To do that, you will need to ",(0,s.jsx)(t.a,{href:"/docs/next/network",children:"learn about networking in React Native"}),"."]})]})}const C=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},71426:(e,t,n)=>{var s=n(27378),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,a={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!c.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:i,type:e,key:l,ref:d,props:a,_owner:r.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>a});var s=n(27378);const i=s.createContext({});function a(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||o:a(e),s.createElement(i.Provider,{value:r},t)}}}]);