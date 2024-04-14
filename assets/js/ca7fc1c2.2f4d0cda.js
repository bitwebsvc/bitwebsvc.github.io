/*! For license information please see ca7fc1c2.2f4d0cda.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[74228],{71229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(24246),i=n(71670);const s={title:"Using AWS with React Native",author:"Richard Threlkeld",authorTitle:"Senior Technical Product Manager at AWS Mobile",authorURL:"https://twitter.com/undef_obj",authorImageURL:"https://pbs.twimg.com/profile_images/811239086581227520/APX1eZwF_400x400.jpg",authorTwitter:"undef_obj",tags:["engineering"]},o=void 0,r={permalink:"/blog/2018/03/05/AWS-app-sync",source:"@site/blog/2018-03-05-AWS-app-sync.md",title:"Using AWS with React Native",description:"AWS is well known in the technology industry as a provider of cloud services. These include compute, storage, and database technologies, as well as fully managed serverless offerings. The AWS Mobile team has been working closely with customers and members of the JavaScript ecosystem to make cloud-connected mobile and web applications more secure, scalable, and easier to develop and deploy. We began with a complete starter kit, but have a few more recent developments.",date:"2018-03-05T00:00:00.000Z",formattedDate:"March 5, 2018",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],readingTime:8.8,hasTruncateMarker:!1,authors:[{name:"Richard Threlkeld",title:"Senior Technical Product Manager at AWS Mobile",url:"https://twitter.com/undef_obj",imageURL:"https://pbs.twimg.com/profile_images/811239086581227520/APX1eZwF_400x400.jpg"}],frontMatter:{title:"Using AWS with React Native",author:"Richard Threlkeld",authorTitle:"Senior Technical Product Manager at AWS Mobile",authorURL:"https://twitter.com/undef_obj",authorImageURL:"https://pbs.twimg.com/profile_images/811239086581227520/APX1eZwF_400x400.jpg",authorTwitter:"undef_obj",tags:["engineering"]},unlisted:!1,prevItem:{title:"Building <InputAccessoryView> For React Native",permalink:"/blog/2018/03/22/building-input-accessory-view-for-react-native"},nextItem:{title:"Implementing Twitter\u2019s App Loading Animation in React Native",permalink:"/blog/2018/01/18/implementing-twitters-app-loading-animation-in-react-native"}},c={authorsImageUrls:[void 0]},l=[{value:"AWS Amplify",id:"aws-amplify",level:2},{value:"AWS AppSync",id:"aws-appsync",level:2},{value:"Feedback",id:"feedback",level:2}];function h(e){const t=Object.assign({p:"p",a:"a",ul:"ul",li:"li",strong:"strong",h2:"h2",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["AWS is well known in the technology industry as a provider of cloud services. These include compute, storage, and database technologies, as well as fully managed serverless offerings. The AWS Mobile team has been working closely with customers and members of the JavaScript ecosystem to make cloud-connected mobile and web applications more secure, scalable, and easier to develop and deploy. We began with a ",(0,a.jsx)(t.a,{href:"https://github.com/awslabs/aws-mobile-react-native-starter",children:"complete starter kit"}),", but have a few more recent developments."]}),"\n",(0,a.jsx)(t.p,{children:"This blog post talks about some interesting things for React and React Native developers:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/aws/aws-amplify",children:(0,a.jsx)(t.strong,{children:"AWS Amplify"})}),", a declarative library for JavaScript applications using cloud services"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://aws.amazon.com/appsync/",children:(0,a.jsx)(t.strong,{children:"AWS AppSync"})}),", a fully managed GraphQL service with offline and real-time features"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"aws-amplify",children:"AWS Amplify"}),"\n",(0,a.jsx)(t.p,{children:"React Native applications are very easy to bootstrap using tools like Create React Native App and Expo. However, connecting them to the cloud can be challenging to navigate when you try to match a use case to infrastructure services. For example, your React Native app might need to upload photos. Should these be protected per user? That probably means you need some sort of registration or sign-in process. Do you want your own user directory or are you using a social media provider? Maybe your app also needs to call an API with custom business logic after users log in."}),"\n",(0,a.jsxs)(t.p,{children:['To help JavaScript developers with these problems, we released a library named AWS Amplify. The design is broken into "categories" of tasks, instead of AWS-specific implementations. For example, if you wanted users to register, log in, and then upload private photos, you would simply pull in ',(0,a.jsx)(t.code,{children:"Auth"})," and ",(0,a.jsx)(t.code,{children:"Storage"})," categories to your application:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"import { Auth } from 'aws-amplify';\n\nAuth.signIn(username, password)\n    .then(user => console.log(user))\n    .catch(err => console.log(err));\n\nAuth.confirmSignIn(user, code)\n    .then(data => console.log(data))\n    .catch(err => console.log(err));\n"})}),"\n",(0,a.jsx)(t.p,{children:"In the code above, you can see an example of some of the common tasks that Amplify helps you with, such as using multi-factor authentication (MFA) codes with either email or SMS. The supported categories today are:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Auth"}),": Provides credential automation. Out-of-the-box implementation uses AWS credentials for signing, and OIDC JWT tokens from ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/cognito/",children:"Amazon Cognito"}),". Common functionality, such as MFA features, is supported."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Analytics"}),": With a single line of code, get tracking for authenticated or unauthenticated users in ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/pinpoint/",children:"Amazon Pinpoint"}),". Extend this for custom metrics or attributes, as you prefer."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"API"}),": Provides interaction with RESTful APIs in a secure manner, leveraging ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html",children:"AWS Signature Version 4"}),". The API module is great on serverless infrastructures with ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/api-gateway/",children:"Amazon API Gateway"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Storage"}),": Simplified commands to upload, download, and list content in ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/s3/",children:"Amazon S3"}),". You can also easily group data into public or private content on a per-user basis."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Caching"}),": An LRU cache interface across web apps and React Native that uses implementation-specific persistence."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"i18n and Logging"}),": Provides internationalization and localization capabilities, as well as debugging and logging capabilities."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:'One of the nice things about Amplify is that it encodes "best practices" in the design for your specific programming environment. For example, one thing we found working with customers and React Native developers is that shortcuts taken during development to get things working quickly would make it through to production stacks. These can compromise either scalability or security, and force infrastructure rearchitecture and code refactoring.'}),"\n",(0,a.jsxs)(t.p,{children:["One example of how we help developers avoid this is the ",(0,a.jsx)(t.a,{href:"https://www.allthingsdistributed.com/2016/06/aws-lambda-serverless-reference-architectures.html",children:"Serverless Reference Architectures with AWS Lambda"}),". These show you best practices around using Amazon API Gateway and AWS Lambda together when building your backend. This pattern is encoded into the ",(0,a.jsx)(t.code,{children:"API"})," category of Amplify. You can use this pattern to interact with several different REST endpoints, and pass headers all the way through to your Lambda function for custom business logic. We\u2019ve also released an ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/aws-mobile/latest/developerguide/react-native-getting-started.html",children:"AWS Mobile CLI"})," for bootstrapping new or existing React Native projects with these features. To get started, just install via ",(0,a.jsx)(t.strong,{children:"npm"}),", and follow the configuration prompts:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"npm install --global awsmobile-cli\nawsmobile configure\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Another example of encoded best practices that is specific to the mobile ecosystem is password security. The default ",(0,a.jsx)(t.code,{children:"Auth"})," category implementation leverages Amazon Cognito user pools for user registration and sign-in. This service implements ",(0,a.jsx)(t.a,{href:"https://srp.stanford.edu",children:"Secure Remote Password protocol"})," as a way of protecting users during authentication attempts. If you're inclined to read through the ",(0,a.jsx)(t.a,{href:"https://srp.stanford.edu/ndss.html#SECTION00032200000000000000",children:"mathematics of the protocol"}),", you'll notice that you must use a large prime number when calculating the password verifier over a primitive root to generate a Group. In React Native environments, ",(0,a.jsx)(t.a,{href:"/docs/javascript-environment",children:"JIT is disabled"}),". This makes BigInteger calculations for security operations such as this less performant. To account for this, we've released native bridges in Android and iOS that you can link inside your project:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"npm install --save aws-amplify-react-native\nreact-native link amazon-cognito-identity-js\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We're also excited to see that the Expo team has included this ",(0,a.jsx)(t.a,{href:"https://blog.expo.io/expo-sdk-v25-0-0-is-now-available-714d10a8c3f7",children:"in their latest SDK"})," so that you can use Amplify without ejecting."]}),"\n",(0,a.jsxs)(t.p,{children:["Finally, specific to React Native (and React) development, Amplify contains ",(0,a.jsx)(t.a,{href:"https://reactjs.org/docs/higher-order-components.html",children:"higher order components (HOCs)"})," for easily wrapping functionality, such as for sign-up and sign-in to your app:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"import Amplify, { withAuthenticator } from 'aws-amplify-react-native';\nimport aws_exports from './aws-exports';\n\nAmplify.configure(aws_exports);\n\nclass App extends React.Component {\n...\n}\n\nexport default withAuthenticator(App);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The underlying component is also provided as ",(0,a.jsx)(t.code,{children:"<Authenticator />"}),", which gives you full control to customize the UI. It also gives you some properties around managing the state of the user, such as if they've signed in or are waiting for MFA confirmation, and callbacks that you can fire when state changes."]}),"\n",(0,a.jsxs)(t.p,{children:["Similarly, you'll find general React components that you can use for different use cases. You can customize these to your needs, for example, to show all private images from Amazon S3 in the ",(0,a.jsx)(t.code,{children:"Storage"})," module:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'<S3Album\n  level="private"\n  path={path}\n  filter={(item) => /jpg/i.test(item.path)}/>\n'})}),"\n",(0,a.jsx)(t.p,{children:"You can control many of the component features via props, as shown earlier, with public or private storage options. There are even capabilities to automatically gather analytics when users interact with certain UI components:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"return <S3Album track/>\n"})}),"\n",(0,a.jsxs)(t.p,{children:["AWS Amplify favors a convention over configuration style of development, with a global initialization routine or initialization at the category level. The quickest way to get started is with an ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/blogs/mobile/enhanced-javascript-development-with-aws-mobile-hub/",children:"aws-exports file"}),". However, developers can also use the library independently with existing resources."]}),"\n",(0,a.jsxs)(t.p,{children:["For a deep dive into the philosophy and to see a full demo, check out the video from ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=vAjf3lyjf8c",children:"AWS re:Invent"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"aws-appsync",children:"AWS AppSync"}),"\n",(0,a.jsxs)(t.p,{children:["Shortly after the launch of AWS Amplify, we also released ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/appsync/",children:"AWS AppSync"}),". This is a fully managed GraphQL service that has both offline and real-time capabilities. Although you can use GraphQL in different client programming languages (including native Android and iOS), it's quite popular among React Native developers. This is because the data model fits nicely into a unidirectional data flow and component hierarchy."]}),"\n",(0,a.jsxs)(t.p,{children:["AWS AppSync enables you to connect to resources in your own AWS account, meaning you own and control your data. This is done by using data sources, and the service supports ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/dynamodb/",children:"Amazon DynamoDB"}),", ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/elasticsearch-service/",children:"Amazon Elasticsearch"}),", and ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/lambda/",children:"AWS Lambda"}),". This enables you to combine functionality (such as NoSQL and full-text search) in a single GraphQL API as a schema. This enables you to mix and match data sources. The AppSync service can also ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/appsync/latest/devguide/provision-from-schema.html",children:"provision from a schema"}),", so if you aren't familiar with AWS services, you can write GraphQL SDL, click a button, and you're automatically up and running."]}),"\n",(0,a.jsxs)(t.p,{children:["The real-time functionality in AWS AppSync is controlled via ",(0,a.jsx)(t.a,{href:"https://graphql.org/blog/subscriptions-in-graphql-and-relay/",children:"GraphQL subscriptions with a well-known, event-based pattern"}),". Because subscriptions in AWS AppSync are ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/appsync/latest/devguide/real-time-data.html",children:"controlled on the schema"})," with a GraphQL directive, and a schema can use any data source, this means you can trigger notifications from database operations with Amazon DynamoDB and Amazon Elasticsearch Service, or from other parts of your infrastructure with AWS Lambda."]}),"\n",(0,a.jsxs)(t.p,{children:["In a way similar to AWS Amplify, you can use ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/appsync/latest/devguide/security.html",children:"enterprise security features"})," on your GraphQL API with AWS AppSync. The service lets you get started quickly with API keys. However, as you roll to production it can transition to using AWS Identity and Access Management (IAM) or OIDC tokens from Amazon Cognito user pools. You can control access at the resolver level with policies on types. You can even use logical checks for ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/appsync/latest/devguide/security.html#fine-grained-access-control",children:"fine-grained access control"})," checks at run time, such as detecting if a user is the owner of a specific database resource. There are also capabilities around checking group membership for executing resolvers or individual database record access."]}),"\n",(0,a.jsxs)(t.p,{children:["To help React Native developers learn more about these technologies, there is a ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/appsync/latest/devguide/quickstart.html",children:"built-in GraphQL sample schema"})," that you can launch on the AWS AppSync console homepage. This sample deploys a GraphQL schema, provisions database tables, and connects queries, mutations, and subscriptions automatically for you. There is also a functioning ",(0,a.jsx)(t.a,{href:"https://github.com/aws-samples/aws-mobile-appsync-events-starter-react-native",children:"React Native example for AWS AppSync"})," which leverages this built in schema (as well as a ",(0,a.jsx)(t.a,{href:"https://github.com/aws-samples/aws-mobile-appsync-events-starter-react",children:"React example"}),"), which enable you to get both your client and cloud components running in minutes."]}),"\n",(0,a.jsxs)(t.p,{children:["Getting started is simple when you use the ",(0,a.jsx)(t.code,{children:"AWSAppSyncClient"}),", which plugs in to the ",(0,a.jsx)(t.a,{href:"https://github.com/apollographql/apollo-client",children:"Apollo Client"}),". The ",(0,a.jsx)(t.code,{children:"AWSAppSyncClient"})," handles security and signing for your GraphQL API, offline functionality, and the subscription handshake and negotiation process:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'import AWSAppSyncClient from "aws-appsync";\nimport { Rehydrated } from \'aws-appsync-react\';\nimport { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";\n\nconst client = new AWSAppSyncClient({\n  url: awsconfig.graphqlEndpoint,\n  region: awsconfig.region,\n  auth: {type: AUTH_TYPE.API_KEY, apiKey: awsconfig.apiKey}\n});\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The AppSync console provides a configuration file for download, which contains your GraphQL endpoint, AWS Region, and API key. You can then use the client with ",(0,a.jsx)(t.a,{href:"https://github.com/apollographql/react-apollo",children:"React Apollo"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"const WithProvider = () => (\n  <ApolloProvider client={client}>\n      <Rehydrated>\n          <App />\n      </Rehydrated>\n  </ApolloProvider>\n);\n"})}),"\n",(0,a.jsx)(t.p,{children:"At this point, you can use standard GraphQL queries:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"query ListEvents {\n    listEvents{\n      items{\n        __typename\n        id\n        name\n        where\n        when\n        description\n        comments{\n          __typename\n          items{\n            __typename\n            eventId\n            commentId\n            content\n            createdAt\n          }\n          nextToken\n        }\n      }\n    }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The example above shows a query with the sample app schema provisioned by AppSync. It not only showcases interaction with DynamoDB, but also includes pagination of data (including encrypted tokens) and type relations between ",(0,a.jsx)(t.code,{children:"Events"})," and ",(0,a.jsx)(t.code,{children:"Comments"}),". Because the app is configured with the ",(0,a.jsx)(t.code,{children:"AWSAppSyncClient"}),", data is automatically persisted offline and will synchronize when devices reconnect."]}),"\n",(0,a.jsxs)(t.p,{children:["You can see a deep dive of the ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=FtkVlIal_m0",children:"client technology behind this and a React Native demo in this video"}),"."]}),"\n",(0,a.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/FtkVlIal_m0?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),"\n",(0,a.jsx)(t.h2,{id:"feedback",children:"Feedback"}),"\n",(0,a.jsxs)(t.p,{children:["The team behind the libraries is eager to hear how these libraries and services work for you. They also want to hear what else we can do to make React and React Native development with cloud services easier for you. Reach out to the AWS Mobile team on GitHub for ",(0,a.jsx)(t.a,{href:"https://github.com/aws/aws-amplify",children:"AWS Amplify"})," or ",(0,a.jsx)(t.a,{href:"https://github.com/aws-samples/aws-mobile-appsync-events-starter-react-native",children:"AWS AppSync"}),"."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},71426:(e,t,n)=>{var a=n(27378),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,s={},l=null,h=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)o.call(t,a)&&!c.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:i,type:e,key:l,ref:h,props:s,_owner:r.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>s});var a=n(27378);const i=a.createContext({});function s(e){const t=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||o:s(e),a.createElement(i.Provider,{value:r},t)}}}]);