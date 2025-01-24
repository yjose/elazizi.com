---
title: "Add Views Counter to your Astro Blog Posts"
tags: ["astro", "blog"]
keywords: ["astro", "blog", "views counter", "analytics"]
pubDatetime: 2025-01-23
description: A guide on how to add a beautiful views counter to your Astro blog posts using a free hit counter service
ogImage: /images/views-count.gif
---

![Views Counter](/images/views-count.gif)

A few months ago, I wrote an article about [adding a comments section to your Astro blog](/posts/add-comments-section-to-your-astro-blog) using Giscus, and I was thrilled to see how many people found it helpful. Following that success, I decided to share another useful feature that can enhance your blog: a views counter for your articles.

Adding a views counter to your blog posts is a great way to track engagement and show your readers how popular your articles are. In this guide, I'll show you how to implement a beautiful and animated views counter for your Astro blog using a free hit counter service.

## Table of Content

## 🎯 The Solution

The solution is very simple and dosnt require any server side code or API keys. We'll use [hits.seeyoufarm.com](https://hits.seeyoufarm.com/), a free and reliable hit counter service that doesn't require any authentication or API keys. The service provides a simple URL-based API that returns an SVG badge with the view count. We'll extract the count from this badge and display it with a smooth animation.

## 👀 Page Views Component

Without any further ado, here is the code for the `PageViews` component, you only need to add this to your blog post layout and pass the current page URL to it.

```astro
---

export interface Props {
  url: string;
}
const { url = "" } = Astro.props;

const encodedUrl = encodeURIComponent(url);
const counterUrl = `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${encodedUrl}&count_bg=%234E763000&title_bg=%237A464600&icon=&icon_color=%23E7E7E7&title=Reads+%28Today+%2F+All+Time%29+%3A&edge_flat=true`;
---

<div class="flex gap-1 opacity-80 justify-center items-center pl-2">
  <svg class="fill-transparent w-5 h-5" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
  <span id="views-count" class="inline-flex items-end min-w-[30px]">
    <span class="loading-dot">.</span>
    <span class="loading-dot">.</span>
    <span class="loading-dot">.</span>
  </span>
</div>

<style>
  @keyframes loadingDots {
    0% {
      opacity: 0.2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }

  .loading-dot {
    animation: loadingDots 1.4s infinite;
    animation-fill-mode: both;
  }

  .loading-dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .loading-dot:nth-child(3) {
    animation-delay: 0.4s;
  }
</style>

<script define:vars={{ counterUrl }}>
  function animateNumber(start, end, duration, element) {
    const startTime = performance.now();
    const startNumber = parseInt(start);
    const targetNumber = parseInt(end);
    const difference = targetNumber - startNumber;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeOutCubic(progress);
      const currentNumber = Math.round(startNumber + (difference * easedProgress));

      // Format number with commas for better readability
      element.textContent = currentNumber.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  async function fetchWithProxy(targetUrl) {
    const proxyUrl = "https://corsproxy.io/?" + encodeURIComponent(targetUrl);
    const response = await fetch(proxyUrl);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.text();
  }

  async function updateViewCount() {
    const viewsCount = document.getElementById("views-count");
    if (!viewsCount) return;

    try {
      const svgText = await fetchWithProxy(counterUrl);
      const match = svgText.match(
        /<text[^>]*fill="#fff"[^>]*>([\d\s/]+)<\/text>/
      );

      if (match && match[1]) {
        const count = match[1].trim();
        const totalViews = count.split("/")[1].trim();
        viewsCount.textContent = "0"; // Start from zero
        animateNumber(0, totalViews, 1000, viewsCount); // Animate to actual count over 1 second
      } else {
        viewsCount.textContent = "N/A";
      }
    } catch {
      viewsCount.textContent = "N/A";
    }
  }

  updateViewCount();
</script>

```

Let's break down and explain the code.

The component is very simple, it accepts a `url` prop that will be used to track views for specific pages. We create a simple eye icon for the visual appeal of the counter and we use a three dots loading animation to make it more appealing.

In the script section, we have a function called `updateViewCount` that handles fetching and displaying the view count. Here's how it works:

1. It first fetches the SVG content from the hit counter service using the `fetchWithProxy` function to handle CORS
2. Since the service returns an SVG containing the view count, we use a regular expression to extract the numeric value
3. The regex pattern `/<text[^>]*fill="#fff"[^>]*>([\d\s/]+)<\/text>/` matches text elements in the SVG and captures the view count
4. Once we have the count, we initialize the display at 0 and animate up to the actual value
5. If there are any errors in fetching or parsing, we gracefully fall back to showing "N/A"

Once we have the view count, we use the `animateNumber` function to create a smooth animation effect. This function animates the counter from 0 to the actual view count over a 1 second duration. Under the hood, it leverages the browser's `requestAnimationFrame` API to create a fluid easing animation with optimal performance. The easing effect makes the counting animation feel more polished and natural compared to an instant update or linear transition.

## 📝 Using the Page Views Component in Your Blog

To add the views counter to your blog posts, import and use the `PageViews` component in your blog post layout:

```astro
---
import PageViews from "@components/PageViews.astro";

const pageUrl = new URL(Astro.url.pathname, Astro.url.origin).href;

---

<article>
  <h1>{post.title}</h1>
  <div class="metadata">
    <span class="date">{formattedDate}</span>
    <PageViews url={pageUrl} />
  </div>
  <div class="content">
    <slot />
  </div>
</article>
```

## ✨ The Result

Go to the top of the page and you'll see the page views counter for this page.

Make sure to try it out on your blog and let me know what you think in the comments below! 🎉
