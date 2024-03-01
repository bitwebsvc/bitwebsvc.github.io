/*! For license information please see 801550f5.966b063f.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[70178],{32963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(24246),i=n(71670);const o={id:"testing-overview",title:"Testing",author:"Vojtech Novak",authorURL:"https://twitter.com/vonovak",description:"This guide introduces React Native developers to the key concepts behind testing, how to write good tests, and what kinds of tests you can incorporate into your workflow."},r=void 0,a={id:"testing-overview",title:"Testing",description:"This guide introduces React Native developers to the key concepts behind testing, how to write good tests, and what kinds of tests you can incorporate into your workflow.",source:"@site/versioned_docs/version-0.70/testing-overview.md",sourceDirName:".",slug:"/testing-overview",permalink:"/docs/0.70/testing-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/testing-overview.md",tags:[],version:"0.70",lastUpdatedAt:1704504779,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{id:"testing-overview",title:"Testing",author:"Vojtech Novak",authorURL:"https://twitter.com/vonovak",description:"This guide introduces React Native developers to the key concepts behind testing, how to write good tests, and what kinds of tests you can incorporate into your workflow."},sidebar:"docs",previous:{title:"Debugging",permalink:"/docs/0.70/debugging"},next:{title:"Performance Overview",permalink:"/docs/0.70/performance"}},c={},l=[{value:"Why Test",id:"why-test",level:2},{value:"Static Analysis",id:"static-analysis",level:2},{value:"Writing Testable Code",id:"writing-testable-code",level:2},{value:"Writing Tests",id:"writing-tests",level:2},{value:"Structuring Tests",id:"structuring-tests",level:3},{value:"Unit tests",id:"unit-tests",level:2},{value:"Mocking",id:"mocking",level:3},{value:"Integration Tests",id:"integration-tests",level:2},{value:"Component Tests",id:"component-tests",level:2},{value:"Testing User Interactions",id:"testing-user-interactions",level:3},{value:"Testing Rendered Output",id:"testing-rendered-output",level:3},{value:"End-to-End Tests",id:"end-to-end-tests",level:2},{value:"Summary",id:"summary",level:2},{value:"Links",id:"links",level:3}];function h(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",a:"a",blockquote:"blockquote",h3:"h3",pre:"pre",code:"code",ol:"ol",em:"em",hr:"hr"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"As your codebase expands, small errors and edge cases you don\u2019t expect can cascade into larger failures. Bugs lead to bad user experience and ultimately, business losses. One way to prevent fragile programming is to test your code before releasing it into the wild."}),"\n",(0,s.jsx)(t.p,{children:"In this guide, we will cover different, automated ways to ensure your app works as expected, ranging from static analysis to end-to-end tests."}),"\n",(0,s.jsx)("img",{src:"/docs/assets/diagram_testing.svg",alt:"Testing is a cycle of fixing, testing, and either passing to release or failing back into testing."}),"\n",(0,s.jsx)(t.h2,{id:"why-test",children:"Why Test"}),"\n",(0,s.jsx)(t.p,{children:"We're humans, and humans make mistakes. Testing is important because it helps you uncover these mistakes and verifies that your code is working. Perhaps even more importantly, testing ensures that your code continues to work in the future as you add new features, refactor the existing ones, or upgrade major dependencies of your project."}),"\n",(0,s.jsx)(t.p,{children:"There is more value in testing than you might realize. One of the best ways to fix a bug in your code is to write a failing test that exposes it. Then when you fix the bug and re-run the test, if it passes it means the bug is fixed, never reintroduced into the code base."}),"\n",(0,s.jsx)(t.p,{children:"Tests can also serve as documentation for new people joining your team. For people who have never seen a codebase before, reading tests can help them understand how the existing code works."}),"\n",(0,s.jsxs)(t.p,{children:["Last but not least, more automated testing means less time spent with manual ",(0,s.jsx)("abbr",{title:"Quality Assurance",children:"QA"}),", freeing up valuable time."]}),"\n",(0,s.jsx)(t.h2,{id:"static-analysis",children:"Static Analysis"}),"\n",(0,s.jsx)(t.p,{children:"The first step to improve your code quality is to start using static analysis tools. Static analysis checks your code for errors as you write it, but without running any of that code."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Linters"})," analyze code to catch common errors such as unused code and to help avoid pitfalls, to flag style guide no-nos like using tabs instead of spaces (or vice versa, depending on your configuration)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Type checking"})," ensures that the construct you\u2019re passing to a function matches what the function was designed to accept, preventing passing a string to a counting function that expects a number, for instance."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["React Native comes with two such tools configured out of the box: ",(0,s.jsx)(t.a,{href:"https://eslint.org/",children:"ESLint"})," for linting and ",(0,s.jsx)(t.a,{href:"https://flow.org/en/docs/",children:"Flow"})," for type checking. You can also use ",(0,s.jsx)(t.a,{href:"typescript",children:"TypeScript"}),", which is a typed language that compiles to plain JavaScript."]}),"\n",(0,s.jsx)(t.h2,{id:"writing-testable-code",children:"Writing Testable Code"}),"\n",(0,s.jsx)(t.p,{children:"To start with tests, you first need to write code that is testable. Consider an aircraft manufacturing process - before any model first takes off to show that all of its complex systems work well together, individual parts are tested to guarantee they are safe and function correctly. For example, wings are tested by bending them under extreme load; engine parts are tested for their durability; the windshield is tested against simulated bird impact."}),"\n",(0,s.jsx)(t.p,{children:"Software is similar. Instead of writing your entire program in one huge file with many lines of code, you write your code in multiple small modules that you can test more thoroughly than if you tested the assembled whole. In this way, writing testable code is intertwined with writing clean, modular code."}),"\n",(0,s.jsx)(t.p,{children:"To make your app more testable, start by separating the view part of your app\u2014your React components\u2014from your business logic and app state (regardless of whether you use Redux, MobX or other solutions). This way, you can keep your business logic testing\u2014which shouldn\u2019t rely on your React components\u2014independent of the components themselves, whose job is primarily rendering your app\u2019s UI!"}),"\n",(0,s.jsx)(t.p,{children:"Theoretically, you could go so far as to move all logic and data fetching out of your components. This way your components would be solely dedicated to rendering. Your state would be entirely independent of your components. Your app\u2019s logic would work without any React components at all!"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"We encourage you to further explore the topic of testable code in other learning resources."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"writing-tests",children:"Writing Tests"}),"\n",(0,s.jsxs)(t.p,{children:["After writing testable code, it\u2019s time to write some actual tests! The default template of React Native ships with ",(0,s.jsx)(t.a,{href:"https://jestjs.io",children:"Jest"})," testing framework. It includes a preset that's tailored to this environment so you can get productive without tweaking the configuration and mocks straight away\u2014",(0,s.jsx)(t.a,{href:"#mocking",children:"more on mocks"})," shortly. You can use Jest to write all types of tests featured in this guide."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"If you do test-driven development, you actually write tests first! That way, testability of your code is given."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"structuring-tests",children:"Structuring Tests"}),"\n",(0,s.jsx)(t.p,{children:"Your tests should be short and ideally test only one thing. Let's start with an example unit test written with Jest:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"it('given a date in the past, colorForDueDate() returns red', () => {\n  expect(colorForDueDate('2000-10-20')).toBe('red');\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The test is described by the string passed to the ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/en/api#testname-fn-timeout",children:(0,s.jsx)(t.code,{children:"it"})})," function. Take good care writing the description so that it\u2019s clear what is being tested. Do your best to cover the following:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Given"})," - some precondition"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"When"})," - some action executed by the function that you\u2019re testing"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Then"})," - the expected outcome"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This is also known as AAA (Arrange, Act, Assert)."}),"\n",(0,s.jsxs)(t.p,{children:["Jest offers ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/en/api#describename-fn",children:(0,s.jsx)(t.code,{children:"describe"})})," function to help structure your tests. Use ",(0,s.jsx)(t.code,{children:"describe"})," to group together all tests that belong to one functionality. Describes can be nested, if you need that. Other functions you'll commonly use are ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/en/api#beforeeachfn-timeout",children:(0,s.jsx)(t.code,{children:"beforeEach"})})," or ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/en/api#beforeallfn-timeout",children:(0,s.jsx)(t.code,{children:"beforeAll"})})," that you can use for setting up the objects you're testing. Read more in the ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/en/api",children:"Jest api reference"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"If your test has many steps or many expectations, you probably want to split it into multiple smaller ones. Also, ensure that your tests are completely independent of one another. Each test in your suite must be executable on its own without first running some other test. Conversely, if you run all your tests together, the first test must not influence the output of the second one."}),"\n",(0,s.jsxs)(t.p,{children:["Lastly, as developers we like when our code works great and doesn't crash. With tests, this is often the opposite. Think of a failed test as of a ",(0,s.jsx)(t.em,{children:"good thing!"})," When a test fails, it often means something is not right. This gives you an opportunity to fix the problem before it impacts the users."]}),"\n",(0,s.jsx)(t.h2,{id:"unit-tests",children:"Unit tests"}),"\n",(0,s.jsx)(t.p,{children:"Unit tests cover the smallest parts of code, like individual functions or classes."}),"\n",(0,s.jsx)(t.p,{children:"When the object being tested has any dependencies, you\u2019ll often need to mock them out, as described in the next paragraph."}),"\n",(0,s.jsxs)(t.p,{children:["The great thing about unit tests is that they are quick to write and run. Therefore, as you work, you get fast feedback about whether your tests are passing. Jest even has an option to continuously run tests that are related to code you\u2019re editing: ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/en/cli#watch",children:"Watch mode"}),"."]}),"\n",(0,s.jsx)("img",{src:"/docs/assets/p_tests-unit.svg",alt:" "}),"\n",(0,s.jsx)(t.h3,{id:"mocking",children:"Mocking"}),"\n",(0,s.jsx)(t.p,{children:"Sometimes, when your tested objects have external dependencies, you\u2019ll want to \u201cmock them out.\u201d \u201cMocking\u201d is when you replace some dependency of your code with your own implementation."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Generally, using real objects in your tests is better than using mocks but there are situations where this is not possible. For example: when your JS unit test relies on a native module written in Java or Objective-C."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Imagine you\u2019re writing an app that shows the current weather in your city and you\u2019re using some external service or other dependency that provides you with the weather information. If the service tells you that it\u2019s raining, you want to show an image with a rainy cloud. You don\u2019t want to call that service in your tests, because:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"It could make the tests slow and unstable (because of the network requests involved)"}),"\n",(0,s.jsx)(t.li,{children:"The service may return different data every time you run the test"}),"\n",(0,s.jsx)(t.li,{children:"Third party services can go offline when you really need to run tests!"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Therefore, you can provide a mock implementation of the service, effectively replacing thousands of lines of code and some internet-connected thermometers!"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Jest comes with ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/en/mock-functions#mocking-modules",children:"support for mocking"})," from function level all the way to module level mocking."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"integration-tests",children:"Integration Tests"}),"\n",(0,s.jsx)(t.p,{children:"When writing larger software systems, individual pieces of it need to interact with each other. In unit testing, if your unit depends on another one, you\u2019ll sometimes end up mocking the dependency, replacing it with a fake one."}),"\n",(0,s.jsx)(t.p,{children:"In integration testing, real individual units are combined (same as in your app) and tested together to ensure that their cooperation works as expected. This is not to say that mocking does not happen here: you\u2019ll still need mocks (for example, to mock communication with a weather service), but you'll need them much less than in unit testing."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:'Please note that the terminology around what integration testing means is not always consistent. Also, the line between what is a unit test and what is an integration test may not always be clear. For this guide, your test falls into "integration testing" if it:'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Combines several modules of your app as described above"}),"\n",(0,s.jsx)(t.li,{children:"Uses an external system"}),"\n",(0,s.jsx)(t.li,{children:"Makes a network call to other application (such as the weather service API)"}),"\n",(0,s.jsxs)(t.li,{children:["Does any kind of file or database ",(0,s.jsx)("abbr",{title:"Input/Output",children:"I/O"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("img",{src:"/docs/assets/p_tests-integration.svg",alt:" "}),"\n",(0,s.jsx)(t.h2,{id:"component-tests",children:"Component Tests"}),"\n",(0,s.jsx)(t.p,{children:"React components are responsible for rendering your app, and users will directly interact with their output. Even if your app's business logic has high testing coverage and is correct, without component tests you may still deliver a broken UI to your users. Component tests could fall into both unit and integration testing, but because they are such a core part of React Native, we'll cover them separately."}),"\n",(0,s.jsx)(t.p,{children:"For testing React components, there are two things you may want to test:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Interaction: to ensure the component behaves correctly when interacted with by a user (eg. when user presses a button)"}),"\n",(0,s.jsx)(t.li,{children:"Rendering: to ensure the component render output used by React is correct (eg. the button's appearance and placement in the UI)"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For example, if you have a button that has an ",(0,s.jsx)(t.code,{children:"onPress"})," listener, you want to test that the button both appears correctly and that tapping the button is correctly handled by the component."]}),"\n",(0,s.jsx)(t.p,{children:"There are several libraries that can help you testing these:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["React\u2019s ",(0,s.jsx)(t.a,{href:"https://reactjs.org/docs/test-renderer.html",children:"Test Renderer"}),", developed alongside its core, provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://callstack.github.io/react-native-testing-library/",children:"React Native Testing Library"})," builds on top of React\u2019s test renderer and adds ",(0,s.jsx)(t.code,{children:"fireEvent"})," and ",(0,s.jsx)(t.code,{children:"query"})," APIs described in the next paragraph."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Component tests are only JavaScript tests running in Node.js environment. They do ",(0,s.jsx)(t.em,{children:"not"})," take into account any iOS, Android, or other platform code which is backing the React Native components. It follows that they cannot give you a 100% confidence that everything works for the user. If there is a bug in the iOS or Android code, they will not find it."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:"/docs/assets/p_tests-component.svg",alt:" "}),"\n",(0,s.jsx)(t.h3,{id:"testing-user-interactions",children:"Testing User Interactions"}),"\n",(0,s.jsxs)(t.p,{children:["Aside from rendering some UI, your components handle events like ",(0,s.jsx)(t.code,{children:"onChangeText"})," for ",(0,s.jsx)(t.code,{children:"TextInput"})," or ",(0,s.jsx)(t.code,{children:"onPress"})," for ",(0,s.jsx)(t.code,{children:"Button"}),". They may also contain other functions and event callbacks. Consider the following example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"function GroceryShoppingList() {\n  const [groceryItem, setGroceryItem] = useState('');\n  const [items, setItems] = useState([]);\n\n  const addNewItemToShoppingList = useCallback(() => {\n    setItems([groceryItem, ...items]);\n    setGroceryItem('');\n  }, [groceryItem, items]);\n\n  return (\n    <>\n      <TextInput\n        value={groceryItem}\n        placeholder=\"Enter grocery item\"\n        onChangeText={text => setGroceryItem(text)}\n      />\n      <Button\n        title=\"Add the item to list\"\n        onPress={addNewItemToShoppingList}\n      />\n      {items.map(item => (\n        <Text key={item}>{item}</Text>\n      ))}\n    </>\n  );\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"When testing user interactions, test the component from the user perspective\u2014what's on the page? What changes when interacted with?"}),"\n",(0,s.jsx)(t.p,{children:"As a rule of thumb, prefer using things users can see or hear:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["make assertions using rendered text or ",(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/accessibility#accessibility-properties",children:"accessibility helpers"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Conversely, you should avoid:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"making assertions on component props or state"}),"\n",(0,s.jsx)(t.li,{children:"testID queries"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Avoid testing implementation details like props or state\u2014while such tests work, they are not oriented toward how users will interact with the component and tend to break by refactoring (for example when you'd like to rename some things or rewrite class component using hooks)."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["React class components are especially prone to testing their implementation details such as internal state, props or event handlers. To avoid testing implementation details, prefer using function components with Hooks, which make relying on component internals ",(0,s.jsx)(t.em,{children:"harder"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Component testing libraries such as ",(0,s.jsx)(t.a,{href:"https://callstack.github.io/react-native-testing-library/",children:"React Native Testing Library"})," facilitate writing user-centric tests by careful choice of provided APIs. The following example uses ",(0,s.jsx)(t.code,{children:"fireEvent"})," methods ",(0,s.jsx)(t.code,{children:"changeText"})," and ",(0,s.jsx)(t.code,{children:"press"})," that simulate a user interacting with the component and a query function ",(0,s.jsx)(t.code,{children:"getAllByText"})," that finds matching ",(0,s.jsx)(t.code,{children:"Text"})," nodes in the rendered output."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"test('given empty GroceryShoppingList, user can add an item to it', () => {\n  const {getByPlaceholder, getByText, getAllByText} = render(\n    <GroceryShoppingList />,\n  );\n\n  fireEvent.changeText(\n    getByPlaceholder('Enter grocery item'),\n    'banana',\n  );\n  fireEvent.press(getByText('Add the item to list'));\n\n  const bananaElements = getAllByText('banana');\n  expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This example is not testing how some state changes when you call a function. It tests what happens when a user changes text in the ",(0,s.jsx)(t.code,{children:"TextInput"})," and presses the ",(0,s.jsx)(t.code,{children:"Button"}),"!"]}),"\n",(0,s.jsx)(t.h3,{id:"testing-rendered-output",children:"Testing Rendered Output"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/en/snapshot-testing",children:"Snapshot testing"})," is an advanced kind of testing enabled by Jest. It is a very powerful and low-level tool, so extra attention is advised when using it."]}),"\n",(0,s.jsxs)(t.p,{children:['A "component snapshot" is a JSX-like string created by a custom React serializer built into Jest. This serializer lets Jest translate React component trees to string that\'s human-readable. Put another way: a component snapshot is a textual representation of your component\u2019s render output ',(0,s.jsx)(t.em,{children:"generated"})," during a test run. It may look like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'<Text\n  style={\n    Object {\n      "fontSize": 20,\n      "textAlign": "center",\n    }\n  }>\n  Welcome to React Native!\n</Text>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["With snapshot testing, you typically first implement your component and then run the snapshot test. The snapshot test then creates a snapshot and saves it to a file in your repo as a reference snapshot. ",(0,s.jsx)(t.strong,{children:"The file is then committed and checked during code review"}),". Any future changes to the component render output will change its snapshot, which will cause the test to fail. You then need to update the stored reference snapshot for the test to pass. That change again needs to be committed and reviewed."]}),"\n",(0,s.jsx)(t.p,{children:"Snapshots have several weak points:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"For you as a developer or reviewer, it can be hard to tell whether a change in snapshot is intended or whether it's evidence of a bug. Especially large snapshots can quickly become hard to understand and their added value becomes low."}),"\n",(0,s.jsx)(t.li,{children:"When snapshot is created, at that point it is considered to be correct-even in the case when the rendered output is actually wrong."}),"\n",(0,s.jsxs)(t.li,{children:["When a snapshot fails, it's tempting to update it using the ",(0,s.jsx)(t.code,{children:"--updateSnapshot"})," jest option without taking proper care to investigate whether the change is expected. Certain developer discipline is thus needed."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Snapshots themselves do not ensure that your component render logic is correct, they are merely good at guarding against unexpected changes and for checking that the components in the React tree under test receive the expected props (styles and etc.)."}),"\n",(0,s.jsxs)(t.p,{children:["We recommend that you only use small snapshots (see ",(0,s.jsxs)(t.a,{href:"https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md",children:[(0,s.jsx)(t.code,{children:"no-large-snapshots"})," rule"]}),"). If you want to test a ",(0,s.jsx)(t.em,{children:"change"})," between two React component states, use ",(0,s.jsx)(t.a,{href:"https://github.com/jest-community/snapshot-diff",children:(0,s.jsx)(t.code,{children:"snapshot-diff"})}),". When in doubt, prefer explicit expectations as described in the previous paragraph."]}),"\n",(0,s.jsx)("img",{src:"/docs/assets/p_tests-snapshot.svg",alt:" "}),"\n",(0,s.jsx)(t.h2,{id:"end-to-end-tests",children:"End-to-End Tests"}),"\n",(0,s.jsx)(t.p,{children:"In end-to-end (E2E) tests, you verify your app is working as expected on a device (or a simulator / emulator) from the user perspective."}),"\n",(0,s.jsx)(t.p,{children:"This is done by building your app in the release configuration and running the tests against it. In E2E tests, you no longer think about React components, React Native APIs, Redux stores or any business logic. That is not the purpose of E2E tests and those are not even accessible to you during E2E testing."}),"\n",(0,s.jsxs)(t.p,{children:["Instead, E2E testing libraries allow you to find and control elements in the screen of your app: for example, you can ",(0,s.jsx)(t.em,{children:"actually"})," tap buttons or insert text into ",(0,s.jsx)(t.code,{children:"TextInputs"})," the same way a real user would. Then you can make assertions about whether or not a certain element exists in the app\u2019s screen, whether or not it\u2019s visible, what text it contains, and so on."]}),"\n",(0,s.jsx)(t.p,{children:"E2E tests give you the highest possible confidence that part of your app is working. The tradeoffs include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"writing them is more time consuming compared to the other types of tests"}),"\n",(0,s.jsx)(t.li,{children:"they are slower to run"}),"\n",(0,s.jsx)(t.li,{children:'they are more prone to flakiness (a "flaky" test is a test which randomly passes and fails without any change to code)'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Try to cover the vital parts of your app with E2E tests: authentication flow, core functionalities, payments, etc. Use faster JS tests for the non-vital parts of your app. The more tests you add, the higher your confidence, but also, the more time you'll spend maintaining and running them. Consider the tradeoffs and decide what's best for you."}),"\n",(0,s.jsxs)(t.p,{children:["There are several E2E testing tools available: in the React Native community, ",(0,s.jsx)(t.a,{href:"https://github.com/wix/detox/",children:"Detox"})," is a popular framework because it\u2019s tailored for React Native apps. Another popular library in the space of iOS and Android apps is ",(0,s.jsx)(t.a,{href:"http://appium.io/",children:"Appium"}),"."]}),"\n",(0,s.jsx)("img",{src:"/docs/assets/p_tests-e2e.svg",alt:" "}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(t.p,{children:"We hope you enjoyed reading and learned something from this guide. There are many ways you can test your apps. It may be hard to decide what to use at first. However, we believe it all will make sense once you start adding tests to your awesome React Native app. So what are you waiting for? Get your coverage up!"}),"\n",(0,s.jsx)(t.h3,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://reactjs.org/docs/testing.html",children:"React testing overview"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://callstack.github.io/react-native-testing-library/",children:"React Native Testing Library"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/en/tutorial-react-native",children:"Jest docs"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/wix/detox/",children:"Detox"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"http://appium.io/",children:"Appium"})}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["This guide originally authored and contributed in full by ",(0,s.jsx)(t.a,{href:"https://twitter.com/vonovak",children:"Vojtech Novak"}),"."]})})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},71426:(e,t,n)=>{var s=n(27378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,o={},l=null,h=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)r.call(t,s)&&!c.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:i,type:e,key:l,ref:h,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>o});var s=n(27378);const i=s.createContext({});function o(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||r:o(e),s.createElement(i.Provider,{value:a},t)}}}]);