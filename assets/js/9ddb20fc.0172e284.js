/*! For license information please see 9ddb20fc.0172e284.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[48228],{88225:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>w,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=r(24246),a=r(71670),i=r(48375),s=r(86386),o=r(11674);const l={id:"drawerlayoutandroid",title:"DrawerLayoutAndroid"},d=void 0,c={id:"drawerlayoutandroid",title:"DrawerLayoutAndroid",description:"React component that wraps the platform DrawerLayout (Android only). The Drawer (typically used for navigation) is rendered with renderNavigationView and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the drawerPosition prop and its width can be set by the drawerWidth prop.",source:"@site/versioned_docs/version-0.71/drawerlayoutandroid.md",sourceDirName:".",slug:"/drawerlayoutandroid",permalink:"/docs/0.71/drawerlayoutandroid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/drawerlayoutandroid.md",tags:[],version:"0.71",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"drawerlayoutandroid",title:"DrawerLayoutAndroid"},sidebar:"components",previous:{title:"VirtualizedList",permalink:"/docs/0.71/virtualizedlist"},next:{title:"TouchableNativeFeedback",permalink:"/docs/0.71/touchablenativefeedback"}},h={},u=[{value:"Example",id:"example",level:2},{value:"Props",id:"props",level:2},{value:"View Props",id:"view-props",level:3},{value:"<code>drawerBackgroundColor</code>",id:"drawerbackgroundcolor",level:3},{value:"<code>drawerLockMode</code>",id:"drawerlockmode",level:3},{value:"<code>drawerPosition</code>",id:"drawerposition",level:3},{value:"<code>drawerWidth</code>",id:"drawerwidth",level:3},{value:"<code>keyboardDismissMode</code>",id:"keyboarddismissmode",level:3},{value:"<code>onDrawerClose</code>",id:"ondrawerclose",level:3},{value:"<code>onDrawerOpen</code>",id:"ondraweropen",level:3},{value:"<code>onDrawerSlide</code>",id:"ondrawerslide",level:3},{value:"<code>onDrawerStateChanged</code>",id:"ondrawerstatechanged",level:3},{value:"<code>renderNavigationView</code>",id:"rendernavigationview",level:3},{value:"<code>statusBarBackgroundColor</code>",id:"statusbarbackgroundcolor",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>closeDrawer()</code>",id:"closedrawer",level:3},{value:"<code>openDrawer()</code>",id:"opendrawer",level:3}];function p(e){const n=Object.assign({p:"p",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",a:"a",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["React component that wraps the platform ",(0,t.jsx)(n.code,{children:"DrawerLayout"})," (Android only). The Drawer (typically used for navigation) is rendered with ",(0,t.jsx)(n.code,{children:"renderNavigationView"})," and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the ",(0,t.jsx)(n.code,{children:"drawerPosition"})," prop and its width can be set by the ",(0,t.jsx)(n.code,{children:"drawerWidth"})," prop."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(i.Z,{groupId:"language",queryString:!0,defaultValue:o.Z.defaultSnackLanguage,values:o.Z.snackLanguages,children:[(0,t.jsx)(s.Z,{value:"javascript",children:(0,t.jsx)(n.div,{class:"snack-player","data-snack-name":"DrawerLayoutAndroid Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.js%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseRef%2C%20useState%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Button%2C%5Cn%20%20DrawerLayoutAndroid%2C%5Cn%20%20Text%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20View%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20drawer%20%3D%20useRef(null)%3B%5Cn%20%20const%20%5BdrawerPosition%2C%20setDrawerPosition%5D%20%3D%20useState('left')%3B%5Cn%20%20const%20changeDrawerPosition%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20if%20(drawerPosition%20%3D%3D%3D%20'left')%20%7B%5Cn%20%20%20%20%20%20setDrawerPosition('right')%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20setDrawerPosition('left')%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20navigationView%20%3D%20()%20%3D%3E%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.navigationContainer%5D%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EI'm%20in%20the%20Drawer!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Close%20drawer%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20drawer.current.closeDrawer()%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CDrawerLayoutAndroid%5Cn%20%20%20%20%20%20ref%3D%7Bdrawer%7D%5Cn%20%20%20%20%20%20drawerWidth%3D%7B300%7D%5Cn%20%20%20%20%20%20drawerPosition%3D%7BdrawerPosition%7D%5Cn%20%20%20%20%20%20renderNavigationView%3D%7BnavigationView%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EDrawer%20on%20the%20%7BdrawerPosition%7D!%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Change%20Drawer%20Position%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20changeDrawerPosition()%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20Swipe%20from%20the%20side%20or%20press%20button%20below%20to%20see%20it!%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Open%20drawer%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20drawer.current.openDrawer()%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FDrawerLayoutAndroid%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20padding%3A%2016%2C%5Cn%20%20%7D%2C%5Cn%20%20navigationContainer%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'%23ecf0f1'%2C%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20padding%3A%2016%2C%5Cn%20%20%20%20fontSize%3A%2015%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,t.jsx)(s.Z,{value:"typescript",children:(0,t.jsx)(n.div,{class:"snack-player","data-snack-name":"DrawerLayoutAndroid Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseRef%2C%20useState%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Button%2C%5Cn%20%20DrawerLayoutAndroid%2C%5Cn%20%20Text%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20View%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20drawer%20%3D%20useRef%3CDrawerLayoutAndroid%3E(null)%3B%5Cn%20%20const%20%5BdrawerPosition%2C%20setDrawerPosition%5D%20%3D%20useState%3C'left'%20%7C%20'right'%3E(%5Cn%20%20%20%20'left'%2C%5Cn%20%20)%3B%5Cn%20%20const%20changeDrawerPosition%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20if%20(drawerPosition%20%3D%3D%3D%20'left')%20%7B%5Cn%20%20%20%20%20%20setDrawerPosition('right')%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20setDrawerPosition('left')%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20navigationView%20%3D%20()%20%3D%3E%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.navigationContainer%5D%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EI'm%20in%20the%20Drawer!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Close%20drawer%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20drawer.current%3F.closeDrawer()%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CDrawerLayoutAndroid%5Cn%20%20%20%20%20%20ref%3D%7Bdrawer%7D%5Cn%20%20%20%20%20%20drawerWidth%3D%7B300%7D%5Cn%20%20%20%20%20%20drawerPosition%3D%7BdrawerPosition%7D%5Cn%20%20%20%20%20%20renderNavigationView%3D%7BnavigationView%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EDrawer%20on%20the%20%7BdrawerPosition%7D!%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Change%20Drawer%20Position%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20changeDrawerPosition()%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20Swipe%20from%20the%20side%20or%20press%20button%20below%20to%20see%20it!%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Open%20drawer%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20drawer.current%3F.openDrawer()%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FDrawerLayoutAndroid%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20padding%3A%2016%2C%5Cn%20%20%7D%2C%5Cn%20%20navigationContainer%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'%23ecf0f1'%2C%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20padding%3A%2016%2C%5Cn%20%20%20%20fontSize%3A%2015%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,t.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,t.jsx)(n.h3,{id:"view-props",children:(0,t.jsx)(n.a,{href:"/docs/0.71/view#props",children:"View Props"})}),"\n",(0,t.jsxs)(n.p,{children:["Inherits ",(0,t.jsx)(n.a,{href:"/docs/0.71/view#props",children:"View Props"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"drawerbackgroundcolor",children:(0,t.jsx)(n.code,{children:"drawerBackgroundColor"})}),"\n",(0,t.jsxs)(n.p,{children:["Specifies the background color of the drawer. The default value is ",(0,t.jsx)(n.code,{children:"white"}),". If you want to set the opacity of the drawer, use rgba. Example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'return (\n  <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)" />\n);\n'})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/0.71/colors",children:"color"})}),(0,t.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"drawerlockmode",children:(0,t.jsx)(n.code,{children:"drawerLockMode"})}),"\n",(0,t.jsx)(n.p,{children:"Specifies the lock mode of the drawer. The drawer can be locked in 3 states:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"unlocked (default), meaning that the drawer will respond (open/close) to touch gestures."}),"\n",(0,t.jsx)(n.li,{children:"locked-closed, meaning that the drawer will stay closed and not respond to gestures."}),"\n",(0,t.jsxs)(n.li,{children:["locked-open, meaning that the drawer will stay opened and not respond to gestures. The drawer may still be opened and closed programmatically (",(0,t.jsx)(n.code,{children:"openDrawer"}),"/",(0,t.jsx)(n.code,{children:"closeDrawer"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"enum('unlocked', 'locked-closed', 'locked-open')"}),(0,t.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"drawerposition",children:(0,t.jsx)(n.code,{children:"drawerPosition"})}),"\n",(0,t.jsxs)(n.p,{children:["Specifies the side of the screen from which the drawer will slide in. By default it is set to ",(0,t.jsx)(n.code,{children:"left"}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"enum('left', 'right')"}),(0,t.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"drawerwidth",children:(0,t.jsx)(n.code,{children:"drawerWidth"})}),"\n",(0,t.jsx)(n.p,{children:"Specifies the width of the drawer, more precisely the width of the view that be pulled in from the edge of the window."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"keyboarddismissmode",children:(0,t.jsx)(n.code,{children:"keyboardDismissMode"})}),"\n",(0,t.jsx)(n.p,{children:"Determines whether the keyboard gets dismissed in response to a drag."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'none' (the default), drags do not dismiss the keyboard."}),"\n",(0,t.jsx)(n.li,{children:"'on-drag', the keyboard is dismissed when a drag begins."}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"enum('none', 'on-drag')"}),(0,t.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"ondrawerclose",children:(0,t.jsx)(n.code,{children:"onDrawerClose"})}),"\n",(0,t.jsx)(n.p,{children:"Function called whenever the navigation view has been closed."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"function"}),(0,t.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"ondraweropen",children:(0,t.jsx)(n.code,{children:"onDrawerOpen"})}),"\n",(0,t.jsx)(n.p,{children:"Function called whenever the navigation view has been opened."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"function"}),(0,t.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"ondrawerslide",children:(0,t.jsx)(n.code,{children:"onDrawerSlide"})}),"\n",(0,t.jsx)(n.p,{children:"Function called whenever there is an interaction with the navigation view."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"function"}),(0,t.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"ondrawerstatechanged",children:(0,t.jsx)(n.code,{children:"onDrawerStateChanged"})}),"\n",(0,t.jsx)(n.p,{children:"Function called when the drawer state has changed. The drawer can be in 3 states:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"idle, meaning there is no interaction with the navigation view happening at the time"}),"\n",(0,t.jsx)(n.li,{children:"dragging, meaning there is currently an interaction with the navigation view"}),"\n",(0,t.jsx)(n.li,{children:"settling, meaning that there was an interaction with the navigation view, and the navigation view is now finishing its closing or opening animation"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"function"}),(0,t.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"rendernavigationview",children:(0,t.jsx)(n.code,{children:"renderNavigationView"})}),"\n",(0,t.jsx)(n.p,{children:"The navigation view that will be rendered to the side of the screen and can be pulled in."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"function"}),(0,t.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"statusbarbackgroundcolor",children:(0,t.jsx)(n.code,{children:"statusBarBackgroundColor"})}),"\n",(0,t.jsx)(n.p,{children:"Make the drawer take the entire screen and draw the background of the status bar to allow it to open over the status bar. It will only have an effect on API 21+."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/0.71/colors",children:"color"})}),(0,t.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"closedrawer",children:(0,t.jsx)(n.code,{children:"closeDrawer()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"closeDrawer();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Closes the drawer."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"opendrawer",children:(0,t.jsx)(n.code,{children:"openDrawer()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"openDrawer();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Opens the drawer."})]})}const w=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},86386:(e,n,r)=>{r.d(n,{Z:()=>u});var t=r(27378),a=r(38944);const i={tabItem:"tabItem_wHwb"};var s=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,n,r)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,h=(e,n)=>{for(var r in n||(n={}))l.call(n,r)&&c(e,r,n[r]);if(o)for(var r of o(n))d.call(n,r)&&c(e,r,n[r]);return e};function u({children:e,hidden:n,className:r}){return t.createElement("div",h({role:"tabpanel",className:(0,a.Z)(i.tabItem,r)},{hidden:n}),e)}},48375:(e,n,r)=>{r.d(n,{Z:()=>_});var t=r(27378),a=r(38944),i=r(12112),s=r(3620),o=r(69490),l=r(14953),d=r(27886),c=r(7106),h=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,j=(e,n,r)=>n in e?h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,b=(e,n)=>{for(var r in n||(n={}))C.call(n,r)&&j(e,r,n[r]);if(w)for(var r of w(n))x.call(n,r)&&j(e,r,n[r]);return e},v=(e,n)=>u(e,p(n));function f(e){var n,r;return null!=(r=null==(n=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?r:[]}function g(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return f(e).map((({props:{value:e,label:n,attributes:r,default:t}})=>({value:e,label:n,attributes:r,default:t})))}(r);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function D({value:e,tabValues:n}){return n.some((n=>n.value===e))}function y({queryString:e=!1,groupId:n}){const r=(0,s.k6)(),a=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,l._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace(v(b({},r.location),{search:n.toString()}))}),[a,r])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,i=g(e),[s,l]=(0,t.useState)((()=>function({defaultValue:e,tabValues:n}){var r;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!D({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=null!=(r=n.find((e=>e.default)))?r:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[d,h]=y({queryString:r,groupId:a}),[u,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,c.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:a}),w=(()=>{const e=null!=d?d:u;return D({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{w&&l(w)}),[w]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!D({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var B=r(14185);const k={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var E=Object.defineProperty,A=Object.defineProperties,P=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,V=(e,n,r)=>n in e?E(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,N=(e,n)=>{for(var r in n||(n={}))T.call(n,r)&&V(e,r,n[r]);if(S)for(var r of S(n))O.call(n,r)&&V(e,r,n[r]);return e},L=(e,n)=>A(e,P(n));function I({className:e,block:n,selectedValue:r,selectValue:s,tabValues:o}){const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(d(n),s(a))},h=e=>{var n,r;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=null!=(n=l[r])?n:l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=null!=(r=l[n])?r:l[l.length-1];break}}null==t||t.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e)},o.map((({value:e,label:n,attributes:i})=>t.createElement("li",L(N({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>l.push(e),onKeyDown:h,onClick:c},i),{className:(0,a.Z)("tabs__item",k.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===e})}),null!=n?n:e))))}function F({lazy:e,children:n,selectedValue:r}){const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function R(e){const n=m(e);return t.createElement("div",{className:(0,a.Z)("tabs-container",k.tabList)},t.createElement(I,N(N({},e),n)),t.createElement(F,N(N({},e),n)))}function _(e){const n=(0,B.Z)();return t.createElement(R,N({key:String(n)},e),f(e.children))}},11674:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(63445);const a=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:a?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,r)=>{var t=r(27378),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,i={},d=null,c=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,t)&&!l.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:a,type:e,key:d,ref:c,props:i,_owner:o.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},24246:(e,n,r)=>{e.exports=r(71426)},71670:(e,n,r)=>{r.d(n,{Zo:()=>o,ah:()=>i});var t=r(27378);const a=t.createContext({});function i(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function o({components:e,children:n,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||s:i(e),t.createElement(a.Provider,{value:o},n)}}}]);