/*! For license information please see 243fbebc.e8f33373.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[43625],{5313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(24246),i=n(71670);const o={id:"actionsheetios",title:"ActionSheetIOS"},c=void 0,r={id:"actionsheetios",title:"ActionSheetIOS",description:"Displays native to iOS Action Sheet component.",source:"@site/versioned_docs/version-0.70/actionsheetios.md",sourceDirName:".",slug:"/actionsheetios",permalink:"/docs/0.70/actionsheetios",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/actionsheetios.md",tags:[],version:"0.70",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"actionsheetios",title:"ActionSheetIOS"},sidebar:"api",previous:{title:"ToastAndroid",permalink:"/docs/0.70/toastandroid"},next:{title:"DynamicColorIOS",permalink:"/docs/0.70/dynamiccolorios"}},a={},l=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>showActionSheetWithOptions()</code>",id:"showactionsheetwithoptions",level:3},{value:"<code>dismissActionSheet()</code>",id:"dismissactionsheet",level:3},{value:"<code>showShareActionSheetWithOptions()</code>",id:"showshareactionsheetwithoptions",level:3}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",div:"div",h1:"h1",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",hr:"hr",blockquote:"blockquote",strong:"strong"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Displays native to iOS ",(0,s.jsx)(t.a,{href:"https://developer.apple.com/design/human-interface-guidelines/ios/views/action-sheets/",children:"Action Sheet"})," component."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.div,{class:"snack-player","data-snack-name":"ActionSheetIOS","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20ActionSheetIOS%2C%20Button%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bresult%2C%20setResult%5D%20%3D%20useState(%5C%22%F0%9F%94%AE%5C%22)%3B%5Cn%5Cn%20%20const%20onPress%20%3D%20()%20%3D%3E%5Cn%20%20%20%20ActionSheetIOS.showActionSheetWithOptions(%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20options%3A%20%5B%5C%22Cancel%5C%22%2C%20%5C%22Generate%20number%5C%22%2C%20%5C%22Reset%5C%22%5D%2C%5Cn%20%20%20%20%20%20%20%20destructiveButtonIndex%3A%202%2C%5Cn%20%20%20%20%20%20%20%20cancelButtonIndex%3A%200%2C%5Cn%20%20%20%20%20%20%20%20userInterfaceStyle%3A%20'dark'%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20buttonIndex%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(buttonIndex%20%3D%3D%3D%200)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%2F%2F%20cancel%20action%5Cn%20%20%20%20%20%20%20%20%7D%20else%20if%20(buttonIndex%20%3D%3D%3D%201)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20setResult(Math.floor(Math.random()%20*%20100)%20%2B%201)%3B%5Cn%20%20%20%20%20%20%20%20%7D%20else%20if%20(buttonIndex%20%3D%3D%3D%202)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20setResult(%5C%22%F0%9F%94%AE%5C%22)%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.result%7D%3E%7Bresult%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%20onPress%3D%7BonPress%7D%20title%3D%5C%22Show%20Action%20Sheet%5C%22%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20result%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2064%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.h3,{id:"showactionsheetwithoptions",children:(0,s.jsx)(t.code,{children:"showActionSheetWithOptions()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"static showActionSheetWithOptions(options, callback)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Display an iOS action sheet. The ",(0,s.jsx)(t.code,{children:"options"})," object must contain one or more of:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"options"})," (array of strings) - a list of button titles (required)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"cancelButtonIndex"})," (int) - index of cancel button in ",(0,s.jsx)(t.code,{children:"options"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"cancelButtonTintColor"})," (string) - the ",(0,s.jsx)(t.a,{href:"colors",children:"color"})," used for the change the text color of the cancel button"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"destructiveButtonIndex"})," (int or array of ints) - indices of destructive buttons in ",(0,s.jsx)(t.code,{children:"options"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"title"})," (string) - a title to show above the action sheet"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"message"})," (string) - a message to show below the title"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"anchor"})," (number) - the node to which the action sheet should be anchored (used for iPad)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"tintColor"})," (string) - the ",(0,s.jsx)(t.a,{href:"colors",children:"color"})," used for non-destructive button titles"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"disabledButtonIndices"})," (array of numbers) - a list of button indices which should be disabled"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"userInterfaceStyle"})," (string) - the interface style used for the action sheet, can be set to ",(0,s.jsx)(t.code,{children:"light"})," or ",(0,s.jsx)(t.code,{children:"dark"}),", otherwise the default system style will be used"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The 'callback' function takes one parameter, the zero-based index of the selected item."}),"\n",(0,s.jsx)(t.p,{children:"Minimal example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"ActionSheetIOS.showActionSheetWithOptions(\n  {\n    options: ['Cancel', 'Remove'],\n    destructiveButtonIndex: 1,\n    cancelButtonIndex: 0,\n  },\n  buttonIndex => {\n    if (buttonIndex === 1) {\n      /* destructive action */\n    }\n  },\n);\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"dismissactionsheet",children:(0,s.jsx)(t.code,{children:"dismissActionSheet()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"static dismissActionSheet()\n"})}),"\n",(0,s.jsx)(t.p,{children:"Dismisses the most upper iOS action sheet presented, if no action sheet is present a warning is displayed."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"showshareactionsheetwithoptions",children:(0,s.jsx)(t.code,{children:"showShareActionSheetWithOptions()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"static showShareActionSheetWithOptions(options, failureCallback, successCallback)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Display the iOS share sheet. The ",(0,s.jsx)(t.code,{children:"options"})," object should contain one or both of ",(0,s.jsx)(t.code,{children:"message"})," and ",(0,s.jsx)(t.code,{children:"url"})," and can additionally have a ",(0,s.jsx)(t.code,{children:"subject"})," or ",(0,s.jsx)(t.code,{children:"excludedActivityTypes"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"url"})," (string) - a URL to share"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"message"})," (string) - a message to share"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"subject"})," (string) - a subject for the message"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"excludedActivityTypes"})," (array) - the activities to exclude from the ActionSheet"]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," If ",(0,s.jsx)(t.code,{children:"url"})," points to a local file, or is a base64-encoded uri, the file it points to will be loaded and shared directly. In this way, you can share images, videos, PDF files, etc. If ",(0,s.jsx)(t.code,{children:"url"})," points to a remote file or address it must conform to URL format as described in ",(0,s.jsx)(t.a,{href:"https://www.ietf.org/rfc/rfc2396.txt",children:"RFC 2396"}),". For example, a web URL without a proper protocol (HTTP/HTTPS) will not be shared."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The 'failureCallback' function takes one parameter, an error object. The only property defined on this object is an optional ",(0,s.jsx)(t.code,{children:"stack"})," property of type ",(0,s.jsx)(t.code,{children:"string"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The 'successCallback' function takes two parameters:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a boolean value signifying success or failure"}),"\n",(0,s.jsx)(t.li,{children:"a string that, in the case of success, indicates the method of sharing"}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},71426:(e,t,n)=>{var s=n(27378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,o={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,s)&&!a.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:i,type:e,key:l,ref:d,props:o,_owner:r.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>o});var s=n(27378);const i=s.createContext({});function o(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||c:o(e),s.createElement(i.Provider,{value:r},t)}}}]);