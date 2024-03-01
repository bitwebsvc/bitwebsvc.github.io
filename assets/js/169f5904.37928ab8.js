/*! For license information please see 169f5904.37928ab8.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[79434],{16145:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=n(24246),s=n(71670);const l={id:"pixelratio",title:"PixelRatio"},a=void 0,r={id:"pixelratio",title:"PixelRatio",description:"PixelRatio gives you access to the device's pixel density and font scale.",source:"@site/versioned_docs/version-0.72/pixelratio.md",sourceDirName:".",slug:"/pixelratio",permalink:"/docs/0.72/pixelratio",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/pixelratio.md",tags:[],version:"0.72",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"pixelratio",title:"PixelRatio"},sidebar:"api",previous:{title:"PanResponder",permalink:"/docs/0.72/panresponder"},next:{title:"Platform",permalink:"/docs/0.72/platform"}},o={},d=[{value:"Fetching a correctly sized image",id:"fetching-a-correctly-sized-image",level:2},{value:"Pixel grid snapping",id:"pixel-grid-snapping",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>get()</code>",id:"get",level:3},{value:"<code>getFontScale()</code>",id:"getfontscale",level:3},{value:"<code>getPixelSizeForLayoutSize()</code>",id:"getpixelsizeforlayoutsize",level:3},{value:"<code>roundToNearestPixel()</code>",id:"roundtonearestpixel",level:3}];function c(e){const i=Object.assign({p:"p",code:"code",h2:"h2",pre:"pre",div:"div",hr:"hr",h1:"h1",h3:"h3",ul:"ul",li:"li",a:"a",strong:"strong"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"PixelRatio"})," gives you access to the device's pixel density and font scale."]}),"\n",(0,t.jsx)(i.h2,{id:"fetching-a-correctly-sized-image",children:"Fetching a correctly sized image"}),"\n",(0,t.jsx)(i.p,{children:"You should get a higher resolution image if you are on a high pixel density device. A good rule of thumb is to multiply the size of the image you display by the pixel ratio."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"const image = getImage({\n  width: PixelRatio.getPixelSizeForLayoutSize(200),\n  height: PixelRatio.getPixelSizeForLayoutSize(100),\n});\n<Image source={image} style={{width: 200, height: 100}} />;\n"})}),"\n",(0,t.jsx)(i.h2,{id:"pixel-grid-snapping",children:"Pixel grid snapping"}),"\n",(0,t.jsx)(i.p,{children:"In iOS, you can specify positions and dimensions for elements with arbitrary precision, for example 29.674825. But, ultimately the physical display only have a fixed number of pixels, for example 640\xd71136 for iPhone SE (1st generation) or 828\xd71792 for iPhone 11. iOS tries to be as faithful as possible to the user value by spreading one original pixel into multiple ones to trick the eye. The downside of this technique is that it makes the resulting element look blurry."}),"\n",(0,t.jsx)(i.p,{children:"In practice, we found out that developers do not want this feature and they have to work around it by doing manual rounding in order to avoid having blurry elements. In React Native, we are rounding all the pixels automatically."}),"\n",(0,t.jsx)(i.p,{children:"We have to be careful when to do this rounding. You never want to work with rounded and unrounded values at the same time as you're going to accumulate rounding errors. Having even one rounding error is deadly because a one pixel border may vanish or be twice as big."}),"\n",(0,t.jsx)(i.p,{children:"In React Native, everything in JavaScript and within the layout engine works with arbitrary precision numbers. It's only when we set the position and dimensions of the native element on the main thread that we round. Also, rounding is done relative to the root rather than the parent, again to avoid accumulating rounding errors."}),"\n",(0,t.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(i.div,{class:"snack-player","data-snack-name":"PixelRatio Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Image%2C%5Cn%20%20PixelRatio%2C%5Cn%20%20ScrollView%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20size%20%3D%2050%3B%5Cnconst%20cat%20%3D%20%7B%5Cn%20%20uri%3A%20'https%3A%2F%2Freactnative.dev%2Fdocs%2Fassets%2Fp_cat1.png'%2C%5Cn%20%20width%3A%20size%2C%5Cn%20%20height%3A%20size%2C%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CScrollView%20style%3D%7Bstyles.scrollContainer%7D%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3ECurrent%20Pixel%20Ratio%20is%3A%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPixelRatio.get()%7D%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3ECurrent%20Font%20Scale%20is%3A%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPixelRatio.getFontScale()%7D%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3EOn%20this%20device%20images%20with%20a%20layout%20width%20of%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7Bsize%7D%20px%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CImage%20source%3D%7Bcat%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3Erequire%20images%20with%20a%20pixel%20width%20of%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%5Cn%20%20%20%20%20%20%20%20%7BPixelRatio.getPixelSizeForLayoutSize(size)%7D%20px%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CImage%5Cn%20%20%20%20%20%20%20%20source%3D%7Bcat%7D%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20width%3A%20PixelRatio.getPixelSizeForLayoutSize(size)%2C%5Cn%20%20%20%20%20%20%20%20%20%20height%3A%20PixelRatio.getPixelSizeForLayoutSize(size)%2C%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%3C%2FScrollView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20scrollContainer%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%7D%2C%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20value%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2024%2C%5Cn%20%20%20%20marginBottom%3A%2012%2C%5Cn%20%20%20%20marginTop%3A%204%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h1,{id:"reference",children:"Reference"}),"\n",(0,t.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(i.h3,{id:"get",children:(0,t.jsx)(i.code,{children:"get()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"static get(): number;\n"})}),"\n",(0,t.jsx)(i.p,{children:"Returns the device pixel density. Some examples:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"PixelRatio.get() === 1"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://material.io/tools/devices/",children:"mdpi Android devices"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"PixelRatio.get() === 1.5"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://material.io/tools/devices/",children:"hdpi Android devices"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"PixelRatio.get() === 2"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"iPhone SE, 6S, 7, 8"}),"\n",(0,t.jsx)(i.li,{children:"iPhone XR"}),"\n",(0,t.jsx)(i.li,{children:"iPhone 11"}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://material.io/tools/devices/",children:"xhdpi Android devices"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"PixelRatio.get() === 3"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"iPhone 6S Plus, 7 Plus, 8 Plus"}),"\n",(0,t.jsx)(i.li,{children:"iPhone X, XS, XS Max"}),"\n",(0,t.jsx)(i.li,{children:"iPhone 11 Pro, 11 Pro Max"}),"\n",(0,t.jsx)(i.li,{children:"Pixel, Pixel 2"}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://material.io/tools/devices/",children:"xxhdpi Android devices"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"PixelRatio.get() === 3.5"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Nexus 6"}),"\n",(0,t.jsx)(i.li,{children:"Pixel XL, Pixel 2 XL"}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://material.io/tools/devices/",children:"xxxhdpi Android devices"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getfontscale",children:(0,t.jsx)(i.code,{children:"getFontScale()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"static getFontScale(): number;\n"})}),"\n",(0,t.jsx)(i.p,{children:"Returns the scaling factor for font sizes. This is the ratio that is used to calculate the absolute font size, so any elements that heavily depend on that should use this to do calculations."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["on Android value reflects the user preference set in ",(0,t.jsx)(i.strong,{children:"Settings > Display > Font size"})]}),"\n",(0,t.jsxs)(i.li,{children:["on iOS value reflects the user preference set in ",(0,t.jsx)(i.strong,{children:"Settings > Display & Brightness > Text Size"}),", value can also be updated in ",(0,t.jsx)(i.strong,{children:"Settings > Accessibility > Display & Text Size > Larger Text"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"If a font scale is not set, this returns the device pixel ratio."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getpixelsizeforlayoutsize",children:(0,t.jsx)(i.code,{children:"getPixelSizeForLayoutSize()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"static getPixelSizeForLayoutSize(layoutSize: number): number;\n"})}),"\n",(0,t.jsx)(i.p,{children:"Converts a layout size (dp) to pixel size (px)."}),"\n",(0,t.jsx)(i.p,{children:"Guaranteed to return an integer number."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"roundtonearestpixel",children:(0,t.jsx)(i.code,{children:"roundToNearestPixel()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"static roundToNearestPixel(layoutSize: number): number;\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Rounds a layout size (dp) to the nearest layout size that corresponds to an integer number of pixels. For example, on a device with a PixelRatio of 3, ",(0,t.jsx)(i.code,{children:"PixelRatio.roundToNearestPixel(8.4) = 8.33"}),", which corresponds to exactly (8.33 * 3) = 25 pixels."]})]})}const h=function(e={}){const{wrapper:i}=Object.assign({},(0,s.ah)(),e.components);return i?(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},71426:(e,i,n)=>{var t=n(27378),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,i,n){var t,l={},d=null,c=null;for(t in void 0!==n&&(d=""+n),void 0!==i.key&&(d=""+i.key),void 0!==i.ref&&(c=i.ref),i)a.call(i,t)&&!o.hasOwnProperty(t)&&(l[t]=i[t]);if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===l[t]&&(l[t]=i[t]);return{$$typeof:s,type:e,key:d,ref:c,props:l,_owner:r.current}}i.Fragment=l,i.jsx=d,i.jsxs=d},24246:(e,i,n)=>{e.exports=n(71426)},71670:(e,i,n)=>{n.d(i,{Zo:()=>r,ah:()=>l});var t=n(27378);const s=t.createContext({});function l(e){const i=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const a={};function r({components:e,children:i,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||a:l(e),t.createElement(s.Provider,{value:r},i)}}}]);