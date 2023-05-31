---
title: GitHub Feed is underrated
tags: ["GitHub", "learning"]
keywords: ["GitHub", "learning"]
pubDatetime: 2023-06-01
description: Github Feed is underrated and here is why?
---

One of the questions I get asked a lot is how I keep up with the latest updates in my field of expertise, and I think this is a fear and very common question nowadays, due to the nature of our field.

But the question that triggered me to write this article is how do I keep learning new things in a situation where I am the senior one in the team and there is no one to learn from in the team.

I can relate to this question because I have been in this situation before, and I managed to find my way out of it.

The answer is simple, **GitHub Feed**. and let me explain why.

> It's not the only answer, but let me explain why I think its a good answer.

## What is GitHub Feed?

If you are not familiar with GitHub Feed, it is a feed that shows you the latest updates from the people you follow on GitHub, mainly new project releases, projects they give a star to, forks they make, and people they start following. and looks like this:

![GitHub Feed](/images/github-feed.png)

Seems boring 😂 isn't it? but let me explain why I think it's a perfect source of learning.

When GitHub introduced the Feed feature, I started developing a habit of checking it every few days to see what people I follow are doing.

The secret to learning from GitHub Feed is to follow the right people and explore the projects in the right way to get the most out of them.

So let me explain how I do it step by step.

## Where can you find people to follow?

Just go step by step. For sure you know some amazing people in the stack you're working on. Start by following the core team members, and then keep adding people you find on Twitter or people speaking at conferences. You'll end up with a good list of people to follow in no time. Your GitHub feed will also start showing you more people to follow that have been followed by the people you follow.

> Fun fact 😀: Whenever someone shares their Twitter handle at a conference, I prefer to follow them on GitHub instead of Twitter. less noise, more learning 🤝

If you're keen on React and React Native, [follow me on GitHub](https://github.com/yjose). Some amazing open-source projects will pop up in your feed. I guarantee that 😎.

## How to explore projects?

Will the bad news is that there is no fit-all solution for this, you need to develop your own way of exploring projects and get the best out of them. But here are some tips that might help you:

- **Explore Project dependencies**: The first thing I do is to check the `package.json` file of the project and see what dependencies they are using. I ignore all dependencies I already know and only focus on the ones that are new to me. do a quick search to know what they are and what they do. Sometimes, when a new dependency is interesting enough, I find myself continuing to explore it and forgetting about the source project.

  This trick is one of the best ways to discover new libraries that you are not going to find in `X Libraries ... You should use` articles.

- **Explore Project code**: Explore the code from the comfort of your home environment(vscode). GitHub has an amazing feature that allows you to open a repository in VS Code inside the browser. Just click the `.` in your keyboard and you're ready to dive into the project.

  I mainly search for the following:

  - How do they structure their code, and what configuration do they use, typescript, eslint, prettier, etc.
  - Folder with those names `lib`, `common` and `utils` or anything that seems not related to the project business logic. This is where you find the hidden gems 😎.

- **Checking .github folder**: If you are not familiar with GitHub, `.github` is a folder that contains all the configuration files for the project. This is where you can find some interesting stuff that can help you automate things in your project. I can't lie, this is my favorite part of exploring projects. Automation is something I enjoy doing, and I always find something new to learn from this folder.

One last important thing: While exploring repositories, I noticed that the number of stars is not a good indicator of how much I will learn from them. However, it is worth mentioning that new projects are more likely to have new ideas and new approaches to learn from, so keep this in mind while exploring.

## Keep track and practice what you learn 🤝

We all know that watching other people code is not enough to learn. Knowing something most of the time doesn't mean you can do it. So, the last and most important step is to keep track of what you learn and practice it.

To keep track of things I learn, I have a special project on my [Ticktick](https://ticktick.com) dashboard labeled `Learning`. I add a new task for important things I discover and want to practice later on. I mainly copy the exact file link and add it to the task description, so I can easily find it later.

The easiest way to practice what you learn is with the project you are working on daily basis in your work and try to apply what you learn there. Do refactoring and improve the codebase. This is the best way to practice what you learn and make sure you understand it well.

I am lucky enough to work with my team on an open-source project, [react-native-obytes-template](https://github.com/obytes/react-native-template-obytes). It's a production-ready template for React Native projects that we keep up to date with the best practices we've stolen from other projects 😂. Make sure to check it out and give it a star and steal some ideas from it.

## Conclusion

Back to the question I got asked, If you are not lucky enough to have someone to learn from in your team, open source can come to the rescue. and Github feed make it easier for you to learn from the best not only in your company but in the whole world. Happy codding 🤝.

Let me know in the comment section below how you keep learning new things and what you think about GitHub Feed. I would love to hear your thoughts.
