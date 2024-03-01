/*! For license information please see 4be9cd0f.547f849d.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[75988],{46864:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(24246),r=t(71670);const i={title:"Changelogs in Pull Requests"},a=void 0,o={id:"changelogs-in-pull-requests",title:"Changelogs in Pull Requests",description:'The changelog entry in your pull request serves as a sort of "tl;dr do they affect Android? are these breaking changes? is something new being added?',source:"@site/contributing/changelogs-in-pull-requests.md",sourceDirName:".",slug:"/changelogs-in-pull-requests",permalink:"/contributing/changelogs-in-pull-requests",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/contributing/changelogs-in-pull-requests.md",tags:[],version:"current",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{title:"Changelogs in Pull Requests"},sidebar:"contributing",previous:{title:"How to Open a Pull Request",permalink:"/contributing/how-to-open-a-pull-request"},next:{title:"How to File an Issue",permalink:"/contributing/how-to-file-an-issue"}},l={},c=[{value:"Format",id:"format",level:3},{value:"Examples",id:"examples",level:3},{value:"FAQ",id:"faq",level:3},{value:"What if my pull request contains changes to both Android and JavaScript?",id:"what-if-my-pull-request-contains-changes-to-both-android-and-javascript",level:4},{value:"What if my pull request contains changes to both Android and iOS?",id:"what-if-my-pull-request-contains-changes-to-both-android-and-ios",level:4},{value:"What if my pull request contains changes to Android, iOS, and JavaScript?",id:"what-if-my-pull-request-contains-changes-to-android-ios-and-javascript",level:4},{value:"What if...?",id:"what-if",level:4}];function d(e){const n=Object.assign({p:"p",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",a:"a",h4:"h4"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:'The changelog entry in your pull request serves as a sort of "tl;dr:" for your changes: do they affect Android? are these breaking changes? is something new being added?'}),"\n",(0,s.jsx)(n.p,{children:"Providing a changelog using a standardized format helps release coordinators write release notes. Please include a changelog as part of your pull request description. Your pull request description will be used as the commit message should the pull request get merged."}),"\n",(0,s.jsx)(n.h3,{id:"format",children:"Format"}),"\n",(0,s.jsx)(n.p,{children:"A changelog entry has the following format"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"## Changelog:\n\n[Category] [Type] - Message\n"})}),"\n",(0,s.jsx)(n.p,{children:'The "Category" field may be one of:'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Android"}),", for changes that affect Android."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"iOS"}),", for changes that affect iOS."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"General"}),", for changes that do not fit any of the other categories."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Internal"}),", for changes that would not be relevant to developers consuming the release notes."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'The "Type" field may be one of:'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Breaking"}),", for breaking changes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Added"}),", for new features."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Changed"}),", for changes in existing functionality."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Deprecated"}),", for soon-to-be removed features."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Removed"}),", for now removed features."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fixed"}),", for any bug fixes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Security"}),", in case of vulnerabilities."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Finally, the "Message" field may answer "what and why" on a feature level. Use this to briefly tell React Native users about notable changes.'}),"\n",(0,s.jsxs)(n.p,{children:["For more detail, see ",(0,s.jsx)(n.a,{href:"https://keepachangelog.com/en/1.0.0/#how",children:"How do I make a good changelog?"})," and ",(0,s.jsx)(n.a,{href:"https://keepachangelog.com/en/1.0.0/#why",children:"Why keep a changelog?"})]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"[General] [Added] - Add snapToOffsets prop to ScrollView component"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"[General] [Fixed] - Fix various issues in snapToInterval on ScrollView component"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"[iOS] [Fixed] - Fix crash in RCTImagePicker"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(n.h4,{id:"what-if-my-pull-request-contains-changes-to-both-android-and-javascript",children:"What if my pull request contains changes to both Android and JavaScript?"}),"\n",(0,s.jsx)(n.p,{children:"Use the Android category."}),"\n",(0,s.jsx)(n.h4,{id:"what-if-my-pull-request-contains-changes-to-both-android-and-ios",children:"What if my pull request contains changes to both Android and iOS?"}),"\n",(0,s.jsx)(n.p,{children:"Use the General category if the change is made in a single pull request."}),"\n",(0,s.jsx)(n.h4,{id:"what-if-my-pull-request-contains-changes-to-android-ios-and-javascript",children:"What if my pull request contains changes to Android, iOS, and JavaScript?"}),"\n",(0,s.jsx)(n.p,{children:"Use the General category if the change is made in a single pull request."}),"\n",(0,s.jsx)(n.h4,{id:"what-if",children:"What if...?"}),"\n",(0,s.jsx)(n.p,{children:'Any changelog entry is better than none. If you are unsure if you have picked the right category, use the "message" field to succinctly describe your change.'}),"\n",(0,s.jsxs)(n.p,{children:["These entries are used by the ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/rnx-kit/tree/main/incubator/rn-changelog-generator",children:(0,s.jsx)(n.code,{children:"@rnx-kit/rn-changelog-generator"})})," script to build a rough draft, which is then edited by a release coordinator."]}),"\n",(0,s.jsx)(n.p,{children:"Your notes will be used to add your change to the correct location in the final release notes."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},71426:(e,n,t)=>{var s=t(27378),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,i={},c=null,d=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,s)&&!l.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:o.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>i});var s=t(27378);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:i(e),s.createElement(r.Provider,{value:o},n)}}}]);