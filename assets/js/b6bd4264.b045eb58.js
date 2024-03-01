/*! For license information please see b6bd4264.b045eb58.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4802],{3983:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=t(24246),r=t(71670),i=t(48375),o=t(86386),l=t(11674);const s={id:"custom-webview-android",title:"Custom WebView"},u=void 0,c={id:"custom-webview-android",title:"Custom WebView",description:"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code.",source:"@site/versioned_docs/version-0.72/custom-webview-android.md",sourceDirName:".",slug:"/custom-webview-android",permalink:"/docs/0.72/custom-webview-android",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/custom-webview-android.md",tags:[],version:"0.72",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"custom-webview-android",title:"Custom WebView"}},d={},p=[{value:"Native Code",id:"native-code",level:2},{value:"Adding New Properties",id:"adding-new-properties",level:3},{value:"Adding New Events",id:"adding-new-events",level:3},{value:"JavaScript Interface",id:"javascript-interface",level:2}];function v(e){const n=Object.assign({p:"p",admonition:"admonition",a:"a",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre",h3:"h3"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["The React Native WebView component has been extracted to ",(0,a.jsx)(n.a,{href:"https://github.com/react-native-webview/react-native-webview",children:(0,a.jsx)(n.code,{children:"react-native-webview"})})," package as part of the ",(0,a.jsx)(n.a,{href:"https://github.com/facebook/react-native/issues/23313",children:"Lean Core effort"}),".\nThat is the recommended way to use WebView in React Native as of today. You should not use the ",(0,a.jsx)(n.a,{href:"https://reactnative-archive-august-2023.netlify.app/docs/0.61/webview",children:"WebView"})," component as that was deprecated and removed from React Native."]})}),"\n",(0,a.jsxs)(n.p,{children:["Before you do this, you should be familiar with the concepts in ",(0,a.jsx)(n.a,{href:"native-components-android",children:"native UI components"}),". You should also familiarise yourself with the ",(0,a.jsx)(n.a,{href:"https://github.com/react-native-webview/react-native-webview/blob/master/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt",children:"native code for web views"}),", as you will have to use this as a reference when implementing new features\u2014although a deep understanding is not required."]}),"\n",(0,a.jsx)(n.h2,{id:"native-code",children:"Native Code"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["This example assumes you already have ",(0,a.jsx)(n.a,{href:"https://github.com/react-native-webview/react-native-webview",children:(0,a.jsx)(n.code,{children:"react-native-webview"})})," installed, if not please follow their ",(0,a.jsx)(n.a,{href:"https://github.com/react-native-webview/react-native-webview/blob/master/docs/Getting-Started.md",children:"Getting Started guide"})," first."]})}),"\n",(0,a.jsxs)(n.p,{children:["To get started, you'll need to create a subclass of ",(0,a.jsx)(n.code,{children:"RNCWebViewManager"}),", ",(0,a.jsx)(n.code,{children:"RNCWebView"}),", and ",(0,a.jsx)(n.code,{children:"RNCWebViewClient"}),". In your view manager, you'll then need to override:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"createRNCWebViewInstance"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"getName"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"addEventEmitters"})}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,a.jsx)(o.Z,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@ReactModule(name = CustomWebViewManager.REACT_CLASS)\npublic class CustomWebViewManager extends RNCWebViewManager {\n  /* This name must match what we\'re referring to in JS */\n  protected static final String REACT_CLASS = "RCTCustomWebView";\n\n  protected static class CustomWebViewClient extends RNCWebViewClient { }\n\n  protected static class CustomWebView extends RNCWebView {\n    public CustomWebView(ThemedReactContext reactContext) {\n      super(reactContext);\n    }\n  }\n\n  @Override\n  protected RNCWebView createRNCWebViewInstance(ThemedReactContext reactContext) {\n    return new CustomWebView(reactContext);\n  }\n\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n\n  @Override\n  protected void addEventEmitters(ThemedReactContext reactContext, WebView view) {\n    view.setWebViewClient(new CustomWebViewClient());\n  }\n}\n'})})}),(0,a.jsx)(o.Z,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'@ReactModule(name = CustomWebViewManager.REACT_CLASS)\nclass CustomWebViewManager : RNCWebViewManager() {\n    protected class CustomWebViewClient : RNCWebViewClient()\n    protected inner class CustomWebView(reactContext: ThemedReactContext?) :\n        RNCWebView(reactContext)\n\n    override fun createRNCWebViewInstance(reactContext: ThemedReactContext?): RNCWebView {\n        return CustomWebView(reactContext)\n    }\n\n    override fun addEventEmitters(reactContext: ThemedReactContext, view: WebView) {\n        view.webViewClient = CustomWebViewClient()\n    }\n\n    companion object {\n        /* This name must match what we\'re referring to in JS */\n        const val REACT_CLASS = "RCTCustomWebView"\n    }\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["You'll need to follow the usual steps to ",(0,a.jsx)(n.a,{href:"/docs/0.72/native-modules-android#register-the-module",children:"register the module"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"adding-new-properties",children:"Adding New Properties"}),"\n",(0,a.jsxs)(n.p,{children:["To add a new property, you'll need to add it to ",(0,a.jsx)(n.code,{children:"CustomWebView"}),", and then expose it in ",(0,a.jsx)(n.code,{children:"CustomWebViewManager"}),"."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,a.jsx)(o.Z,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public class CustomWebViewManager extends RNCWebViewManager {\n  ...\n  protected static class CustomWebView extends RNCWebView {\n    public CustomWebView(ThemedReactContext reactContext) {\n      super(reactContext);\n    }\n\n    protected @Nullable String mFinalUrl;\n\n    public void setFinalUrl(String url) {\n        mFinalUrl = url;\n    }\n\n    public String getFinalUrl() {\n        return mFinalUrl;\n    }\n  }\n\n  ...\n\n  @ReactProp(name = "finalUrl")\n  public void setFinalUrl(WebView view, String url) {\n    ((CustomWebView) view).setFinalUrl(url);\n  }\n}\n'})})}),(0,a.jsx)(o.Z,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'class CustomWebViewManager : RNCWebViewManager() {\n    protected inner class CustomWebView(\n        reactContext: ThemedReactContext?,\n        var finalUrl: String? = null\n    ) : RNCWebView(reactContext)\n\n    @ReactProp(name = "finalUrl")\n    fun setFinalUrl(view: WebView, url: String?) {\n        (view as CustomWebView).finalUrl = url\n    }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"adding-new-events",children:"Adding New Events"}),"\n",(0,a.jsx)(n.p,{children:"For events, you'll first need to make create event subclass."}),"\n",(0,a.jsxs)(i.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,a.jsx)(o.Z,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'// NavigationCompletedEvent.java\npublic class NavigationCompletedEvent extends Event<NavigationCompletedEvent> {\n  private WritableMap mParams;\n\n  public NavigationCompletedEvent(int viewTag, WritableMap params) {\n    super(viewTag);\n    this.mParams = params;\n  }\n\n  @Override\n  public String getEventName() {\n    return "navigationCompleted";\n  }\n\n  @Override\n  public void dispatch(RCTEventEmitter rctEventEmitter) {\n    init(getViewTag());\n    rctEventEmitter.receiveEvent(getViewTag(), getEventName(), mParams);\n  }\n}\n'})})}),(0,a.jsx)(o.Z,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'// NavigationCompletedEvent.kt\nclass NavigationCompletedEvent(viewTag: Int, val params: WritableMap) :\n    Event<NavigationCompletedEvent>(viewTag) {\n    override fun getEventName(): String = "navigationCompleted"\n\n    override fun dispatch(rctEventEmitter: RCTEventEmitter) {\n        init(viewTag)\n        rctEventEmitter.receiveEvent(viewTag, eventName, params)\n    }\n}\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"You can trigger the event in your web view client. You can hook existing handlers if your events are based on them."}),"\n",(0,a.jsxs)(n.p,{children:["You should refer to ",(0,a.jsx)(n.a,{href:"https://github.com/react-native-webview/react-native-webview/blob/master/android/src/main/java/com/reactnativecommunity/webview/RNCWebViewManagerImpl.kt",children:"RNCWebViewManagerImpl.kt"})," in the React Native WebView codebase to see what handlers are available and how they are implemented. You can extend any methods here to provide extra functionality."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,a.jsx)(o.Z,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public class NavigationCompletedEvent extends Event<NavigationCompletedEvent> {\n  private WritableMap mParams;\n\n  public NavigationCompletedEvent(int viewTag, WritableMap params) {\n    super(viewTag);\n    this.mParams = params;\n  }\n\n  @Override\n  public String getEventName() {\n    return "navigationCompleted";\n  }\n\n  @Override\n  public void dispatch(RCTEventEmitter rctEventEmitter) {\n    init(getViewTag());\n    rctEventEmitter.receiveEvent(getViewTag(), getEventName(), mParams);\n  }\n}\n\n// CustomWebViewManager.java\nprotected static class CustomWebViewClient extends RNCWebViewClient {\n  @Override\n  public boolean shouldOverrideUrlLoading(WebView view, String url) {\n    boolean shouldOverride = super.shouldOverrideUrlLoading(view, url);\n    String finalUrl = ((CustomWebView) view).getFinalUrl();\n\n    if (!shouldOverride && url != null && finalUrl != null && new String(url).equals(finalUrl)) {\n      final WritableMap params = Arguments.createMap();\n      dispatchEvent(view, new NavigationCompletedEvent(view.getId(), params));\n    }\n\n    return shouldOverride;\n  }\n}\n'})})}),(0,a.jsx)(o.Z,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'class NavigationCompletedEvent(viewTag: Int, val params: WritableMap) :\n    Event<NavigationCompletedEvent>(viewTag) {\n\n    override fun getEventName(): String = "navigationCompleted"\n\n    override fun dispatch(rctEventEmitter: RCTEventEmitter) {\n        init(viewTag)\n        rctEventEmitter.receiveEvent(viewTag, eventName, params)\n    }\n}\n\n// CustomWebViewManager.kt\n\nprotected class CustomWebViewClient : RNCWebViewClient() {\n    override fun shouldOverrideUrlLoading(view: WebView, url: String?): Boolean {\n        val shouldOverride: Boolean = super.shouldOverrideUrlLoading(view, url)\n        val finalUrl: String? = (view as CustomWebView).finalUrl\n        if (!shouldOverride && url != null && finalUrl != null && url == finalUrl) {\n            val params: WritableMap = Arguments.createMap()\n            dispatchEvent(view, NavigationCompletedEvent(view.getId(), params))\n        }\n        return shouldOverride\n    }\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Finally, you'll need to expose the events in ",(0,a.jsx)(n.code,{children:"CustomWebViewManager"})," through ",(0,a.jsx)(n.code,{children:"getExportedCustomDirectEventTypeConstants"}),". Note that currently, the default implementation returns ",(0,a.jsx)(n.code,{children:"null"}),", but this may change in the future."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,a.jsx)(o.Z,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public class CustomWebViewManager extends RNCWebViewManager {\n  ...\n\n  @Override\n  public @Nullable\n  Map getExportedCustomDirectEventTypeConstants() {\n    Map<String, Object> export = super.getExportedCustomDirectEventTypeConstants();\n    if (export == null) {\n      export = MapBuilder.newHashMap();\n    }\n    export.put("navigationCompleted", MapBuilder.of("registrationName", "onNavigationCompleted"));\n    return export;\n  }\n}\n'})})}),(0,a.jsx)(o.Z,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'class CustomWebViewManager : RNCWebViewManager() {\n    override fun getExportedCustomDirectEventTypeConstants(): MutableMap<Any?, Any?>? {\n        val superTypeConstants = super.getExportedCustomDirectEventTypeConstants()\n        val export = superTypeConstants ?: MapBuilder.newHashMap<Any, Any?>()\n        export["navigationCompleted"] = MapBuilder.of("registrationName", "onNavigationCompleted")\n        return export\n    }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"javascript-interface",children:"JavaScript Interface"}),"\n",(0,a.jsx)(n.p,{children:"To use your custom web view, you'll need to create a class for it. Your class must:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Export all the prop types from ",(0,a.jsx)(n.code,{children:"WebView.propTypes"})]}),"\n",(0,a.jsxs)(n.li,{children:["Return a ",(0,a.jsx)(n.code,{children:"WebView"})," component with the prop ",(0,a.jsx)(n.code,{children:"nativeConfig.component"})," set to your native component (see below)"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To get your native component, you must use ",(0,a.jsx)(n.code,{children:"requireNativeComponent"}),": the same as for regular custom components. However, you must pass in an extra third argument, ",(0,a.jsx)(n.code,{children:"WebView.extraNativeComponentConfig"}),". This third argument contains prop types that are only required for native code."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import React, {Component, PropTypes} from 'react';\nimport {WebView, requireNativeComponent} from 'react-native';\n\nexport default class CustomWebView extends Component {\n  static propTypes = WebView.propTypes;\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{component: RCTCustomWebView}}\n      />\n    );\n  }\n}\n\nconst RCTCustomWebView = requireNativeComponent(\n  'RCTCustomWebView',\n  CustomWebView,\n  WebView.extraNativeComponentConfig,\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to add custom props to your native component, you can use ",(0,a.jsx)(n.code,{children:"nativeConfig.props"})," on the web view."]}),"\n",(0,a.jsxs)(n.p,{children:["For events, the event handler must always be set to a function. This means it isn't safe to use the event handler directly from ",(0,a.jsx)(n.code,{children:"this.props"}),", as the user might not have provided one. The standard approach is to create a event handler in your class, and then invoking the event handler given in ",(0,a.jsx)(n.code,{children:"this.props"})," if it exists."]}),"\n",(0,a.jsxs)(n.p,{children:["If you are unsure how something should be implemented from the JS side, look at ",(0,a.jsx)(n.a,{href:"https://github.com/react-native-webview/react-native-webview/blob/master/src/WebView.android.tsx",children:"WebView.android.js"})," in the React Native WebView source."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"export default class CustomWebView extends Component {\n  static propTypes = {\n    ...WebView.propTypes,\n    finalUrl: PropTypes.string,\n    onNavigationCompleted: PropTypes.func,\n  };\n\n  static defaultProps = {\n    finalUrl: 'about:blank',\n  };\n\n  _onNavigationCompleted = event => {\n    const {onNavigationCompleted} = this.props;\n    onNavigationCompleted && onNavigationCompleted(event);\n  };\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{\n          component: RCTCustomWebView,\n          props: {\n            finalUrl: this.props.finalUrl,\n            onNavigationCompleted: this._onNavigationCompleted,\n          },\n        }}\n      />\n    );\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Similar to regular native components, you must provide all your prop types in the component to have them forwarded on to the native component. However, if you have some prop types that are only used internally in component, you can add them to the ",(0,a.jsx)(n.code,{children:"nativeOnly"})," property of the third argument previously mentioned. For event handlers, you have to use the value ",(0,a.jsx)(n.code,{children:"true"})," instead of a regular prop type."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, if you wanted to add an internal event handler called ",(0,a.jsx)(n.code,{children:"onScrollToBottom"}),", you would use,"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"const RCTCustomWebView = requireNativeComponent(\n  'RCTCustomWebView',\n  CustomWebView,\n  {\n    ...WebView.extraNativeComponentConfig,\n    nativeOnly: {\n      ...WebView.extraNativeComponentConfig.nativeOnly,\n      onScrollToBottom: true,\n    },\n  },\n);\n"})})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(v,e)})):v(e)}},86386:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(27378),r=t(38944);const i={tabItem:"tabItem_wHwb"};var o=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))u.call(n,t)&&c(e,t,n[t]);return e};function p({children:e,hidden:n,className:t}){return a.createElement("div",d({role:"tabpanel",className:(0,r.Z)(i.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>Z});var a=t(27378),r=t(38944),i=t(12112),o=t(3620),l=t(69490),s=t(14953),u=t(27886),c=t(7106),d=Object.defineProperty,p=Object.defineProperties,v=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,w=(e,n)=>{for(var t in n||(n={}))h.call(n,t)&&g(e,t,n[t]);if(m)for(var t of m(n))b.call(n,t)&&g(e,t,n[t]);return e},f=(e,n)=>p(e,v(n));function C(e){var n,t;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function x(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return C(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function j({value:e,tabValues:n}){return n.some((n=>n.value===e))}function y({queryString:e=!1,groupId:n}){const t=(0,o.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(f(w({},t.location),{search:n.toString()}))}),[r,t])]}function V(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=x(e),[o,s]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!j({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[u,d]=y({queryString:t,groupId:r}),[p,v]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,c.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),m=(()=>{const e=null!=u?u:p;return j({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{m&&s(m)}),[m]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var N=t(14185);const W={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var E=Object.defineProperty,T=Object.defineProperties,S=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,M=(e,n,t)=>n in e?E(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,I=(e,n)=>{for(var t in n||(n={}))O.call(n,t)&&M(e,t,n[t]);if(R)for(var t of R(n))k.call(n,t)&&M(e,t,n[t]);return e},U=(e,n)=>T(e,S(n));function A({className:e,block:n,selectedValue:t,selectValue:o,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const n=e.currentTarget,a=s.indexOf(n),r=l[a].value;r!==t&&(u(n),o(r))},d=e=>{var n,t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=null!=(n=s[t])?n:s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;a=null!=(t=s[n])?t:s[s.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e)},l.map((({value:e,label:n,attributes:i})=>a.createElement("li",U(I({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>s.push(e),onKeyDown:d,onClick:c},i),{className:(0,r.Z)("tabs__item",W.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function L({lazy:e,children:n,selectedValue:t}){const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function P(e){const n=V(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",W.tabList)},a.createElement(A,I(I({},e),n)),a.createElement(L,I(I({},e),n)))}function Z(e){const n=(0,N.Z)();return a.createElement(P,I({key:String(n)},e),C(e.children))}},11674:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,t)=>{var a=t(27378),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var a,i={},u=null,c=null;for(a in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,a)&&!s.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===i[a]&&(i[a]=n[a]);return{$$typeof:r,type:e,key:u,ref:c,props:i,_owner:l.current}}n.Fragment=i,n.jsx=u,n.jsxs=u},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>i});var a=t(27378);const r=a.createContext({});function i(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||o:i(e),a.createElement(r.Provider,{value:l},n)}}}]);