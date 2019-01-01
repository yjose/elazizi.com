---
date: "2018-09-21"
title: "The missing piece in the beginner’s guides : React Native"
category: "react"
---

> **This article was originally published on the**  [**Obytes blog**](https://www.obytes.com/blog/)**.**

For the past few months, I have been working with  [Barmej](https://www.barmej.com/)’s team to build a mobile app using  **React native**. It occurred to me to write this helpful article about this project and share my perspective, ideas and some answers to the questions that beginners usually ask. This article is for every developer with React web background. It is basically about how to start building apps with React Native.

In this paper, I will not talk about setup and basic stuff. Instead, I will respond to some critical questions that you would certainly ask during your React Native app building.

This article is sorted in parts. In each part, you will have the answer to questions related to React Native development.

> Let’s get started!!

### Be ready

If you are here reading this article, you’re already ready! But first, let me explain what I mean by ‘Be ready’. It is commonly known that most of React Native developers are also web developers. More than 70% of react-native developers have been working on web development and Reactjs stuff. If it’s your case — probably it is — then I am sorry to tell you that you are going to miss your amazing Web development experience. Because the experience on mobile will not be the same.

That doesn’t mean that Reactjs mobile part is not ready yet, but I think this because of the amazing stuff that happened on the web platform every Day. However, I guarantee you that this experience will be much fun than developing on Native languages ( Android and swift ).

![](https://cdn-images-1.medium.com/max/1600/0*T48w-NkE2rLKV4m5)



As mentioned in React Native official documentation, React Native uses Hot Reloading to build apps faster. Instead of recompiling, you can reload your app instantly. I am sure you’re already familiar with it if you come from the React web development world and it worked well with you. However, in the mobile app building, you are likely to lose the Hot Reloading functionality if you are not careful enough! Especially when your mobile app is growing a little bit because the HMR does not support functional components on React Native.

That’s why you need to be ready!

### React Native Difficulty Curve ( Is React native difficult ?)

If you are familiar with Reactjs in the web, well you are exactly where you are supposed to be! If not, I think the best way to start with react-native is to build a simple React web project so you can learn some fundamental Reactjs and Reactjs ecosystem stuff without suffering from platform issues that can block your React Native fresh learning path.

The next important idea that I want to highlight in this section is the Difficulty Curve, and when you will find the difficulty during your React Native project.

As a developer with Reactjs background, I believe that we start with few struggles with React Native. Getting something to just appear on the screen is straightforward, it’s not challenging but anything more complicated like start a navigation or some native challenging stuff, You are going to start using some third-party libraries. And using some of them will not be the best experience you’d like.

The graph below explains exactly my React Native experience. When I start a new project with some basic stuff it looks like ‘’wait what is simple like that ‘’. Then, after using some third party libs, the project’s progress goes slowly and I face many problems related to those libs upgrade. It’s a normal thing because maintaining a React Native open source project is not a simple task. You need to have a strong background in JS, Java, and Swift. Those third-party libs are developed by great people who might be doing this as a hobby. They have not been paid for them so the quality is not always at its peak. (Speaking of it, I want to give credits to the React Native community for their great work!)

![](https://cdn-images-1.medium.com/max/1600/1*W7U6g5wrfqlNIp2i0jlHeA.png)



### React Native init vs expo

To start a new project with React Native you need Android Studio and XCode. Android Studio means a java environment setup. XCode means you simply need to have a MAC Laptop, yea !! when the expo comes to the React Native ecosystem, they introduce a new way to build a whole mobile app without even using Android Studio or Xcode. I believe they do a great work to allow non-MAC-OS users start building iOS app as well. Not only that expo comes with some great features such as Push Notifications, Asset Manager and sharing the app with your testers without any difficulty. expo comes with a major issue that it does not support native module. This issue is one of the reasons why I choose `react-native init` over Expo. And to be honest, I don’t want to add an extra layer to my app.

That doesn’t mean ”don’t use expo!”, Expo is super useful for a lot of people and the React Native team implements `react-native-create-app` with the expo SDK. I think it is the best choice to create your first app and then migrate to the ‘react-native init’ way. You can read more about this topic in this open discussion issue on the Reactjs community  [GitHub repo](https://github.com/react-community/create-react-native-app/issues/516).

### iOS or Android ( Do I need to learn java/swift stuff)

I highly recommend having some experience with java and swift. It would be very helpful and it will give you more control over your work. If you have some time I suggest to watch some tutorials that introduce the basics of app architecture and configuration with Java and swift. This experience can be a gamechanger for some critique situations in your app building. For example, upgrading some third-party libs for your projects or adding some features to a native module need some experience with Gradle configuration at least.

one last advice related to this section is that I highly recommend starting development for iOS first. It’s related to iOS stability over the Android platform. Developing on iOS platform is much easier than Android.

### State Management and API

This is the part which needs your  **Reactjs**  experience, perhaps you are using Redux or Mobx to manage your app state, you can use them too. But the mobile platform has some specific requirements over the web platform. That means extra features that must be implemented such as the offline ability, caching strategies and some optimistic update.

During the Barmej development, we opted for a redux & redux-observable & redux-persist stack, and using the same rest API as the web app and also we tried to use some web app code as much as possible. Then, after a while, we’ve found out that the app is not on the best performance we want it to be. Because of the huge number of API's call that we needed to make, the normalization process for caching and the offline support.

To be a part of such a great team that takes the risk to migrate the REST API to a GraphQl API make my job more simple. Using a GraphQl client such as apollo-client that comes with almost every feature we need out of the box helps to make the app building smoother and feels more native.

_At this point, we are convinced by the GraphQl stack over the redux one. And we are on our way to remove the redux stack dependencies and use the context API for local state management and the apollo-client for the APIs._

### Conclusion

This article has come to an end for now. It is normal to have challenging situations during your app development.  **_We are using React Native for a while now and we are convinced by our choice._**

I will post another article soon about React Native development, so stay tuned and don’t forget to follow me.

Thanks for reading! If you think this article was helpful to you then it will definitely be helpful to many others, then go ahead and share it because “ sharing is caring”!