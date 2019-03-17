---
date: "2019-03-19"
title: "Choose the right React Native Navigation library"
category: "react"
---



![](https://cdn-images-1.medium.com/max/2600/0*qC8nG1sI8ZP-Dwgr)

If you ever had a chance to program a mobile app, you would have probably noticed that there are two major components that are mostly used: “Lists” and “navigation”. Therefore, mastering those two components is quite crucial in a way that they will spare you many challenging problems during your programming. Eventually, they will ensure delivering a friendly mobile app.

As a React Native developer, I used to face several challenges using “navigation” and “list” during mobile apps programming. Although, I find “list” is now quite easier to manipulate, especially after the release of FlatList with great performance improvement. But when it comes to “navigation”, we still don’t have a powerful solution that the community use as an official navigation system.

In this article, we will take a look at the possible solutions to make the best navigation experience for users and developers too. We will discuss the most popular solutions and help you make the right choice.

Before we start looking for these solutions, you must be wondering :

### Why don’t we have an official navigation component for react-native?

If you have already taken a look at navigation section in the official React Native documentation, you will find that React Native team suggests some community solutions only. You will find an introduction to react-navigation. And if you want to achieve a native look-and-feel for your app, you will find a small section for react-native-navigation as a solution suggestion. And If you are only targeting IOS, a NavigatorIOS solution is suggested in the documentation as well. Therefore, I believe that the key to answering the question above is to have a look at how Facebook uses React Native internally. For all we know, Facebook uses React Native in some screens within an existing native apps (Instagram, Facebook) that already manages navigation natively. Therefore, Facebook doesn’t see the use in investing in a cross-platform solution that looks challenging.

> Back to our main topic of this post.

As I already mentioned, in the official React Native documentation we have two options to consider: react-navigation from React Native community and react-native-navigation from Wix. In this deep comparison, we will discuss multiple aspects from the first impression using each one of them to performance and issues.

But first, I would like to say a few words about these two solutions along with some statistics before diving into comparison.

### React Navigation (RN) 172,148 d/W, 14862 stars, 285 contributors

RN is born from the react native community, it is a full JavaScript library for routing and officially promoted by Facebook and react native documentation as the primary solution for routing.

### React native navigation (RNN) 129,586 d/w, 9764 stars, 269 contributors

RNN is a native navigation implementation developed by Wix. it’s not a Javascript based implementation, The new version V2 has a lot of improvements after the whole rewrite to fix some critical issues in v1.

> Let’s get started

### Getting started

I think the aspect of an easy “getting started” approach is fundamental, considering the diversity of the NPM package ecosystem at this moment. Also, as a developer, you must know that it is important to program a new open source solution that another developer can easily read and eventually use.

Getting started with react-navigation is enjoyable and easy, you just need to add RN as a simple dependency like installing any js one. However, RNN needs a native link and some extra work to be done natively. So it requires diving into Xcode and Android studio to complete the setup. Which is not the best experience for new React Native developers. Linking the library on IOS is an easy task but for the Android, you need to follow the 9 steps carefully.

FYI : RNN does not work with Expo due to Native link.

### Documentation and Tutorial

RN has a more stable API and has a lot of maintainers and contributors which is a result of multiple facts. A full js solution is simple to use compared to a native solution that requires at least mastering three languages to start working on it as maintainer.

RN has great documentation website that covers the basic usage to some complicated cases such as authentication flow. RNN has also good documentation, but sometimes I find myself digging into the code to find out how I should use some features.

The same thing for tutorials, you will find that the majority of react-native tutorials use RN because it’s simple to start with during programming.

### Performance

We recently migrated one of our Apps from RN to RNN. And we were happy to see some improvements in the performance of the app, especially in terms of navigation transition that has become faster. This is good news for Android users, that form 80% of our app users. Whereas, we noticed just a slight improvement in IOS apps performance.

This performance improvement relies on how each solution handles stacks.

RN renders all screens on the same native container. Which is not the best way if you have a complicated stack with some heavy calculation. Whereas, RNN creates a native container for every screen you registered as a screen.

### Right-to-left (RTL) layout support.

Maybe supporting RTL is not in your concern depending on your customers. But in my experience, At some moment, the client wants his app to support Arabic for example. Therefore, choosing a library that supports RTL from the beginning can be a great time-saving.

As the RN official docs mentioned, you might face some problems using RTL layouts. But nothing to worry about, there are many tricks that are used to help you avoid those problems. In fact, while I’m writing this post I just saw a new pull request just merged to support RTL in RNN as a default option.

### Conclusion.

Both libraries RN and RNN are one of the best navigation solutions for React Native. They both have their cons and pros. So, I hope this post can help you make a good choice of the solution that is going to satisfy the needs of your app.

-   If your programming an app that has some complicated stacks and some heavy calculation even with some complexity setup, RNN is a go-to. It will provide your app with the best performance.
-   Use RN for less complicated apps.

I personally decided to go for React Native Navigation in my projects.



### Bonus:

> We are currently using React Navigation, Do you encourage us to migrate to React Native Navigation?

That’s a question usually react navigation users ask!

I used both of them and as I already mentioned we recently migrated an app from RN to RNN.

so I recommend doing the following.

-   Test your app with a real old android phone. If you are seeing some issue go to the next step, All is well congrats
-   Add [react-native-screens](https://github.com/kmagiera/react-native-screens) to your app, a simple solution that aims to expose native navigation container for your stacks screen. Of course, you will see some improvements. Not enough go to step 3.
-   Try to use the I[nteraction Manager](https://facebook.github.io/react-native/docs/interactionmanager) on the place when you have a heavy calculation.
-   Try to update [android JSC](https://github.com/react-native-community/jsc-android-buildscripts)
-   Migrate to RNN: This migrate will take from 3 weeks to 5 weeks depending on your project.

----------

Thanks for reading! If you think other people should read this post and use this project, like , tweet, and share the post.
