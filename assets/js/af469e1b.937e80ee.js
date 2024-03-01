/*! For license information please see af469e1b.937e80ee.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[33128],{17329:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>n,toc:()=>h});var i=d(24246),s=d(71670);const t={id:"slider",title:"\ud83d\udea7 Slider"},l=void 0,n={id:"slider",title:"\ud83d\udea7 Slider",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.71/slider.md",sourceDirName:".",slug:"/slider",permalink:"/docs/0.71/slider",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/slider.md",tags:[],version:"0.71",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"slider",title:"\ud83d\udea7 Slider"}},c={},h=[{value:"Props",id:"props",level:2},{value:"<code>style</code>",id:"style",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:"<code>maximumValue</code>",id:"maximumvalue",level:3},{value:"<code>minimumTrackTintColor</code>",id:"minimumtracktintcolor",level:3},{value:"<code>minimumValue</code>",id:"minimumvalue",level:3},{value:"<code>onSlidingComplete</code>",id:"onslidingcomplete",level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",level:3},{value:"<code>step</code>",id:"step",level:3},{value:"<code>maximumTrackTintColor</code>",id:"maximumtracktintcolor",level:3},{value:"<code>testID</code>",id:"testid",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>thumbTintColor</code>",id:"thumbtintcolor",level:3},{value:"<code>maximumTrackImage</code>",id:"maximumtrackimage",level:3},{value:"<code>minimumTrackImage</code>",id:"minimumtrackimage",level:3},{value:"<code>thumbImage</code>",id:"thumbimage",level:3},{value:"<code>trackImage</code>",id:"trackimage",level:3}];function o(e){const r=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",hr:"hr",h1:"h1",h2:"h2",h3:"h3",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Deprecated."})," Use one of the ",(0,i.jsx)(r.a,{href:"https://reactnative.directory/?search=slider",children:"community packages"})," instead."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"A component used to select a single value from a range of values."}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h1,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(r.p,{children:["Inherits ",(0,i.jsx)(r.a,{href:"/docs/0.71/view#props",children:"View Props"}),"."]}),"\n",(0,i.jsx)(r.h3,{id:"style",children:(0,i.jsx)(r.code,{children:"style"})}),"\n",(0,i.jsxs)(r.p,{children:["Used to style and layout the ",(0,i.jsx)(r.code,{children:"Slider"}),". See ",(0,i.jsx)(r.code,{children:"StyleSheet.js"})," and ",(0,i.jsx)(r.code,{children:"ViewStylePropTypes.js"})," for more info."]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"View.style"}),(0,i.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"disabled",children:(0,i.jsx)(r.code,{children:"disabled"})}),"\n",(0,i.jsx)(r.p,{children:"If true the user won't be able to move the slider. Default value is false."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"bool"}),(0,i.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"maximumvalue",children:(0,i.jsx)(r.code,{children:"maximumValue"})}),"\n",(0,i.jsx)(r.p,{children:"Initial maximum value of the slider. Default value is 1."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"number"}),(0,i.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"minimumtracktintcolor",children:(0,i.jsx)(r.code,{children:"minimumTrackTintColor"})}),"\n",(0,i.jsx)(r.p,{children:"The color used for the track to the left of the button. Overrides the default blue gradient image on iOS."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/0.71/colors",children:"color"})}),(0,i.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"minimumvalue",children:(0,i.jsx)(r.code,{children:"minimumValue"})}),"\n",(0,i.jsx)(r.p,{children:"Initial minimum value of the slider. Default value is 0."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"number"}),(0,i.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"onslidingcomplete",children:(0,i.jsx)(r.code,{children:"onSlidingComplete"})}),"\n",(0,i.jsx)(r.p,{children:"Callback that is called when the user releases the slider, regardless if the value has changed. The current value is passed as an argument to the callback handler."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"function"}),(0,i.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"onvaluechange",children:(0,i.jsx)(r.code,{children:"onValueChange"})}),"\n",(0,i.jsx)(r.p,{children:"Callback continuously called while the user is dragging the slider."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"function"}),(0,i.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"step",children:(0,i.jsx)(r.code,{children:"step"})}),"\n",(0,i.jsx)(r.p,{children:"Step value of the slider. The value should be between 0 and (maximumValue - minimumValue). Default value is 0."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"number"}),(0,i.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"maximumtracktintcolor",children:(0,i.jsx)(r.code,{children:"maximumTrackTintColor"})}),"\n",(0,i.jsx)(r.p,{children:"The color used for the track to the right of the button. Overrides the default gray gradient image on iOS."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/0.71/colors",children:"color"})}),(0,i.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"testid",children:(0,i.jsx)(r.code,{children:"testID"})}),"\n",(0,i.jsx)(r.p,{children:"Used to locate this view in UI automation tests."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"value",children:(0,i.jsx)(r.code,{children:"value"})}),"\n",(0,i.jsx)(r.p,{children:"Initial value of the slider. The value should be between minimumValue and maximumValue, which default to 0 and 1 respectively. Default value is 0."}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"This is not a controlled component"}),", you don't need to update the value during dragging."]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"number"}),(0,i.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"thumbtintcolor",children:(0,i.jsx)(r.code,{children:"thumbTintColor"})}),"\n",(0,i.jsx)(r.p,{children:"The color used to tint the default thumb images on iOS, or the color of the foreground switch grip on Android."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/0.71/colors",children:"color"})}),(0,i.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"maximumtrackimage",children:(0,i.jsx)(r.code,{children:"maximumTrackImage"})}),"\n",(0,i.jsx)(r.p,{children:"Assigns a maximum track image. Only static images are supported. The leftmost pixel of the image will be stretched to fill the track."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"}),(0,i.jsx)(r.th,{children:"Platform"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Image.propTypes.source"}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsx)(r.td,{children:"iOS"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"minimumtrackimage",children:(0,i.jsx)(r.code,{children:"minimumTrackImage"})}),"\n",(0,i.jsx)(r.p,{children:"Assigns a minimum track image. Only static images are supported. The rightmost pixel of the image will be stretched to fill the track."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"}),(0,i.jsx)(r.th,{children:"Platform"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Image.propTypes.source"}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsx)(r.td,{children:"iOS"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"thumbimage",children:(0,i.jsx)(r.code,{children:"thumbImage"})}),"\n",(0,i.jsx)(r.p,{children:"Sets an image for the thumb. Only static images are supported."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"}),(0,i.jsx)(r.th,{children:"Platform"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Image.propTypes.source"}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsx)(r.td,{children:"iOS"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"trackimage",children:(0,i.jsx)(r.code,{children:"trackImage"})}),"\n",(0,i.jsx)(r.p,{children:"Assigns a single image for the track. Only static images are supported. The center pixel of the image will be stretched to fill the track."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required"}),(0,i.jsx)(r.th,{children:"Platform"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Image.propTypes.source"}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsx)(r.td,{children:"iOS"})]})})]})]})}const a=function(e={}){const{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},71426:(e,r,d)=>{var i=d(27378),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,n=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,d){var i,t={},h=null,o=null;for(i in void 0!==d&&(h=""+d),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(o=r.ref),r)l.call(r,i)&&!c.hasOwnProperty(i)&&(t[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===t[i]&&(t[i]=r[i]);return{$$typeof:s,type:e,key:h,ref:o,props:t,_owner:n.current}}r.Fragment=t,r.jsx=h,r.jsxs=h},24246:(e,r,d)=>{e.exports=d(71426)},71670:(e,r,d)=>{d.d(r,{Zo:()=>n,ah:()=>t});var i=d(27378);const s=i.createContext({});function t(e){const r=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const l={};function n({components:e,children:r,disableParentContext:d}){let n;return n=d?"function"==typeof e?e({}):e||l:t(e),i.createElement(s.Provider,{value:n},r)}}}]);