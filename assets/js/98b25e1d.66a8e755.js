/*! For license information please see 98b25e1d.66a8e755.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[41437],{79434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(24246),o=t(71670);const a={id:"custom-webview-ios",title:"Custom WebView"},s=void 0,r={id:"custom-webview-ios",title:"Custom WebView",description:"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code.",source:"@site/versioned_docs/version-0.73/custom-webview-ios.md",sourceDirName:".",slug:"/custom-webview-ios",permalink:"/docs/custom-webview-ios",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/custom-webview-ios.md",tags:[],version:"0.73",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"custom-webview-ios",title:"Custom WebView"}},l={},c=[{value:"Native Code",id:"native-code",level:2},{value:"Adding New Events and Properties",id:"adding-new-events-and-properties",level:3},{value:"Extending Existing Events",id:"extending-existing-events",level:3},{value:"JavaScript Interface",id:"javascript-interface",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code."}),"\n",(0,i.jsxs)(n.p,{children:["Before you do this, you should be familiar with the concepts in ",(0,i.jsx)(n.a,{href:"native-components-ios",children:"native UI components"}),". You should also familiarise yourself with the ",(0,i.jsx)(n.a,{href:"https://github.com/react-native-webview/react-native-webview/blob/master/apple/RNCWebViewManager.mm",children:"native code for web views"}),", as you will have to use this as a reference when implementing new features\u2014although a deep understanding is not required."]}),"\n",(0,i.jsx)(n.h2,{id:"native-code",children:"Native Code"}),"\n",(0,i.jsx)(n.p,{children:"Like for regular native components, you need a view manager and an web view."}),"\n",(0,i.jsxs)(n.p,{children:["For the view, you'll need to make a subclass of ",(0,i.jsx)(n.code,{children:"RCTWebView"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objc",children:'// RCTCustomWebView.h\n#import <React/RCTWebView.h>\n\n@interface RCTCustomWebView : RCTWebView\n\n@end\n\n// RCTCustomWebView.m\n#import "RCTCustomWebView.h"\n\n@interface RCTCustomWebView ()\n\n@end\n\n@implementation RCTCustomWebView { }\n\n@end\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For the view manager, you need to make a subclass ",(0,i.jsx)(n.code,{children:"RCTWebViewManager"}),". You must still include:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"(UIView *)view"})," that returns your custom view"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"RCT_EXPORT_MODULE()"})," tag"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objc",children:'// RCTCustomWebViewManager.h\n#import <React/RCTWebViewManager.h>\n\n@interface RCTCustomWebViewManager : RCTWebViewManager\n\n@end\n\n// RCTCustomWebViewManager.m\n#import "RCTCustomWebViewManager.h"\n#import "RCTCustomWebView.h"\n\n@interface RCTCustomWebViewManager () <RCTWebViewDelegate>\n\n@end\n\n@implementation RCTCustomWebViewManager { }\n\nRCT_EXPORT_MODULE()\n\n- (UIView *)view\n{\n  RCTCustomWebView *webView = [RCTCustomWebView new];\n  webView.delegate = self;\n  return webView;\n}\n\n@end\n'})}),"\n",(0,i.jsx)(n.h3,{id:"adding-new-events-and-properties",children:"Adding New Events and Properties"}),"\n",(0,i.jsxs)(n.p,{children:["Adding new properties and events is the same as regular UI components. For properties, you define an ",(0,i.jsx)(n.code,{children:"@property"})," in the header. For events, you define a ",(0,i.jsx)(n.code,{children:"RCTDirectEventBlock"})," in the view's ",(0,i.jsx)(n.code,{children:"@interface"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objc",children:"// RCTCustomWebView.h\n@property (nonatomic, copy) NSString *finalUrl;\n\n// RCTCustomWebView.m\n@interface RCTCustomWebView ()\n\n@property (nonatomic, copy) RCTDirectEventBlock onNavigationCompleted;\n\n@end\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then expose it in the view manager's ",(0,i.jsx)(n.code,{children:"@implementation"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objc",children:"// RCTCustomWebViewManager.m\nRCT_EXPORT_VIEW_PROPERTY(onNavigationCompleted, RCTDirectEventBlock)\nRCT_EXPORT_VIEW_PROPERTY(finalUrl, NSString)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"extending-existing-events",children:"Extending Existing Events"}),"\n",(0,i.jsxs)(n.p,{children:["You should refer to ",(0,i.jsx)(n.a,{href:"https://github.com/react-native-webview/react-native-webview/blob/master/apple/RNCWebView.mm",children:"RCTWebView.mm"})," in the React Native WebView codebase to see what handlers are available and how they are implemented. You can extend any methods here to provide extra functionality."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, most methods aren't exposed from RCTWebView. If you need to expose them, you need to create an ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/CustomizingExistingClasses/CustomizingExistingClasses.html",children:"Objective C category"}),", and then expose all the methods you need to use."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objc",children:"// RCTWebView+Custom.h\n#import <React/RCTWebView.h>\n\n@interface RCTWebView (Custom)\n- (BOOL)webView:(__unused UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType;\n- (NSMutableDictionary<NSString *, id> *)baseEvent;\n@end\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once these are exposed, you can reference them in your custom web view class."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objc",children:'// RCTCustomWebView.m\n\n// Remember to import the category file.\n#import "RCTWebView+Custom.h"\n\n- (BOOL)webView:(__unused UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request\n navigationType:(UIWebViewNavigationType)navigationType\n{\n  BOOL allowed = [super webView:webView shouldStartLoadWithRequest:request navigationType:navigationType];\n\n  if (allowed) {\n    NSString* url = request.URL.absoluteString;\n    if (url && [url isEqualToString:_finalUrl]) {\n      if (_onNavigationCompleted) {\n        NSMutableDictionary<NSString *, id> *event = [self baseEvent];\n        _onNavigationCompleted(event);\n      }\n    }\n  }\n\n  return allowed;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"javascript-interface",children:"JavaScript Interface"}),"\n",(0,i.jsx)(n.p,{children:"To use your custom web view, you'll need to create a class for it. Your class must:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Export all the prop types from ",(0,i.jsx)(n.code,{children:"WebView.propTypes"})]}),"\n",(0,i.jsxs)(n.li,{children:["Return a ",(0,i.jsx)(n.code,{children:"WebView"})," component with the prop ",(0,i.jsx)(n.code,{children:"nativeConfig.component"})," set to your native component (see below)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To get your native component, you must use ",(0,i.jsx)(n.code,{children:"requireNativeComponent"}),": the same as for regular custom components. However, you must pass in an extra third argument, ",(0,i.jsx)(n.code,{children:"WebView.extraNativeComponentConfig"}),". This third argument contains prop types that are only required for native code."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import React, {Component, PropTypes} from 'react';\nimport {\n  WebView,\n  requireNativeComponent,\n  NativeModules,\n} from 'react-native';\nconst {CustomWebViewManager} = NativeModules;\n\nexport default class CustomWebView extends Component {\n  static propTypes = WebView.propTypes;\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{\n          component: RCTCustomWebView,\n          viewManager: CustomWebViewManager,\n        }}\n      />\n    );\n  }\n}\n\nconst RCTCustomWebView = requireNativeComponent(\n  'RCTCustomWebView',\n  CustomWebView,\n  WebView.extraNativeComponentConfig,\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to add custom props to your native component, you can use ",(0,i.jsx)(n.code,{children:"nativeConfig.props"})," on the web view. For iOS, you should also set the ",(0,i.jsx)(n.code,{children:"nativeConfig.viewManager"})," prop with your custom WebView ViewManager as in the example above."]}),"\n",(0,i.jsxs)(n.p,{children:["For events, the event handler must always be set to a function. This means it isn't safe to use the event handler directly from ",(0,i.jsx)(n.code,{children:"this.props"}),", as the user might not have provided one. The standard approach is to create a event handler in your class, and then invoking the event handler given in ",(0,i.jsx)(n.code,{children:"this.props"})," if it exists."]}),"\n",(0,i.jsxs)(n.p,{children:["If you are unsure how something should be implemented from the JS side, look at ",(0,i.jsx)(n.a,{href:"https://github.com/react-native-webview/react-native-webview/blob/master/src/WebView.ios.tsx",children:"WebView.ios.tsx"})," in the React Native source."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"export default class CustomWebView extends Component {\n  static propTypes = {\n    ...WebView.propTypes,\n    finalUrl: PropTypes.string,\n    onNavigationCompleted: PropTypes.func,\n  };\n\n  static defaultProps = {\n    finalUrl: 'about:blank',\n  };\n\n  _onNavigationCompleted = event => {\n    const {onNavigationCompleted} = this.props;\n    onNavigationCompleted && onNavigationCompleted(event);\n  };\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{\n          component: RCTCustomWebView,\n          props: {\n            finalUrl: this.props.finalUrl,\n            onNavigationCompleted: this._onNavigationCompleted,\n          },\n          viewManager: CustomWebViewManager,\n        }}\n      />\n    );\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Similar to regular native components, you must provide all your prop types in the component to have them forwarded on to the native component. However, if you have some prop types that are only used internally in component, you can add them to the ",(0,i.jsx)(n.code,{children:"nativeOnly"})," property of the third argument previously mentioned. For event handlers, you have to use the value ",(0,i.jsx)(n.code,{children:"true"})," instead of a regular prop type."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you wanted to add an internal event handler called ",(0,i.jsx)(n.code,{children:"onScrollToBottom"}),", you would use,"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const RCTCustomWebView = requireNativeComponent(\n  'RCTCustomWebView',\n  CustomWebView,\n  {\n    ...WebView.extraNativeComponentConfig,\n    nativeOnly: {\n      ...WebView.extraNativeComponentConfig.nativeOnly,\n      onScrollToBottom: true,\n    },\n  },\n);\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},71426:(e,n,t)=>{var i=t(27378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,a={},c=null,d=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,i)&&!l.hasOwnProperty(i)&&(a[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===a[i]&&(a[i]=n[i]);return{$$typeof:o,type:e,key:c,ref:d,props:a,_owner:r.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>a});var i=t(27378);const o=i.createContext({});function a(e){const n=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||s:a(e),i.createElement(o.Provider,{value:r},n)}}}]);