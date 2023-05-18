---
pubDatetime: 2019-07-28
title: "The power of Serverless : Part 1"
tags: ["react", "serverless"]
published: true
keywords: ["react", "serverless", "netlify", "auth0", "FaunaDB"]
ogImage: "./banner.png"
---

Nowadays, for sure you have heard of Serverless and how this new hype can help you build applications fast and almost for free for small ones, which the case for most side projects you are trying to build.

In this article I will share with you a step-by-step from search to launch on how you can build complex logic apps using Serverless services and your brain.

This post is a great use case for people who have a good side project ideas and perhaps don't have enough skills on backend, environment configuration or enough time and budget to start working on it.

### Motivation :

Side projects are an excellent way to express self creativity, they give you the freedom to choose new technology and techniques you maybe don't use in your daily routine work. It is a free step forward without worrying about your client's confidence. Having an experience through side projects will definitely help you have a global idea about best stack and new programming patterns. you only need some courage to suggest some of them to your co-workers in a real project, in case they adopt some of them, congrats, you are the expert.
Maybe you are wondering how can I find time to work on side projects when I have a full-time job?
Well, this is not our main topic but you can find some good answers from those two podcast episodes [syntax fm](https://syntax.fm/show/119/hasty-treat-better-living-through-side-projects) and [ladybug](https://ladybug.dev/episode/side-project-balancing-act/).

<br />

> Our use case today is building a new feature on Geek Blabla website.

### About Geeksblabla

[GeeksBlabla](https://geeksblabla.com/) is one of the [DevC Casablanca](https://www.facebook.com/groups/DevC.Casablanca/) community products. its a 3 to 5 people show talking about a specific dev topic or interviewing a success Moroccan person in IT. Briefly it's a Geeks blabla.

At the moment I am writing this article, there are more than 30 hours of great and valuable discussions. Make sure to take a look.

> Before we start, we need to answer some questions to make sure we understand what we are trying to build.

#### What are we trying to build?

One of the most requested features is adding a new page where people can suggest a new topic and also vote for existing ones and of course with some requirements:

- The Process should be fast and secure.
- Prevent spam submissions.
- The User is only allowed to vote one time per suggestion.

#### What do we have?

- A static website built using Gatsbyjs.
- 0\$ budget.
- Google and internet connection.
- Our Brain.
- Suggest page design.

![](./suggest_blabla.png)

<br/>

> Are you ready? let's start our journey.

### Step 1: Search & Search

This is one of the most important steps to find the correct questions and use our brain, experience, and Google search skills to find the answers.

![](https://cdn-images-1.medium.com/max/800/0*-iyMMzokbsinmSnn)

Questions:

- How to build a voting system?
- Voting system platform? ( Existing sass product)
- Best Serverless databases?
- Serverless resources?

> I already have some answers in my mind but having new ideas would definitely help. ( make it a habit)

**How to build a voting system?**

Guess what! this is a wrong question in our case, all Google result is related to blockchain and mathematics theories.

**Voting system platform? ( Existing SAAS product**)

Recently, you can find a SAAS project for every feature you want: contact page, authentication notification almost everything. that’s why I thought we could find a SASS voting system with a simple API to use. Unfortunately, I only found some complex platform and API that would be impossible to be part of our existing stack.

After a while, I recall a page I already seen in [expo](https://expo.canny.io/feature-requests) website which let developers suggest new features to be added on the expo platform and Guess what this is perfectly what we are trying to build.

As you can see you can suggest new features and other developers can votes.

![](https://cdn-images-1.medium.com/max/800/0*ZE8tM1GKYi7GilHc)

First look, I noticed “ power by canny ” link. Ok let’s see what is Canny

Reading the features page and feeling happy looks like this is the best choice for us. But unfortunately the pricing page isn't what we're anticipating,no freemium plan and starter plan starts from \$50/mo.

![](https://cdn-images-1.medium.com/max/800/0*Yp4JdRhzCW6LCGuZ)

> Good try but at least we can get inspired from how it works.

**Best Serverless resources?**

Jumping from page to page, I found a great website in CSS-tricks team that needs to be added in your bookmarks.
[The power of Serverless for front-end developers](https://serverless.css-tricks.com/) is a complete list of serverless services and resources organized by sections in one place, almost anything you will need in your project : data storage, cloud functions, payments, etc.

## Final notes & search results

Taking some time to search for the best resource using css-trick serverless resources and inspired by Canny features,This is My final notes :

- Authentication is the best way to guarantee one vote per user. There are some other approaches but they are not secure.
- [**Auth0**](https://auth0.com/) for authentication: Free for 7000 active users which is enough for us.
- Using [**Netlify**](https://www.netlify.com/products/) functions to write our API: I love Netlify and we're already using it to host the static website.
- Using [**Faunadb**](https://fauna.com/) as a database: Great free storage quota, support for **GraphQl** and works great with Netlify functions.
- We need an admin panel to validate submission before they appear in the suggestion list.
- App architecture draft

![](./banner.png)
<b/>

> **In the next part we will jump into the coding part and understanding the whole architecture, stay tunned.**

Thanks for reading! If you think other people should read this post. tweet,share and enable notification to get updates.
