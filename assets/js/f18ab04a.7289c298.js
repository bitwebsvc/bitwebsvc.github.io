/*! For license information please see f18ab04a.7289c298.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[76580],{22326:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var n=i(24246),r=i(71670);const t={id:"release-roles-responsibilities",title:"Roles and Responsibilities"},l=void 0,a={id:"release-roles-responsibilities",title:"Roles and Responsibilities",description:'Here we set guidelines to apply the "dividi et impera" approach to React Native releases: it is an involved process and we need to clarify the work to allow for easier rotations of folks in various positions.',source:"@site/contributing/release-roles-responsibilites.md",sourceDirName:".",slug:"/release-roles-responsibilities",permalink:"/contributing/release-roles-responsibilities",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/contributing/release-roles-responsibilites.md",tags:[],version:"current",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"release-roles-responsibilities",title:"Roles and Responsibilities"},sidebar:"contributing",previous:{title:"Bots Reference",permalink:"/contributing/bots-reference"},next:{title:"Release Dependencies",permalink:"/contributing/release-dependencies"}},o={},c=[{value:"Release Role #1: Meta Releaser",id:"release-role-1-meta-releaser",level:2},{value:"Details",id:"details",level:3},{value:"Role Responsibilities",id:"role-responsibilities",level:3},{value:"Who can fill it",id:"who-can-fill-it",level:3},{value:"Release Role #2: Community Releaser",id:"release-role-2-community-releaser",level:2},{value:"Details",id:"details-1",level:3},{value:"Role Responsibilities",id:"role-responsibilities-1",level:3},{value:"Who can fill it",id:"who-can-fill-it-1",level:3}];function d(e){const s=Object.assign({p:"p",hr:"hr",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",a:"a"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:'Here we set guidelines to apply the "dividi et impera" approach to React Native releases: it is an involved process and we need to clarify the work to allow for easier rotations of folks in various positions.'}),"\n",(0,n.jsx)(s.p,{children:"In a standard situation, we expect that the Release Crew is composed of 2+2 releasers (two people from the community, two from Meta). Organically, the Release Crew will identify one Meta and Community drivers that will lead the effort, but that can change based on day-to-day availability of the members."}),"\n",(0,n.jsx)(s.p,{children:'A Release Crew effort starts with the work on a new minor; meaning, at least one week ahead of the branch cut. It is part of the current Release Crew responsibilities to identify when to "pass the baton" to the next one.'}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"release-role-1-meta-releaser",children:"Release Role #1: Meta Releaser"}),"\n",(0,n.jsx)(s.h3,{id:"details",children:"Details"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"2 people per each release"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Time commitment:"})," about 4 hours/week of work until the next crew starts working on a new minor release (multi month commitment)."]}),"\n",(0,n.jsx)(s.h3,{id:"role-responsibilities",children:"Role Responsibilities"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Drives the initial cut and sets up release scaffolding (re: blogpost draft, documentation bump, etc)"}),"\n",(0,n.jsxs)(s.li,{children:["Is informed of the pre-release & stable release status and any blocking issues and communicates to appropriate channels","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Attends & drives weekly release meeting"}),"\n",(0,n.jsx)(s.li,{children:"updates and monitors the #releases channel"}),"\n",(0,n.jsxs)(s.li,{children:["updates and monitors discussion in ",(0,n.jsx)(s.a,{href:"https://github.com/reactwg/react-native-releases/discussions",children:"react-wg/react-native-releases"})," discussion for both:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["the ",(0,n.jsx)(s.a,{href:"https://github.com/reactwg/react-native-releases/discussions/categories/releases",children:"pre-release"})]}),"\n",(0,n.jsxs)(s.li,{children:["the ",(0,n.jsx)(s.a,{href:"https://github.com/reactwg/react-native-releases/discussions/categories/patches",children:"stable release (for patches)"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Make final call on release decisions","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Decide when to promote pre-release to stable (in consult with the release crew)"}),"\n",(0,n.jsx)(s.li,{children:"Decide when to release a patch on stable"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Ensures blocking issues have owners","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Escalate internally if release community is blocked by Meta-owned dependencies (metro, folly, flipper, hermes, etc)"}),"\n",(0,n.jsx)(s.li,{children:"Coordinate with release crew on any community library blockers (reanimated, cli, etc.)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Escalates security alerts","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"When a security alert gets raised, communicates it quickly to relevant partners and internally"}),"\n",(0,n.jsx)(s.li,{children:"If the security fix commit lands and it\u2019s important, coordinates with the release crew on which stable branches should get the releases and produces the patch releases accordingly"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"Can perform release or delegate release steps"}),"\n",(0,n.jsxs)(s.li,{children:["Responsible for all active releases in the support window during the duration of the role ",(0,n.jsx)(s.a,{href:"https://github.com/reactwg/react-native-releases#which-versions-are-currently-supported",children:"supported versions"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"who-can-fill-it",children:"Who can fill it"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This role can only be filled by Meta engineers"}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"release-role-2-community-releaser",children:"Release Role #2: Community Releaser"}),"\n",(0,n.jsx)(s.h3,{id:"details-1",children:"Details"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"2 people per each release"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Time commitment:"})," flexible but, most likely, a few hours per week until next crew starts working on a new minor release (multi month commitment)."]}),"\n",(0,n.jsx)(s.h3,{id:"role-responsibilities-1",children:"Role Responsibilities"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Is informed of the minor release status and current stable status","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"prepares agenda & attends weekly release meeting"}),"\n",(0,n.jsx)(s.li,{children:"updates and monitors #releases channel"}),"\n",(0,n.jsxs)(s.li,{children:["updates and monitors discussion in ",(0,n.jsx)(s.a,{href:"https://github.com/reactwg/react-native-releases/discussions",children:"react-wg/react-native-releases"})," discussion for both:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["the ",(0,n.jsx)(s.a,{href:"https://github.com/reactwg/react-native-releases/discussions/categories/releases",children:"pre-release"})]}),"\n",(0,n.jsxs)(s.li,{children:["the ",(0,n.jsx)(s.a,{href:"https://github.com/reactwg/react-native-releases/discussions/categories/patches",children:"stable release (for patches)"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Ensures blocking issues have owners","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Escalate to Meta releaser when blocked by Meta-owned dependencies (metro, folly, flipper, hermes, etc)"}),"\n",(0,n.jsx)(s.li,{children:"Find owners, coordinate with Meta releaser for any community library blockers (reanimated, cli, etc.)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Support release decisions","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Help decide when to promote pre-release to stable"}),"\n",(0,n.jsx)(s.li,{children:"Help decide when to release a patch on stable"}),"\n",(0,n.jsx)(s.li,{children:"Help decide which commits are part of which release"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Can perform release (pre-release/stable)","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Merge cherry-picks (as agreed with main releaser)"}),"\n",(0,n.jsx)(s.li,{children:"Create the changelog & release entry in GH"}),"\n",(0,n.jsx)(s.li,{children:"Makes documentation PR and blogpost PR"}),"\n",(0,n.jsx)(s.li,{children:"Trigger the rn-diff-purge script to update upgrade-helper (this is automated for 0.68 onwards)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Coordinates the ",(0,n.jsx)(s.a,{href:"/contributing/release-testing",children:"release testing"})]}),"\n",(0,n.jsx)(s.li,{children:"Runs a release retrospective after a new minor is released"}),"\n",(0,n.jsxs)(s.li,{children:["Responsible for all active releases in the support window during the duration of the role ",(0,n.jsx)(s.a,{href:"https://github.com/reactwg/react-native-releases#which-versions-are-currently-supported",children:"supported versions"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"who-can-fill-it-1",children:"Who can fill it"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This role can be filled by anyone with write access to the necessary repos (react-native)"}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},71426:(e,s,i)=>{var n=i(27378),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,i){var n,t={},c=null,d=null;for(n in void 0!==i&&(c=""+i),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(d=s.ref),s)l.call(s,n)&&!o.hasOwnProperty(n)&&(t[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===t[n]&&(t[n]=s[n]);return{$$typeof:r,type:e,key:c,ref:d,props:t,_owner:a.current}}s.Fragment=t,s.jsx=c,s.jsxs=c},24246:(e,s,i)=>{e.exports=i(71426)},71670:(e,s,i)=>{i.d(s,{Zo:()=>a,ah:()=>t});var n=i(27378);const r=n.createContext({});function t(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function a({components:e,children:s,disableParentContext:i}){let a;return a=i?"function"==typeof e?e({}):e||l:t(e),n.createElement(r.Provider,{value:a},s)}}}]);