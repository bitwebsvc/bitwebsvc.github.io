/*! For license information please see 7b081642.9c8f9dc8.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[20077],{41985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(24246),a=t(71670),o=t(56225);const r={id:"native-components-ios",title:"iOS Native UI Components"},s=void 0,c={id:"native-components-ios",title:"iOS Native UI Components",description:"There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ScrollView and TextInput, but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application.",source:"@site/../docs/native-components-ios.md",sourceDirName:".",slug:"/native-components-ios",permalink:"/docs/next/native-components-ios",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/native-components-ios.md",tags:[],version:"current",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"native-components-ios",title:"iOS Native UI Components"},sidebar:"docs",previous:{title:"Android Native UI Components",permalink:"/docs/next/native-components-android"},next:{title:"Direct Manipulation",permalink:"/docs/next/direct-manipulation"}},l={},d=[{value:"iOS MapView example",id:"ios-mapview-example",level:2},{value:"Properties",id:"properties",level:2},{value:"Events",id:"events",level:2},{value:"Handling multiple native views",id:"handling-multiple-native-views",level:2},{value:"Styles",id:"styles",level:2}];function h(e){const n=Object.assign({p:"p",code:"code",h2:"h2",a:"a",ul:"ul",li:"li",pre:"pre",admonition:"admonition"},(0,a.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsxs)(n.p,{children:["There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ",(0,i.jsx)(n.code,{children:"ScrollView"})," and ",(0,i.jsx)(n.code,{children:"TextInput"}),", but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application."]}),"\n",(0,i.jsxs)(n.p,{children:["Like the native module guide, this too is a more advanced guide that assumes you are somewhat familiar with iOS programming. This guide will show you how to build a native UI component, walking you through the implementation of a subset of the existing ",(0,i.jsx)(n.code,{children:"MapView"})," component available in the core React Native library."]}),"\n",(0,i.jsx)(n.h2,{id:"ios-mapview-example",children:"iOS MapView example"}),"\n",(0,i.jsxs)(n.p,{children:["Let's say we want to add an interactive Map to our app - might as well use ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/library/prerelease/mac/documentation/MapKit/Reference/MKMapView_Class/index.html",children:(0,i.jsx)(n.code,{children:"MKMapView"})}),", we only need to make it usable from JavaScript."]}),"\n",(0,i.jsxs)(n.p,{children:["Native views are created and manipulated by subclasses of ",(0,i.jsx)(n.code,{children:"RCTViewManager"}),". These subclasses are similar in function to view controllers, but are essentially singletons - only one instance of each is created by the bridge. They expose native views to the ",(0,i.jsx)(n.code,{children:"RCTUIManager"}),", which delegates back to them to set and update the properties of the views as necessary. The ",(0,i.jsx)(n.code,{children:"RCTViewManager"}),"s are also typically the delegates for the views, sending events back to JavaScript via the bridge."]}),"\n",(0,i.jsx)(n.p,{children:"To expose a view you can:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Subclass ",(0,i.jsx)(n.code,{children:"RCTViewManager"})," to create a manager for your component."]}),"\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.code,{children:"RCT_EXPORT_MODULE()"})," marker macro."]}),"\n",(0,i.jsxs)(n.li,{children:["Implement the ",(0,i.jsx)(n.code,{children:"-(UIView *)view"})," method."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objectivec",metastring:"title='RNTMapManager.m'",children:"#import <MapKit/MapKit.h>\n\n#import <React/RCTViewManager.h>\n\n@interface RNTMapManager : RCTViewManager\n@end\n\n@implementation RNTMapManager\n\nRCT_EXPORT_MODULE(RNTMap)\n\n- (UIView *)view\n{\n  return [[MKMapView alloc] init];\n}\n\n@end\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Do not attempt to set the ",(0,i.jsx)(n.code,{children:"frame"})," or ",(0,i.jsx)(n.code,{children:"backgroundColor"})," properties on the ",(0,i.jsx)(n.code,{children:"UIView"})," instance that you expose through the ",(0,i.jsx)(n.code,{children:"-view"})," method.\nReact Native will overwrite the values set by your custom class in order to match your JavaScript component's layout props.\nIf you need this granularity of control it might be better to wrap the ",(0,i.jsx)(n.code,{children:"UIView"})," instance you want to style in another ",(0,i.jsx)(n.code,{children:"UIView"})," and return the wrapper ",(0,i.jsx)(n.code,{children:"UIView"})," instead.\nSee ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/issues/2948",children:"Issue 2948"})," for more context."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["In the example above, we prefixed our class name with ",(0,i.jsx)(n.code,{children:"RNT"}),". Prefixes are used to avoid name collisions with other frameworks.\nApple frameworks use two-letter prefixes, and React Native uses ",(0,i.jsx)(n.code,{children:"RCT"})," as a prefix. In order to avoid name collisions, we recommend using a three-letter prefix other than ",(0,i.jsx)(n.code,{children:"RCT"})," in your own classes."]})}),"\n",(0,i.jsx)(n.p,{children:"Then you need a little bit of JavaScript to make this a usable React component:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="MapView.tsx"',children:"import {requireNativeComponent} from 'react-native';\n\n// requireNativeComponent automatically resolves 'RNTMap' to 'RNTMapManager'\nmodule.exports = requireNativeComponent('RNTMap');\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="MyApp.tsx"',children:"import MapView from './MapView.tsx';\n\n...\n\nrender() {\n  return <MapView style={{flex: 1}} />;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to use ",(0,i.jsx)(n.code,{children:"RNTMap"})," here. We want to require the manager here, which will expose the view of our manager for use in JavaScript."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"When rendering, don't forget to stretch the view, otherwise you'll be staring at a blank screen."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"  render() {\n    return <MapView style={{flex: 1}} />;\n  }\n"})}),"\n",(0,i.jsx)(n.p,{children:"This is now a fully-functioning native map view component in JavaScript, complete with pinch-zoom and other native gesture support. We can't really control it from JavaScript yet, though :("}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.p,{children:"The first thing we can do to make this component more usable is to bridge over some native properties. Let's say we want to be able to disable zooming and specify the visible region. Disabling zoom is a boolean, so we add this one line:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objectivec",metastring:"title='RNTMapManager.m'",children:"RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that we explicitly specify the type as ",(0,i.jsx)(n.code,{children:"BOOL"})," - React Native uses ",(0,i.jsx)(n.code,{children:"RCTConvert"}),' under the hood to convert all sorts of different data types when talking over the bridge, and bad values will show convenient "RedBox" errors to let you know there is an issue ASAP. When things are straightforward like this, the whole implementation is taken care of for you by this macro.']}),"\n",(0,i.jsx)(n.p,{children:"Now to actually disable zooming, we set the property in JS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="MyApp.tsx"',children:"<MapView zoomEnabled={false} style={{flex: 1}} />\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To document the properties (and which values they accept) of our MapView component we'll add a wrapper component and document the interface with React ",(0,i.jsx)(n.code,{children:"PropTypes"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="MapView.tsx"',children:"import PropTypes from 'prop-types';\nimport React from 'react';\nimport {requireNativeComponent} from 'react-native';\n\nclass MapView extends React.Component {\n  render() {\n    return <RNTMap {...this.props} />;\n  }\n}\n\nMapView.propTypes = {\n  /**\n   * A Boolean value that determines whether the user may use pinch\n   * gestures to zoom in and out of the map.\n   */\n  zoomEnabled: PropTypes.bool,\n};\n\nconst RNTMap = requireNativeComponent('RNTMap');\n\nmodule.exports = MapView;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now we have a nicely documented wrapper component to work with."}),"\n",(0,i.jsxs)(n.p,{children:["Next, let's add the more complex ",(0,i.jsx)(n.code,{children:"region"})," prop. We start by adding the native code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objectivec",metastring:"title='RNTMapManager.m'",children:"RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)\n{\n  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Ok, this is more complicated than the ",(0,i.jsx)(n.code,{children:"BOOL"})," case we had before. Now we have a ",(0,i.jsx)(n.code,{children:"MKCoordinateRegion"})," type that needs a conversion function, and we have custom code so that the view will animate when we set the region from JS. Within the function body that we provide, ",(0,i.jsx)(n.code,{children:"json"})," refers to the raw value that has been passed from JS. There is also a ",(0,i.jsx)(n.code,{children:"view"})," variable which gives us access to the manager's view instance, and a ",(0,i.jsx)(n.code,{children:"defaultView"})," that we use to reset the property back to the default value if JS sends us a null sentinel."]}),"\n",(0,i.jsxs)(n.p,{children:["You could write any conversion function you want for your view - here is the implementation for ",(0,i.jsx)(n.code,{children:"MKCoordinateRegion"})," via a category on ",(0,i.jsx)(n.code,{children:"RCTConvert"}),". It uses an already existing category of ReactNative ",(0,i.jsx)(n.code,{children:"RCTConvert+CoreLocation"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objectivec",metastring:"title='RNTMapManager.m'",children:'#import "RCTConvert+Mapkit.h"\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objectivec",metastring:"title='RCTConvert+Mapkit.h'",children:'#import <MapKit/MapKit.h>\n#import <React/RCTConvert.h>\n#import <CoreLocation/CoreLocation.h>\n#import <React/RCTConvert+CoreLocation.h>\n\n@interface RCTConvert (Mapkit)\n\n+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;\n+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;\n\n@end\n\n@implementation RCTConvert(MapKit)\n\n+ (MKCoordinateSpan)MKCoordinateSpan:(id)json\n{\n  json = [self NSDictionary:json];\n  return (MKCoordinateSpan){\n    [self CLLocationDegrees:json[@"latitudeDelta"]],\n    [self CLLocationDegrees:json[@"longitudeDelta"]]\n  };\n}\n\n+ (MKCoordinateRegion)MKCoordinateRegion:(id)json\n{\n  return (MKCoordinateRegion){\n    [self CLLocationCoordinate2D:json],\n    [self MKCoordinateSpan:json]\n  };\n}\n\n@end\n'})}),"\n",(0,i.jsx)(n.p,{children:'These conversion functions are designed to safely process any JSON that the JS might throw at them by displaying "RedBox" errors and returning standard initialization values when missing keys or other developer errors are encountered.'}),"\n",(0,i.jsxs)(n.p,{children:["To finish up support for the ",(0,i.jsx)(n.code,{children:"region"})," prop, we need to document it in ",(0,i.jsx)(n.code,{children:"propTypes"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="MapView.tsx"',children:"MapView.propTypes = {\n  /**\n   * A Boolean value that determines whether the user may use pinch\n   * gestures to zoom in and out of the map.\n   */\n  zoomEnabled: PropTypes.bool,\n\n  /**\n   * The region to be displayed by the map.\n   *\n   * The region is defined by the center coordinates and the span of\n   * coordinates to display.\n   */\n  region: PropTypes.shape({\n    /**\n     * Coordinates for the center of the map.\n     */\n    latitude: PropTypes.number.isRequired,\n    longitude: PropTypes.number.isRequired,\n\n    /**\n     * Distance between the minimum and the maximum latitude/longitude\n     * to be displayed.\n     */\n    latitudeDelta: PropTypes.number.isRequired,\n    longitudeDelta: PropTypes.number.isRequired,\n  }),\n};\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="MyApp.tsx"',children:"render() {\n  const region = {\n    latitude: 37.48,\n    longitude: -122.16,\n    latitudeDelta: 0.1,\n    longitudeDelta: 0.1,\n  };\n  return (\n    <MapView\n      region={region}\n      zoomEnabled={false}\n      style={{flex: 1}}\n    />\n  );\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here you can see that the shape of the region is explicit in the JS documentation."}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(n.p,{children:"So now we have a native map component that we can control freely from JS, but how do we deal with events from the user, like pinch-zooms or panning to change the visible region?"}),"\n",(0,i.jsxs)(n.p,{children:["Until now we've only returned a ",(0,i.jsx)(n.code,{children:"MKMapView"})," instance from our manager's ",(0,i.jsx)(n.code,{children:"-(UIView *)view"})," method. We can't add new properties to ",(0,i.jsx)(n.code,{children:"MKMapView"})," so we have to create a new subclass from ",(0,i.jsx)(n.code,{children:"MKMapView"})," which we use for our View. We can then add a ",(0,i.jsx)(n.code,{children:"onRegionChange"})," callback on this subclass:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objectivec",metastring:"title='RNTMapView.h'",children:"#import <MapKit/MapKit.h>\n\n#import <React/RCTComponent.h>\n\n@interface RNTMapView: MKMapView\n\n@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;\n\n@end\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objectivec",metastring:"title='RNTMapView.m'",children:'#import "RNTMapView.h"\n\n@implementation RNTMapView\n\n@end\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Note that all ",(0,i.jsx)(n.code,{children:"RCTBubblingEventBlock"})," must be prefixed with ",(0,i.jsx)(n.code,{children:"on"}),". Next, declare an event handler property on ",(0,i.jsx)(n.code,{children:"RNTMapManager"}),", make it a delegate for all the views it exposes, and forward events to JS by calling the event handler block from the native view."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objectivec",metastring:"{9,17,31-48} title='RNTMapManager.m'",children:'#import <MapKit/MapKit.h>\n#import <React/RCTViewManager.h>\n\n#import "RNTMapView.h"\n#import "RCTConvert+Mapkit.h"\n\n@interface RNTMapManager : RCTViewManager <MKMapViewDelegate>\n@end\n\n@implementation RNTMapManager\n\nRCT_EXPORT_MODULE()\n\nRCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)\nRCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock)\n\nRCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)\n{\n  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];\n}\n\n- (UIView *)view\n{\n  RNTMapView *map = [RNTMapView new];\n  map.delegate = self;\n  return map;\n}\n\n#pragma mark MKMapViewDelegate\n\n- (void)mapView:(RNTMapView *)mapView regionDidChangeAnimated:(BOOL)animated\n{\n  if (!mapView.onRegionChange) {\n    return;\n  }\n\n  MKCoordinateRegion region = mapView.region;\n  mapView.onRegionChange(@{\n    @"region": @{\n      @"latitude": @(region.center.latitude),\n      @"longitude": @(region.center.longitude),\n      @"latitudeDelta": @(region.span.latitudeDelta),\n      @"longitudeDelta": @(region.span.longitudeDelta),\n    }\n  });\n}\n@end\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the delegate method ",(0,i.jsx)(n.code,{children:"-mapView:regionDidChangeAnimated:"})," the event handler block is called on the corresponding view with the region data. Calling the ",(0,i.jsx)(n.code,{children:"onRegionChange"})," event handler block results in calling the same callback prop in JavaScript. This callback is invoked with the raw event, which we typically process in the wrapper component to simplify the API:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="MapView.tsx"',children:"class MapView extends React.Component {\n  _onRegionChange = event => {\n    if (!this.props.onRegionChange) {\n      return;\n    }\n\n    // process raw event...\n    this.props.onRegionChange(event.nativeEvent);\n  };\n  render() {\n    return (\n      <RNTMap\n        {...this.props}\n        onRegionChange={this._onRegionChange}\n      />\n    );\n  }\n}\nMapView.propTypes = {\n  /**\n   * Callback that is called continuously when the user is dragging the map.\n   */\n  onRegionChange: PropTypes.func,\n  ...\n};\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="MyApp.tsx"',children:"class MyApp extends React.Component {\n  onRegionChange(event) {\n    // Do stuff with event.region.latitude, etc.\n  }\n\n  render() {\n    const region = {\n      latitude: 37.48,\n      longitude: -122.16,\n      latitudeDelta: 0.1,\n      longitudeDelta: 0.1,\n    };\n    return (\n      <MapView\n        region={region}\n        zoomEnabled={false}\n        onRegionChange={this.onRegionChange}\n      />\n    );\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"handling-multiple-native-views",children:"Handling multiple native views"}),"\n",(0,i.jsx)(n.p,{children:"A React Native view can have more than one child view in the view tree eg."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<View>\n  <MyNativeView />\n  <MyNativeView />\n  <Button />\n</View>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the class ",(0,i.jsx)(n.code,{children:"MyNativeView"})," is a wrapper for a ",(0,i.jsx)(n.code,{children:"NativeComponent"})," and exposes methods, which will be called on the iOS platform. ",(0,i.jsx)(n.code,{children:"MyNativeView"})," is defined in ",(0,i.jsx)(n.code,{children:"MyNativeView.ios.js"})," and contains proxy methods of ",(0,i.jsx)(n.code,{children:"NativeComponent"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When the user interacts with the component, like clicking the button, the ",(0,i.jsx)(n.code,{children:"backgroundColor"})," of ",(0,i.jsx)(n.code,{children:"MyNativeView"})," changes. In this case ",(0,i.jsx)(n.code,{children:"UIManager"})," would not know which ",(0,i.jsx)(n.code,{children:"MyNativeView"})," should be handled and which one should change ",(0,i.jsx)(n.code,{children:"backgroundColor"}),". Below you will find a solution to this problem:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<View>\n  <MyNativeView ref={this.myNativeReference} />\n  <MyNativeView ref={this.myNativeReference2} />\n  <Button\n    onPress={() => {\n      this.myNativeReference.callNativeMethod();\n    }}\n  />\n</View>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now the above component has a reference to a particular ",(0,i.jsx)(n.code,{children:"MyNativeView"})," which allows us to use a specific instance of ",(0,i.jsx)(n.code,{children:"MyNativeView"}),". Now the button can control which ",(0,i.jsx)(n.code,{children:"MyNativeView"})," should change its ",(0,i.jsx)(n.code,{children:"backgroundColor"}),". In this example let's assume that ",(0,i.jsx)(n.code,{children:"callNativeMethod"})," changes ",(0,i.jsx)(n.code,{children:"backgroundColor"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="MyNativeView.ios.tsx"',children:"class MyNativeView extends React.Component {\n  callNativeMethod = () => {\n    UIManager.dispatchViewManagerCommand(\n      ReactNative.findNodeHandle(this),\n      UIManager.getViewManagerConfig('RNCMyNativeView').Commands\n        .callNativeMethod,\n      [],\n    );\n  };\n\n  render() {\n    return <NativeComponent ref={NATIVE_COMPONENT_REF} />;\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"callNativeMethod"})," is our custom iOS method which for example changes the ",(0,i.jsx)(n.code,{children:"backgroundColor"})," which is exposed through ",(0,i.jsx)(n.code,{children:"MyNativeView"}),". This method uses ",(0,i.jsx)(n.code,{children:"UIManager.dispatchViewManagerCommand"})," which needs 3 parameters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"(nonnull NSNumber \\*)reactTag"}),"\u200a -\u200a id of react view."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"commandID:(NSInteger)commandID"}),"\u200a -\u200a Id of the native method that should be called"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"commandArgs:(NSArray<id> \\*)commandArgs"}),"\u200a -\u200a Args of the native method that we can pass from JS to native."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objectivec",metastring:"title='RNCMyNativeViewManager.m'",children:'#import <React/RCTViewManager.h>\n#import <React/RCTUIManager.h>\n#import <React/RCTLog.h>\n\nRCT_EXPORT_METHOD(callNativeMethod:(nonnull NSNumber*) reactTag) {\n    [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {\n        NativeView *view = viewRegistry[reactTag];\n        if (!view || ![view isKindOfClass:[NativeView class]]) {\n            RCTLogError(@"Cannot find NativeView with tag #%@", reactTag);\n            return;\n        }\n        [view callNativeMethod];\n    }];\n\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here the ",(0,i.jsx)(n.code,{children:"callNativeMethod"})," is defined in the ",(0,i.jsx)(n.code,{children:"RNCMyNativeViewManager.m"})," file and contains only one parameter which is ",(0,i.jsx)(n.code,{children:"(nonnull NSNumber*) reactTag"}),". This exported function will find a particular view using ",(0,i.jsx)(n.code,{children:"addUIBlock"})," which contains the ",(0,i.jsx)(n.code,{children:"viewRegistry"})," parameter and returns the component based on ",(0,i.jsx)(n.code,{children:"reactTag"})," allowing it to call the method on the correct component."]}),"\n",(0,i.jsx)(n.h2,{id:"styles",children:"Styles"}),"\n",(0,i.jsxs)(n.p,{children:["Since all our native react views are subclasses of ",(0,i.jsx)(n.code,{children:"UIView"}),", most style attributes will work like you would expect out of the box. Some components will want a default style, however, for example ",(0,i.jsx)(n.code,{children:"UIDatePicker"})," which is a fixed size. This default style is important for the layout algorithm to work as expected, but we also want to be able to override the default style when using the component. ",(0,i.jsx)(n.code,{children:"DatePickerIOS"})," does this by wrapping the native component in an extra view, which has flexible styling, and using a fixed style (which is generated with constants passed in from native) on the inner native component:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="DatePickerIOS.ios.tsx"',children:"import {UIManager} from 'react-native';\nconst RCTDatePickerIOSConsts = UIManager.RCTDatePicker.Constants;\n...\n  render: function() {\n    return (\n      <View style={this.props.style}>\n        <RCTDatePickerIOS\n          ref={DATEPICKER}\n          style={styles.rkDatePickerIOS}\n          ...\n        />\n      </View>\n    );\n  }\n});\n\nconst styles = StyleSheet.create({\n  rkDatePickerIOS: {\n    height: RCTDatePickerIOSConsts.ComponentHeight,\n    width: RCTDatePickerIOSConsts.ComponentWidth,\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"RCTDatePickerIOSConsts"})," constants are exported from native by grabbing the actual frame of the native component like so:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objectivec",metastring:"title='RCTDatePickerManager.m'",children:'- (NSDictionary *)constantsToExport\n{\n  UIDatePicker *dp = [[UIDatePicker alloc] init];\n  [dp layoutIfNeeded];\n\n  return @{\n    @"ComponentHeight": @(CGRectGetHeight(dp.frame)),\n    @"ComponentWidth": @(CGRectGetWidth(dp.frame)),\n    @"DatePickerModes": @{\n      @"time": @(UIDatePickerModeTime),\n      @"date": @(UIDatePickerModeDate),\n      @"datetime": @(UIDatePickerModeDateAndTime),\n    }\n  };\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This guide covered many of the aspects of bridging over custom native components, but there is even more you might need to consider, such as custom hooks for inserting and laying out subviews. If you want to go even deeper, check out the ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/tree/main/packages/react-native/React/Views",children:"source code"})," of some of the implemented components."]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}},56225:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(24246),a=t(71670);function o(e){const n=Object.assign({admonition:"admonition",p:"p",a:"a"},(0,a.ah)(),e.components);return(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Native Module and Native Components are our stable technologies used by the legacy architecture.\nThey will be deprecated in the future when the New Architecture will be stable. The New Architecture uses ",(0,i.jsx)(n.a,{href:"./the-new-architecture/pillars-turbomodules",children:"Turbo Native Module"})," and ",(0,i.jsx)(n.a,{href:"./the-new-architecture/pillars-fabric-components",children:"Fabric Native Components"})," to achieve similar results."]})})}const r=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},71426:(e,n,t)=>{var i=t(27378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,o={},l=null,d=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,i)&&!c.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:a,type:e,key:l,ref:d,props:o,_owner:s.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>o});var i=t(27378);const a=i.createContext({});function o(e){const n=i.useContext(a);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||r:o(e),i.createElement(a.Provider,{value:s},n)}}}]);