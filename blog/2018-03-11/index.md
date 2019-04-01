---
date: 2018-03-11
title: "Create a fancy burger menu using reactjs-popup"
category: "react"
published: true
---

> This article is a step by step tutorial to create a simple burger menu for your website by using reactjs-popup

![](https://cdn-images-1.medium.com/max/800/1*ttcLA5BrtUAXSBo6YfoQoA.gif)

burger menu deom

[Reactjs-popup](https://react-popup.netlify.com/) is a new and simple react popup component built using react fragments which is one of the new features that comes with react 16. And it can handle multiple use cases.By using this tiny react popup component you can create a Tooltips, Modals and Menus.

By the end of this article you will be able to create your custom burger menu with reactjs-popup.

> Ready!! Let’s get started.

#### Step 1: Create the burger Icon component.

We will start by building a burger icon component,

As you see we pass the ‘open’ prop to the component so we can permute the icon class name as the preview example explains

Burger icon css

![](https://cdn-images-1.medium.com/max/800/1*0Tqwq8OspuZd6vKrfFE0Yw.png)

burger Icon state

You can find some good examples for burger icon with animation [here](https://jonsuh.com/hamburgers/)

#### Step 2: Customize CSS Menu

Our menu will be a simple list, so let’s take the reactjs-popup home page menu and use it as an example.

As you see this menu is a simple ul element, nothing special.

#### Step 3:integrate all stuff with reactjs-popup

All we need to do in this part is to import the reactjs-popup component and set the burger menu as a trigger prop for the popup component and the menu as the popup children. simple, is it ? magic !!

Thanks to the ‘function as a children pattern’ the trigger can access to the popup state easily. we need also to pass props to the burger component like the following.

Adding some custom css and this is the final result.

![](https://cdn-images-1.medium.com/max/800/1*ttcLA5BrtUAXSBo6YfoQoA.gif)

final result

If you read this article from your smartphone , you can see the burger button to launch the menu in [reactjs-popup home page.](https://react-popup.netlify.com/)

Demo Code source

[**yjose/reactjs-popup-burger-menu**
\_reactjs-popup-burger-menu - reactjs-popup burger menu example_github.com](https://github.com/yjose/reactjs-popup-burger-menu "https://github.com/yjose/reactjs-popup-burger-menu")[](https://github.com/yjose/reactjs-popup-burger-menu)

Read more from my articles :

[**Introducing reactjs-popup 🎉 —React popup, Modals, Tooltips and Menus — All in one**
\_This article is about giving you a simple overview of what you can do with react popup and how to use it effectively.\_hackernoon.com](https://hackernoon.com/introducing-reactjs-popup-modals-tooltips-and-menus-all-in-one-227de37766fa "https://hackernoon.com/introducing-reactjs-popup-modals-tooltips-and-menus-all-in-one-227de37766fa")[](https://hackernoon.com/introducing-reactjs-popup-modals-tooltips-and-menus-all-in-one-227de37766fa)

[**Frontend Performance Check-list For Production**
\_In web development and exactly front-end web, we spend more time searching for the best design and content to our…\_hackernoon.com](https://hackernoon.com/front-end-performance-check-list-for-production-4e930cb63e8a "https://hackernoon.com/front-end-performance-check-list-for-production-4e930cb63e8a")[](https://hackernoon.com/front-end-performance-check-list-for-production-4e930cb63e8a)

[**A step-by-step guide to making pure-CSS tooltips**
\_I recently worked through a short tutorial about creating simple tooltips using pure CSS (and no additional HTML…\_medium.freecodecamp.org](https://medium.freecodecamp.org/a-step-by-step-guide-to-making-pure-css-tooltips-3d5a3e237346 "https://medium.freecodecamp.org/a-step-by-step-guide-to-making-pure-css-tooltips-3d5a3e237346")[](https://medium.freecodecamp.org/a-step-by-step-guide-to-making-pure-css-tooltips-3d5a3e237346)

Thanks for reading! If you think other people should read this post and use this component,tweet and share the post.

Remember to follow me on Medium so you can get notified about my future posts.

If you liked this story, feel free to 👏👏👏 a few times (Up to 50 times. Seriously).
