/*! For license information please see 7223e43b.90013a13.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[43605],{37386:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=s(24246),r=s(71670),a=s(23191);const o={id:"javascript-environment",title:"JavaScript Environment"},i=void 0,c={id:"javascript-environment",title:"JavaScript Environment",description:"JavaScript Runtime",source:"@site/versioned_docs/version-0.73/javascript-environment.md",sourceDirName:".",slug:"/javascript-environment",permalink:"/docs/javascript-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/javascript-environment.md",tags:[],version:"0.73",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"javascript-environment",title:"JavaScript Environment"},sidebar:"docs",previous:{title:"Profiling with Hermes",permalink:"/docs/profile-hermes"},next:{title:"Timers",permalink:"/docs/timers"}},l={},d=[{value:"JavaScript Runtime",id:"javascript-runtime",level:2},{value:"JavaScript Syntax Transformers",id:"javascript-syntax-transformers",level:2},{value:"Polyfills",id:"polyfills",level:2},{value:"Browser",id:"browser",level:4},{value:"ECMAScript 2015 (ES6)",id:"ecmascript-2015-es6",level:4},{value:"ECMAScript 2016 (ES7)",id:"ecmascript-2016-es7",level:4},{value:"ECMAScript 2017 (ES8)",id:"ecmascript-2017-es8",level:4},{value:"Specific",id:"specific",level:4}];function p(e){const t=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",h4:"h4",code:"code"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"javascript-runtime",children:"JavaScript Runtime"}),"\n",(0,n.jsx)(t.p,{children:"When using React Native, you're going to be running your JavaScript code in up to three environments:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["In most cases, React Native will use ",(0,n.jsx)(t.a,{href:"hermes",children:"Hermes"}),", an open-source JavaScript engine optimized for React Native."]}),"\n",(0,n.jsxs)(t.li,{children:["If Hermes is disabled, React Native will use ",(0,n.jsx)(t.a,{href:"https://trac.webkit.org/wiki/JavaScriptCore",children:"JavaScriptCore"}),", the JavaScript engine that powers Safari. Note that on iOS, JavaScriptCore does not use JIT due to the absence of writable executable memory in iOS apps."]}),"\n",(0,n.jsxs)(t.li,{children:["When using Chrome debugging, all JavaScript code runs within Chrome itself, communicating with native code via WebSockets. Chrome uses ",(0,n.jsx)(t.a,{href:"https://v8.dev/",children:"V8"})," as its JavaScript engine."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"While these environments are very similar, you may end up hitting some inconsistencies. It is best to avoid relying on specifics of any runtime."}),"\n",(0,n.jsx)(t.h2,{id:"javascript-syntax-transformers",children:"JavaScript Syntax Transformers"}),"\n",(0,n.jsx)(t.p,{children:"Syntax transformers make writing code more enjoyable by allowing you to use new JavaScript syntax without having to wait for support on all interpreters."}),"\n",(0,n.jsxs)(t.p,{children:["React Native ships with the ",(0,n.jsx)(t.a,{href:"https://babeljs.io",children:"Babel JavaScript compiler"}),". Check ",(0,n.jsx)(t.a,{href:"https://babeljs.io/docs/plugins/#transform-plugins",children:"Babel documentation"})," on its supported transformations for more details."]}),"\n",(0,n.jsxs)(t.p,{children:["A full list of React Native's enabled transformations can be found in ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/tree/main/packages/react-native-babel-preset",children:"@react-native/babel-preset"}),"."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Transformation"}),(0,n.jsx)("th",{children:"Code"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"table-heading",colSpan:"2",children:"ECMAScript 5"})}),(0,n.jsx)(a.Z,{name:"Reserved Words",code:"promise.catch(function() {...});"}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"table-heading",colSpan:"2",children:"ECMAScript 2015 (ES6)"})}),(0,n.jsx)(a.Z,{name:"Arrow functions",code:"<C onPress={() => this.setState({pressed: true})} />",url:"https://babeljs.io/docs/learn-es2015/#arrows"}),(0,n.jsx)(a.Z,{name:"Block scoping",code:"let greeting = 'hi';",url:"https://babeljs.io/docs/learn-es2015/#let-const"}),(0,n.jsx)(a.Z,{name:"Call spread",code:"Math.max(...array);",url:"https://babeljs.io/docs/learn-es2015/#default-rest-spread"}),(0,n.jsx)(a.Z,{name:"Classes",code:"class C extends React.Component {render() { return <View />; }}",url:"https://babeljs.io/docs/learn-es2015/#classes"}),(0,n.jsx)(a.Z,{name:"Computed Properties",code:"const key = 'abc'; const obj = {[key]: 10};",url:"https://babeljs.io/docs/learn-es2015/#enhanced-object-literals"}),(0,n.jsx)(a.Z,{name:"Constants",code:"const answer = 42;",url:"https://babeljs.io/docs/learn-es2015/#let-const"}),(0,n.jsx)(a.Z,{name:"Destructuring",code:"const {isActive, style} = this.props;",url:"https://babeljs.io/docs/learn-es2015/#destructuring"}),(0,n.jsx)(a.Z,{name:"for\u2026of",code:"for (var num of [1, 2, 3]) {...};",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of"}),(0,n.jsx)(a.Z,{name:"Function Name",code:"let number = x => x;",url:"https://babeljs.io/docs/en/babel-plugin-transform-function-name"}),(0,n.jsx)(a.Z,{name:"Literals",code:"const b = 0b11; const o = 0o7; const u = 'Hello\\u{000A}\\u{0009}!';",url:"https://babeljs.io/docs/en/babel-plugin-transform-literals"}),(0,n.jsx)(a.Z,{name:"Modules",code:"import React, {Component} from 'react';",url:"https://babeljs.io/docs/learn-es2015/#modules"}),(0,n.jsx)(a.Z,{name:"Object Concise Method",code:"const obj = {method() { return 10; }};",url:"https://babeljs.io/docs/learn-es2015/#enhanced-object-literals"}),(0,n.jsx)(a.Z,{name:"Object Short Notation",code:"const name = 'vjeux'; const obj = {name};",url:"https://babeljs.io/docs/learn-es2015/#enhanced-object-literals"}),(0,n.jsx)(a.Z,{name:"Parameters",code:"function test(x = 'hello', {a, b}, ...args) {}",url:"https://babeljs.io/docs/en/babel-plugin-transform-parameters"}),(0,n.jsx)(a.Z,{name:"Rest Params",code:"function(type, ...args) {};",url:"https://github.com/sebmarkbage/ecmascript-rest-spread"}),(0,n.jsx)(a.Z,{name:"Shorthand Properties",code:"const o = {a, b, c};",url:"https://babeljs.io/docs/en/babel-plugin-transform-shorthand-properties"}),(0,n.jsx)(a.Z,{name:"Sticky Regex",code:"const a = /o+/y;",url:"https://babeljs.io/docs/en/babel-plugin-transform-sticky-regex"}),(0,n.jsx)(a.Z,{name:"Template Literals",code:"const who = 'world'; const str = `Hello ${who}`;",url:"https://babeljs.io/docs/learn-es2015/#template-strings"}),(0,n.jsx)(a.Z,{name:"Unicode Regex",code:"const string = 'foo\ud83d\udca9bar'; const match = string.match(/foo(.)bar/u);",url:"https://babeljs.io/docs/en/babel-plugin-transform-unicode-regex"}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"table-heading",colSpan:"2",children:"ECMAScript 2016 (ES7)"})}),(0,n.jsx)(a.Z,{name:"Exponentiation Operator",code:"let x = 10 ** 2;",url:"https://babeljs.io/docs/en/babel-plugin-transform-exponentiation-operator"}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"table-heading",colSpan:"2",children:"ECMAScript 2017 (ES8)"})}),(0,n.jsx)(a.Z,{name:"Async Functions",code:"async function doStuffAsync() {const foo = await doOtherStuffAsync();};",url:"https://github.com/tc39/ecmascript-asyncawait"}),(0,n.jsx)(a.Z,{name:"Function Trailing Comma",code:"function f(a, b, c,) {};",url:"https://github.com/jeffmo/es-trailing-function-commas"}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"table-heading",colSpan:"2",children:"ECMAScript 2018 (ES9)"})}),(0,n.jsx)(a.Z,{name:"Object Spread",code:"const extended = {...obj, a: 10};",url:"https://github.com/tc39/proposal-object-rest-spread"}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"table-heading",colSpan:"2",children:"ECMAScript 2019 (ES10)"})}),(0,n.jsx)(a.Z,{name:"Optional Catch Binding",code:"try {throw 0; } catch { doSomethingWhichDoesNotCareAboutTheValueThrown();}",url:"https://babeljs.io/docs/en/babel-plugin-proposal-optional-catch-binding"}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"table-heading",colSpan:"2",children:"ECMAScript 2020 (ES11)"})}),(0,n.jsx)(a.Z,{name:"Dynamic Imports",code:"const package = await import('package'); package.function()",url:"https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import"}),(0,n.jsx)(a.Z,{name:"Nullish Coalescing Operator",code:"const foo = object.foo ?? 'default';",url:"https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator"}),(0,n.jsx)(a.Z,{name:"Optional Chaining",code:"const name = obj.user?.name;",url:"https://github.com/tc39/proposal-optional-chaining"}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"table-heading",colSpan:"2",children:"ECMAScript 2022 (ES13)"})}),(0,n.jsx)(a.Z,{name:"Class Fields",code:"class Bork {static a = 'foo'; static b; x = 'bar'; y;}",url:"https://babeljs.io/docs/en/babel-plugin-proposal-class-properties"}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"table-heading",colSpan:"2",children:"Stage 1 Proposal"})}),(0,n.jsx)(a.Z,{name:"Export Default From",code:"export v from 'mod';",url:"https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from"}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"table-heading",colSpan:"2",children:"Miscellaneous"})}),(0,n.jsx)(a.Z,{name:"Babel Template",code:"template(`const %%importName%% = require(%%source%%);`);",url:"https://babeljs.io/docs/en/babel-template"}),(0,n.jsx)(a.Z,{name:"Flow",code:"function foo(x: ?number): string {};",url:"https://flowtype.org/"}),(0,n.jsx)(a.Z,{name:"ESM to CJS",code:"export default 42;",url:"https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs"}),(0,n.jsx)(a.Z,{name:"JSX",code:"<View style={{color: 'red'}} />",url:"https://reactjs.org/docs/jsx-in-depth"}),(0,n.jsx)(a.Z,{name:"Object Assign",code:"Object.assign(a, b);",url:"https://babeljs.io/docs/en/babel-plugin-transform-object-assign"}),(0,n.jsx)(a.Z,{name:"React Display Name",code:"const bar = createReactClass({});",url:"https://babeljs.io/docs/en/babel-plugin-transform-react-display-name"}),(0,n.jsx)(a.Z,{name:"TypeScript",code:"function foo(x: {hello: true, target: 'react native!'}): string {};",url:"https://www.typescriptlang.org/"})]})]}),"\n",(0,n.jsx)(t.h2,{id:"polyfills",children:"Polyfills"}),"\n",(0,n.jsx)(t.p,{children:"Many standard functions are also available on all the supported JavaScript runtimes."}),"\n",(0,n.jsx)(t.h4,{id:"browser",children:"Browser"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsxs)(t.a,{href:"https://nodejs.org/docs/latest/api/modules.html",children:["CommonJS ",(0,n.jsx)(t.code,{children:"require"})]})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"md [console.{log, warn, error, info, trace, table, group, groupEnd}](https://developer.chrome.com/devtools/docs/console-api)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsxs)(t.a,{href:"/docs/network#content",children:[(0,n.jsx)(t.code,{children:"XMLHttpRequest"}),", ",(0,n.jsx)(t.code,{children:"fetch"})]})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/timers#content",children:(0,n.jsx)(t.code,{children:"{set, clear}{Timeout, Interval, Immediate}, {request, cancel}AnimationFrame"})})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"ecmascript-2015-es6",children:"ECMAScript 2015 (ES6)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from",children:(0,n.jsx)(t.code,{children:"Array.from"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"md Array.prototype.{[find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)}"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",children:(0,n.jsx)(t.code,{children:"Object.assign"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"md String.prototype.{[startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat), [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)}"})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"ecmascript-2016-es7",children:"ECMAScript 2016 (ES7)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"md Array.prototype.[includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)"})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"ecmascript-2017-es8",children:"ECMAScript 2017 (ES8)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"md Object.{[entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries), [values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)}"})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"specific",children:"Specific"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"__DEV__"})}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(p,e)})):p(e)}},23191:(e,t,s)=>{s.d(t,{Z:()=>a});var n=s(27378),r=s(69095);const a=({name:e,url:t,code:s})=>n.createElement("tr",null,n.createElement("td",null,t?n.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},e):e),n.createElement("td",null,n.createElement(r.Z,null,s)))},71426:(e,t,s)=>{var n=s(27378),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var n,a={},l=null,d=null;for(n in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:r,type:e,key:l,ref:d,props:a,_owner:i.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},24246:(e,t,s)=>{e.exports=s(71426)},71670:(e,t,s)=>{s.d(t,{Zo:()=>i,ah:()=>a});var n=s(27378);const r=n.createContext({});function a(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||o:a(e),n.createElement(r.Provider,{value:i},t)}}}]);