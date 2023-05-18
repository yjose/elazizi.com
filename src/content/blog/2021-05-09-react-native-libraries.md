---
title: 15 React Native libraries you should use in 2021
pubDatetime: 2021-05-10
published: true
tags: ["react", "react-native"]
keywords: ["react", "react-native", "libraries"]
ogImage: ./images/react-native-libraries.png
---

> Originally published on [Logrocket Blog](https://blog.logrocket.com/the-best-react-native-libraries-for-leveraging-native-features/)

The React Native community is one of the more vibrant open source communities on the web. [According to GitHub](https://octoverse.github.com/2019/#top-and-trending-projects), the React Native repository is one of the top-rated repos based on the number of contributors. You can find modules and third-party libraries for almost anything you want to implement in your next mobile application.

You’re bound to encounter issues related to deprecated and unmaintained packages, especially packages from the early days of React Native — it’s simply a fact of life. I think it’s an acceptable burden since maintaining a React Native library requires maintaining a project that can depend on at least three languages.

It is crucial to know which libraries to use to create the best possible user and developer experience. In this tutorial, we’ll introduce you to 15 React Native UI libraries that I’ve used in virtually every React Native application I’ve worked on so far in 2021.

We’ll cover the best React Native libraries for:

- [Styling](#styling)
- [Navigation](#navigation)
- [Splash screens](#splash)
- [App icons](#app)
- [Loading placeholders](#loading)
- [Handling and tracking errors](#handling)
- [Fetching data](#fetching)
- [Icons](#icons)
- [Images](#images)
- [Forms](#forms)
- [Testing](#testing)

Then, we’ll go over some tips , including how to:

- [Create a React Native template](#create)
- [Get updates about new libraries](#get)
- [Use TypeScript with React Native](#use)

![lets Go ](https://media.giphy.com/media/JykvbWfXtAHSM/giphy.gif)

### Styling

Styling is a very opinionated topic in the React community and JavaScript communities in general. I have used almost all [CSS-in-JS](https://blog.logrocket.com/goober-a-lightweight-css-in-js-solution/) approaches to style my React and React Native applications. I’ve settled on using [Tailwind CSS](https://blog.logrocket.com/tailwind-css-is-it-tomorrows-bootstrap-ebe560f9d00b/) for web and Restyle for React Native.

[Restyle](https://github.com/Shopify/restyle) is a library developed by Shopify with a type-enforced system for building UI components. With Restyle, you can make a complete design system by defining colors, spacing, and variations and creating your components based on React Native core components and Restyle utilities.

The best feature of Restyle is that it forces you to use only configurations you already declared in your theme, which keeps the application clean and guides your coworkers by keeping their choices as minimal as possible.

Restyle requires you first to create a theme that reflects your design system config (colors, spacing, breakpoints, and variants), like this:

```jsx
import { createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;
```

This what your components will look like using Restyle:

![Restyle](https://lh3.googleusercontent.com/UnKb0bKjB1zrvdkwc_tswrzRafpkJmWYZp4QtII3FROkGUUpI_PWV7cft_pqyNe0M0KnWDKZei49SyGJ2TFMMoW_4Grjq7OW7FfkXB6uqqjZlbQMFpfrVqvEIPmPGqjlqe97lXw)

### Navigation

If you had asked me two years ago, I would’ve cautioned against using [React Navigation](https://reactnavigation.org/) due to some performance challenges and recommended using a native library, such as [React Native Navigation](https://github.com/wix/react-native-navigation), instead.

Fortunately, the React Navigation community, with some help from [Software Mansion](https://swmansion.com/), developed and optimized three of the most-used libraries in the React Native ecosystem: [React Native Screens](https://github.com/software-mansion/react-native-screens), [React Native Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler), and [React Native Reanimated](https://github.com/software-mansion/react-native-reanimated). Those three libraries are the secret behind the huge performance improvement you’ll notice starting from version 4.

Today, React Navigation should be your first choice; you don’t need to think twice.

To start working with React Navigation, you must first install all its dependencies:

```sh
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

You can use three common types of navigator with React Navigation: `Stack`, `Tab`, and `Drawer`. You can also combine multiple navigators and create a complex app architecture.

Here’s a simple example of a stack navigator:

```jsx
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
```

### Splash screens

Adding a splash screen to your mobile application is a tedious task, and the best way to accomplish tedious tasks is to automate them. [`react-native-bootsplash`](https://github.com/zoontek/react-native-bootsplash) enables you to create a fancy splash screen using CLI. All you need to do is provide an image and background color and the package will do the work for you.

I prefer using `react-native-bootsplash` over the most popular package, [`react-native-splash-screen`](https://blog.logrocket.com/building-a-splash-screen-in-react-native/), because the former prevents you from seeing the red errors if you’re facing an issue on startup and sticks on the splash screen instead, which is annoying.

The following command generates a splash screen in `react-native-bootsplash`:

```sh
yarn react-native generate-bootsplash assets/bootsplash_logo_original.png \
  --background-color=F5FCFF \
  --logo-width=100 \
  --assets-path=assets \
  --flavor=main
```

![Splash Screen React Native Bootsplash Display](https://lh3.googleusercontent.com/0eOTeJwdVJXd1PXY3bzhTcN-eWVog79j6_1CBKJmETozw0rJRQiCpvsHBe_q26brDsx5VrQVElXGuRuTPvPP4z-S33OYSaav1UagThpU53RrdVY2an00X8WRsFbtmSentdx86nE)

### App icons

This is another tedious chore we need to automate. To automate generating app icons, we’ll use a plugin called [React Native Make](https://github.com/bamlab/react-native-make). The plugin is available through the React Native CLI and is designed to help you generate app icons for iOS and Android platforms.

To use `react-native-make`, you just need a 1024×1024 version of your app icon and you’re ready to generate app icon assets using the following commands:

```sh
react-native set-icon --path path-to-image
```

### Loading placeholder

One of the most common questions I receive about React Native mobile apps is how to create a loading experience similar to apps such as Facebook and YouTube.

There are multiple solutions to create such an experience, but I would recommend using the [`react-content-loader`](https://github.com/danilowoz/react-content-loader) package. This package is based on the [`react-native-svg`](https://github.com/react-native-svg/react-native-svg) and [Reanimated](https://github.com/software-mansion/react-native-reanimated) libraries, which seem to work very smoothly. The package also provides a playground to help you create a placeholder in your browser.

Here’s an example of a loading placeholder similar to that in the Facebook app:

```tsx
import React from "react";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#d1d1d1"
    foregroundColor="#c4c4c4"
    {...props}
  >
    <Circle cx="31" cy="31" r="15" />
    <Rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
    <Rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
    <Rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
);

export default MyLoader;
```

![Loading Placeholder Example](https://lh5.googleusercontent.com/I9Ns5eRM9rAc-n-S9-B9pPZq7OCMsD5G8N1RI2q2u-C7DYDC9F4RNpsFAPP6yIdqA2eVQv14-t8Vmu-Aunfk9PcBDHh6Z1_eFbWhhRNV55OE5i5Bc1LYxK0w-hGctIfOdVT5TJ4)

### Handling and tracking errors

We all aim to make our React Native application bug-free by using a typing system and increasing testing coverage. However, even with high testing coverage, users are still sure ti encounter and report bugs.

Therefore, it’s crucial to handle your errors and provide feedback to users whenever the app is not working as expected. [`react-native-exception-handler`](https://github.com/a7ul/react-native-exception-handler) offers a simple way to handle native and JavaScript errors and deliver feedback to users.

To make `react-native-exception-handler` work, you must install and link the module. Next, register your global handler for JavaScript and native exceptions, like so:

```tsx
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from "react-native-exception-handler";

setJSExceptionHandler((error, isFatal) => {
  // This is your custom global error handler
  // You do stuff like show an error dialog
  // or hit google analytics to track crashes
  // or hit a custom api to inform the dev team.
});

const exceptionhandler = exceptionString => {
  // your exception handler code here
};
setNativeExceptionHandler(
  exceptionhandler,
  forceAppQuit,
  executeDefaultHandler
);
```

You should track these errors with a third-party tool that notifies you of the errors users encounter in your application so you fix them in future releases.

### Fetching data

My suggestion in this section will depend on your back-end implementation. If you are using a REST API, [react-query](https://github.com/tannerlinsley/react-query) is your best choice here. But instead, if you’re using graphQL, you can use [urql](https://formidable.com/open-source/urql/). Those two libraries will provide you with everything you will need to handle API in your application. You will benefit from a ton of unique features like caching, offline support, optimistic UI, prefetching, and much more.

After installing react-query you can create your own hook to fetch tasks as example:

```tsx
import { useQuery } from "react-query";
import { client } from "./client";

const getTasks = async () => {
  const { data } = await client.get("/tasks");
  return data;
};

export function useTasks() {
  return useQuery("tasks", getTasks);
}
```

And use it inside your components to fetch tasks :

```jsx
export const Tasks = () => {
  const { isLoading, data } = useTasks();

  if (isLoading) {
    return <ActivityIndicator color="#000" />;
  }
  return (
    <FlatList
      ListHeaderComponent={() => <Header />}
      data={data || []}
      renderItem={({ item }) => <TaskItem {...item} />}
      keyExtractor={(_, index) => `item-${index}`}
      showsHorizontalScrollIndicator={false}
    />
  );
};
```

### Icons

Most articles I’ve seen about using icons in React Native suggest using [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) as a default choice. It’s true that this library has numerous icons and fonts, but more often than not, my team found itself creating new fonts to accompany custom designs in our icons. In my opinion, creating a custom font with [react-native-vector-icon](https://github.com/oblador/react-native-vector-icons) makes for a suboptimal experience because you need to generate a new font whenever you want to add a new icon.

Instead, my team start using [`react-native-svg`](https://github.com/react-native-svg/react-native-svg) for our icons with the amazing [SVGR](https://react-svgr.com/playground/) package, which can generate a React component from any SVG file. You can even directly export a React component from a Figma file.

Below is a simple example of an SVG icon generated as React Native components using the [SVGR Figma plugin](https://www.figma.com/community/plugin/749818562498396194/SVG-to-JSX):

```tsx
import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={48} height={1} viewBox="0 0 48 1" {...props}>
      <Path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
    </Svg>
  );
}

export default SvgComponent;
```

### Images

If your application depends mainly on images, you’ll notice some performance issues, especially with lists and scroll view.

Using [FastImage](https://github.com/DylanVann/react-native-fast-image), a performant React Native image component, will help you improve your application without any extra effort. It exactly replaces the image component from React Native and adds some amazing features, such as caching and prioritizing and reloading.

### Forms

There are some great solutions out there for handling forms in React Native, including [Formik](https://formik.org/) and [React Hook Form](https://react-hook-form.com/).

I used to use Formik, but I’ve been hooked on React Hook Form ever since I discovered it. In my opinion, this is the best solution for handling simple and complex forms in React.

Other benefits of using React Hook Form include state management, validation, errors management, and multiple array fields.

### Testing

If you’ve already worked with the testing libraries to test your frontend applications, your knowledge and experience will be applicable to testing in React Native. [React Native Testing Library](https://github.com/callstack/react-native-testing-library) has virtually the same API.

Here’s a simple counter unit test using React Native Testing Library:

```jsx
import "react-native";
import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

it("renders correctly", () => {
  // render component
  const { getByText } = render(<Counter />);

  // get buttons and text elements
  const decrement = getByText(/decrement/i);
  const increment = getByText(/increment/i);
  const counterText = getByText(/Current count:/i);

  // Make sure you have the right values
  expect(counterText.props.children).toEqual(["Current count: ", 0]);
  // trigger an event
  fireEvent.press(increment);
  expect(counterText.props.children).toEqual(["Current count: ", 1]);
  fireEvent.press(decrement);
  expect(counterText.props.children).toEqual(["Current count: ", 0]);
});
```

To test your application’s behavior with confidence, I would recommend writing end-to-end tests using the [Detox](https://github.com/wix/Detox) library from Wix.

## Tips and best practices for using React Native UI libraries

Below are some bonus tips to help you get the most out of the React Native libraries detailed above.

#### Create a React Native template

If you expect to use all these libraries in your upcoming React Native projects, it might be worth your time to create a simple template so you can easily start a new project.

We recently created a template for our mobile team to start new projects with all the aforementioned libraries. Here it is if you want to use it:

```sh
npx react-native init MyApp --template https://github.com/obytes/react-native-template-obytes
```

#### Get updates about new libraries

One of the most effective ways to get updated about new libraries and best practices is to follow open source projects. I like to check the package.json file for every React Native project shared on my network. Whenever I find a new library, I search for it to learn more.

Also, be sure to follow the [react-native topic on GitHub explore page](https://github.com/topics/react-native). You’ll receive a ton of React Native projects and discussions.

#### Use TypeScript with React Native

I started using TypeScript as the primary language for React Native projects about a year-and-a-half ago, and I wish I had done so earlier. Using TypeScript helps you improve the quality of your code and the developer experience because it helps you prevent errors while typing and improve autocomplete functionality.

It’s important to note that TypeScript is only a JavaScript superset with optional static typing. It doesn’t require you to learn a whole new language.

## Conclusion

If you think I am missing some great libraries that can help me improve my React Native Application please make sure to let me know in the comments.

I hope you found that interesting, informative, and entertaining. I would be more than happy to hear your remarks and thoughts.

If you think other people should read this post. Tweet, share and [Follow me on twitter](https://twitter.com/ElaziziYoussouf) for the next articles.
