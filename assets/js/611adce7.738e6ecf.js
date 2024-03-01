/*! For license information please see 611adce7.738e6ecf.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[7092],{29399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(24246),o=n(71670);const s={title:"Bots Reference"},a=void 0,r={id:"bots-reference",title:"Bots Reference",description:"pull-bot",source:"@site/contributing/bots-reference.md",sourceDirName:".",slug:"/bots-reference",permalink:"/contributing/bots-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/contributing/bots-reference.md",tags:[],version:"current",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{title:"Bots Reference"},sidebar:"contributing",previous:{title:"Managing Pull Requests",permalink:"/contributing/managing-pull-requests"},next:{title:"Roles and Responsibilities",permalink:"/contributing/release-roles-responsibilities"}},l={},c=[{value:"pull-bot",id:"pull-bot",level:2},{value:"analysis-bot",id:"analysis-bot",level:2},{value:"label-actions",id:"label-actions",level:2},{value:"github-actions",id:"github-actions",level:2},{value:"facebook-github-bot",id:"facebook-github-bot",level:2},{value:"react-native-bot",id:"react-native-bot",level:2}];function u(e){const t=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"pull-bot",children:"pull-bot"}),"\n",(0,i.jsxs)(t.p,{children:["This pull request linter bot performs basic sanity checks whenever a pull request is created. It might leave a comment on a pull request if it is unable to find a test plan or a changelog in the description, or if it notices that the pull request was not opened against the ",(0,i.jsx)(t.code,{children:"main"})," branch. This bot uses ",(0,i.jsx)(t.a,{href:"https://danger.systems",children:"Danger"}),", and its configuration can be found in the ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/main/packages/react-native-bots/dangerfile.js",children:(0,i.jsx)(t.code,{children:"dangerfile.js"})}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"analysis-bot",children:"analysis-bot"}),"\n",(0,i.jsxs)(t.p,{children:["The code analysis bot collects feedback from tools such as Prettier, eslint, and Flow whenever a commit is added to a pull request. If any of these tools finds issues with the code, the bot will add these as inline review comments on the pull request. Its configuration can be found in the ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/main/scripts/circleci/analyze_code.sh",children:(0,i.jsx)(t.code,{children:"analyze_code.sh"})})," file in core repository."]}),"\n",(0,i.jsx)(t.h2,{id:"label-actions",children:"label-actions"}),"\n",(0,i.jsxs)(t.p,{children:["A bot that acts on an issue or pull request based on a label. Configured in ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/main/.github/workflows/on-issue-labeled.yml",children:(0,i.jsx)(t.code,{children:".github/workflows/on-issue-labeled.yml"})}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"github-actions",children:"github-actions"}),"\n",(0,i.jsxs)(t.p,{children:["A bot that performs actions defined in a GitHub workflow. Workflows are configured in ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/react-native/tree/main/.github/workflows",children:(0,i.jsx)(t.code,{children:".github/workflows"})}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"facebook-github-bot",children:"facebook-github-bot"}),"\n",(0,i.jsxs)(t.p,{children:["The Facebook GitHub Bot is used across several open source projects at Meta. In the case of React Native, you will most likely encounter it when it pushes a merge commit to ",(0,i.jsx)(t.code,{children:"main"})," after a pull request is successfully imported to Facebook's internal source control. It will also let authors know if they are missing a Contributor License Agreement."]}),"\n",(0,i.jsx)(t.h2,{id:"react-native-bot",children:"react-native-bot"}),"\n",(0,i.jsxs)(t.p,{children:["The React Native bot is a tool that helps us automate several processes described in this wiki. Configured in ",(0,i.jsx)(t.a,{href:"https://github.com/hramos/react-native-bot",children:(0,i.jsx)(t.code,{children:"hramos/react-native-bot"})}),"."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(u,e)})):u(e)}},71426:(e,t,n)=>{var i=n(27378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,s={},c=null,u=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,i)&&!l.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:o,type:e,key:c,ref:u,props:s,_owner:r.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>s});var i=n(27378);const o=i.createContext({});function s(e){const t=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||a:s(e),i.createElement(o.Provider,{value:r},t)}}}]);