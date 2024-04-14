"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[14274,64195],{8465:(e,t,a)=>{a.r(t),a.d(t,{Section:()=>d,default:()=>E});var n=a(27378),o=(a(47604),a(54820)),s=a(51448),r=(a(92676),a(40627)),l=a(69095);const i={newsletter:'\n  <a href="https://flower.bitwebsvc.net/applications/bitnewsletter">Sign up</a> for our newsletter.',intro:"\n  Flower is an online platform that allows users to install applications created by other users and to create their own applications using Generative AI.\n  ",nativeCode:"\nMore than just a platform, Flower is a comprehensive toolkit that seamlessly integrates data modeling, database creation, application development, and quality engineering, positioning itself as the ultimate solution for users seeking streamlined processes.\n  ",codeExample:"\n  \n  ",forEveryone:"\nReact Native lets you create truly native apps and doesn't compromise your users' experiences.\nIt provides a core set of platform agnostic native components like <code>View</code>, <code>Text</code>, and <code>Image</code>\nthat map directly to the platform\u2019s native UI building blocks.\n  ",crossPlatform:"\nReact components wrap existing native code and interact with native APIs via\nReact\u2019s declarative UI paradigm and JavaScript. This enables native app development\nfor whole new teams of developers, and can let existing native teams work much faster.\n  ",fastRefresh:"\n<strong>See your changes as soon as you save.</strong> With the power of JavaScript,\nReact Native lets you iterate at lightning speed. No more waiting for native builds to finish.\nSave, see, repeat.\n  ",talks:"\nMembers of the React Native team frequently speak at various conferences.\n<br/><br/>\nYou can follow the latest news from the React Native team on Twitter\n  "};function c({text:e}){return n.createElement("h2",{className:"Heading"},e)}function m({href:e,type:t="primary",target:a,children:o}){return n.createElement("a",{className:`ActionButton ${t}`,href:e,target:a},o)}function p({title:e,text:t,moreContent:a}){return n.createElement(n.Fragment,null,n.createElement(c,{text:e}),n.createElement("div",{dangerouslySetInnerHTML:{__html:t}}),a)}function h(){return n.createElement(n.Fragment,null,n.createElement(m,{type:"primary",href:(0,s.Z)("products"),target:"_self"},"View Products"),n.createElement(m,{type:"secondary",href:(0,s.Z)("products"),target:"_self"},"Learn more"))}function d({element:e="section",children:t,className:a,background:o="light"}){const s=e;return n.createElement(s,{className:a?`Section ${a} ${o}`:`Section ${o}`},t)}function u({columnOne:e,columnTwo:t,reverse:a}){return n.createElement("div",{className:"TwoColumns "+(a?"reverse":"")},n.createElement("div",{className:"column first "+(a?"right":"left")},e),n.createElement("div",{className:"column last "+(a?"left":"right")},t))}function g(){return n.createElement(d,{background:"dark",className:"HeaderHero"},n.createElement(u,{reverse:!0,columnTwo:n.createElement(n.Fragment,null,n.createElement("h1",{className:"title"},n.createElement("a",{href:"flower"},"Flower")),n.createElement("p",{className:"tagline"},"A ",n.createElement("a",{href:"flower"},"new product")," from Bit redefining Software Product Development."),n.createElement("div",{className:"buttons"},n.createElement(h,null)))}))}function f(){return n.createElement(d,{className:"NativeApps",background:"light"},n.createElement(u,{columnOne:n.createElement(p,{title:"Bit Newsletter",text:i.newsletter}),columnTwo:n.createElement(p,{title:"What is Flower?",text:i.intro})}))}function v(){return n.createElement(d,{className:"NativeCode",background:"tint"},n.createElement(u,{columnOne:n.createElement(p,{title:"Flower - We make building applications easy",text:i.nativeCode}),columnTwo:n.createElement(l.Z,{language:"jsx"},i.codeExample)}))}const E=()=>n.createElement(r.Z,{description:"Reshaping the standards of excellence in software product development",wrapperClassName:"homepage"},n.createElement(o.Z,null,n.createElement("title",null,"Bit"),n.createElement("meta",{property:"og:title",content:"Reshaping the standards of excellence in software product development"})),n.createElement(g,null),n.createElement(f,null),n.createElement(v,null))},27894:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(27378),o=a(51448),s=a(92676),r=a(40627),l=a(91761),i=a(8465),c=a(556);const m=(e,t)=>n.createElement(p,{app:e,key:`app-${e.name}-${t}`}),p=({app:e})=>{const t=(0,o.Z)(e.icon.startsWith("http")?e.icon:"img/showcase/"+e.icon);return n.createElement("div",{className:"showcase"},n.createElement("div",{className:"iconBox"},n.createElement("img",{src:t,alt:e.name,className:"iconBackground"}),n.createElement("img",{src:t,alt:e.name,className:"icon"})),n.createElement("div",{className:"showcaseContent"},n.createElement("div",null,n.createElement("h3",null,e.name),h(e)),e.infoLink&&n.createElement("a",{className:"articleButton",href:e.infoLink,target:"_blank",title:e.infoTitle},"Learn more"," ",n.createElement(c.Z,{width:12,height:12,style:{opacity:.5}}))))},h=e=>{if(!e.linkAppStore&&!e.linkPlayStore&&!e.linkDesktop)return n.createElement("p",null);const t=[e.linkAppStore?n.createElement("a",{key:"ios",href:e.linkAppStore,target:"_blank"},"iOS"):null,e.linkPlayStore?n.createElement("a",{key:"android",href:e.linkPlayStore,target:"_blank"},"Android"):null,e.linkDesktop?n.createElement("a",{key:"desktop",href:e.linkDesktop,target:"_blank"},"Desktop"):null].filter(Boolean).flatMap(((e,t)=>0===t?[e]:[n.createElement("span",{key:t}," \u2022 "),e]));return n.createElement("p",{className:"showcaseLinks"},t)},d=e=>[...e].filter((e=>!e.group)).sort((()=>.5-Math.random())),u=()=>{const{siteConfig:e}=(0,s.Z)(),{meta:t,microsoft:a,shopify:c,wix:p,amazon:h,others:u}=e.customFields.users,[g,f]=(0,n.useState)([]),[v,E]=(0,n.useState)([]);return(0,n.useEffect)((()=>{E(d(u.filter((e=>!e.pinned)))),f(d(u.filter((e=>e.pinned))))}),[]),n.createElement(r.Z,{title:"Showcase",description:"Thousands of apps are using React Native, check out these apps!"},n.createElement(i.Section,{background:"dark"},n.createElement("div",{className:"sectionContainer headerContainer"},n.createElement("h1",null,"Who is using ",n.createElement("span",null,"React Native"),"?"),n.createElement("p",null,"Thousands of apps are using React Native, from established Fortune 500 companies to hot new startups. If you are curious to see what can be accomplished with React Native, check out these apps!"))),n.createElement(i.Section,null,n.createElement("div",{className:"showcaseSection"},n.createElement("h2",{className:"withLogo"},n.createElement(l.Z,{alt:"Meta logo",width:140,sources:{light:(0,o.Z)("/img/meta_positive_primary.svg"),dark:(0,o.Z)("/img/meta_negative_primary.svg")}})),n.createElement("p",{className:"showcaseSectionDescription"},"React Native is shaping mobile, web, and desktop experiences within Meta\u2019s product ecosystem, from Facebook Marketplace, Messenger Desktop, Ads Manager to the Oculus companion app and many more."),n.createElement("div",{className:"logos"},t.map(m))),n.createElement("div",{className:"showcaseSection"},n.createElement("h2",{className:"withLogo"},n.createElement(l.Z,{alt:"Microsoft logo",width:180,sources:{light:(0,o.Z)("/img/microsoft-logo-gray.png"),dark:(0,o.Z)("/img/microsoft-logo-white.png")}})),n.createElement("p",{className:"showcaseSectionDescription"},"Microsoft leverages the power of React Native to deliver excellent customer experiences in some of its most well known apps.",n.createElement("br",null),"Microsoft doesn't stop at mobile platforms either -- Microsoft leverages React Native to target desktop too! Find out more in the"," ",n.createElement("a",{href:"https://microsoft.github.io/react-native-windows/resources-showcase",target:"_blank"},"dedicated showcase")," ","for React Native Windows and macOS."),n.createElement("div",{className:"logos"},a.map(m))),n.createElement("div",{className:"showcaseSection"},n.createElement("h2",{className:"withLogo"},n.createElement(l.Z,{alt:"Amazon logo",width:140,sources:{light:(0,o.Z)("/img/amazon_logo_lightbg.png"),dark:(0,o.Z)("/img/amazon_logo_darkbg.png")}})),n.createElement("p",{className:"showcaseSectionDescription"},"Amazon has used React Native to rapidly deliver new customer-facing features in some of its most popular mobile applications as early as 2016. Amazon also uses React Native to support customer-favorite devices such as the Kindle E-readers."),n.createElement("div",{className:"logos"},h.map(m))),n.createElement("div",{className:"showcaseSection"},n.createElement("h2",{className:"withLogo"},n.createElement(l.Z,{alt:"Shopify logo",width:160,sources:{light:(0,o.Z)("/img/shopify_logo_whitebg.svg"),dark:(0,o.Z)("/img/shopify_logo_darkbg.svg")}})),n.createElement("p",{className:"showcaseSectionDescription"},"All new mobile apps at Shopify are React Native and we are actively migrating our flagship merchant admin app Shopify Mobile to React Native as well. You can read more about React Native development at Shopify on our"," ",n.createElement("a",{href:"https://shopify.engineering/topics/mobile",target:"_blank"},"blog"),"."),n.createElement("div",{className:"logos"},c.map(m))),n.createElement("div",{className:"showcaseSection"},n.createElement("h2",{className:"withLogo"},n.createElement(l.Z,{alt:"Wix logo",width:80,sources:{light:(0,o.Z)("/img/showcase/wix_logo_lightbg.svg"),dark:(0,o.Z)("/img/showcase/wix_logo_darkbg.svg")}})),n.createElement("p",{className:"showcaseSectionDescription"},"With one of the largest React Native code bases in the world, Wix has a long history with the development community and maintains a variety of open source projects. Wix is an early adopter of React Native and uses it for its entire suite of applications."),n.createElement("div",{className:"logos"},p.map(m))),n.createElement("div",{className:"showcaseSection showcaseCustomers"},n.createElement("h2",null,"Users Showcase"),n.createElement("div",{className:"logos"},g.map(m),v.map(m)))),n.createElement(i.Section,{background:"dark"},n.createElement("div",{className:"sectionContainer footerContainer"},n.createElement("a",{className:"formButton",href:"https://forms.gle/BdNf3v5hemV9D5c86",target:"_blank"},"Apply to the Showcase by filling out this form"),n.createElement("p",null,"A curated list of"," ",n.createElement("a",{key:"demo-apps",href:"https://github.com/ReactNativeNews/React-Native-Apps"},"open source React Native apps")," ","is maintained by ",n.createElement("a",{href:"https://infinite.red"},"Infinite Red"),"."))))}}}]);