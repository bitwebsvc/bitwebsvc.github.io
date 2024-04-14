/*! For license information please see 46b4d265.2ef6856f.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[19396],{66039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(24246),i=n(71670);const s={id:"updating-upgrade-helper",title:"How to Update Upgrade Helper"},a=void 0,o={id:"updating-upgrade-helper",title:"How to Update Upgrade Helper",description:"From the readme of its dedicated repo:",source:"@site/contributing/updating-upgrade-helper.md",sourceDirName:".",slug:"/updating-upgrade-helper",permalink:"/contributing/updating-upgrade-helper",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/contributing/updating-upgrade-helper.md",tags:[],version:"current",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"updating-upgrade-helper",title:"How to Update Upgrade Helper"},sidebar:"contributing",previous:{title:"How to Test a Release",permalink:"/contributing/release-testing"},next:{title:"Release FAQ",permalink:"/contributing/release-faq"}},l={},c=[{value:"Instructions to update",id:"instructions-to-update",level:2},{value:"For release versions &gt;= 0.68",id:"for-release-versions--068",level:3},{value:"For release versions &lt; 0.68",id:"for-release-versions--068-1",level:3},{value:"Trigger GitHub action via CURL",id:"trigger-github-action-via-curl",level:4},{value:"Manual instructions",id:"manual-instructions",level:4}];function d(e){const t=Object.assign({p:"p",a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",ul:"ul",li:"li",h4:"h4",pre:"pre"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["From the readme of ",(0,r.jsx)(t.a,{href:"https://github.com/react-native-community/upgrade-helper#-how-it-works",children:"its dedicated repo"}),":"]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:["The Upgrade Helper tool aims to provide the full set of changes happening between any two versions, based on the previous work done in the ",(0,r.jsx)(t.code,{children:"rn-diff-purge"})," project:"]}),(0,r.jsxs)(t.p,{children:["This repository exposes an untouched React Native app generated with the CLI ",(0,r.jsx)(t.code,{children:"react-native init RnDiffApp"}),". Each new React Native release causes a new project to be created, removing the old one, and getting a diff between them. This way, the diff is always clean, always in sync with the changes of the init template."]})]}),"\n",(0,r.jsxs)(t.p,{children:["The upgrade helper webapp relies on ",(0,r.jsx)(t.a,{href:"https://github.com/react-native-community/rn-diff-purge",children:"rn-diff-purge"})," having the diff for the versions of RN released."]}),"\n",(0,r.jsx)(t.h2,{id:"instructions-to-update",children:"Instructions to update"}),"\n",(0,r.jsx)(t.h3,{id:"for-release-versions--068",children:"For release versions >= 0.68"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The GitHub action will be triggered by the ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/97291bfa3157ac171a2754e19a52d006040961fb/.circleci/config.yml#L1213-L1219",children:"CircleCI job that pushes the release link"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"for-release-versions--068-1",children:"For release versions < 0.68"}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["You need to have write access or be a Code Owner for the ",(0,r.jsx)(t.code,{children:"rn-diff-purge"})," repo to do either of these approaches."]})}),"\n",(0,r.jsx)(t.h4,{id:"trigger-github-action-via-curl",children:"Trigger GitHub action via CURL"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# Update the "version" with your version and provide your PAT\ncurl -X POST -H "Accept: application/vnd.github.v3+json" \\\n   https://api.github.com/repos/react-native-community/rn-diff-purge/dispatches \\\n   -d \'{"event_type":"publish", "client_payload": {"version": "0.67.0"}}\' \\\n   -H "authorization: Bearer <PAT>"\n'})}),"\n",(0,r.jsx)(t.h4,{id:"manual-instructions",children:"Manual instructions"}),"\n",(0,r.jsx)(t.p,{children:"To generate the diff for a new version, there are essentially only 3 steps needed:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"git clone"})," the ",(0,r.jsx)(t.code,{children:"rn-diff-purge"})," repo."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"cd"})," into it, and ",(0,r.jsx)(t.code,{children:"yarn install"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Run the script ",(0,r.jsx)(t.code,{children:"./new-release.sh <version_tag>"}),".","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["For example: ",(0,r.jsx)(t.code,{children:"./new-release.sh 0.66.0-rc.1"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},71426:(e,t,n)=>{var r=n(27378),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>s});var r=n(27378);const i=r.createContext({});function s(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||a:s(e),r.createElement(i.Provider,{value:o},t)}}}]);