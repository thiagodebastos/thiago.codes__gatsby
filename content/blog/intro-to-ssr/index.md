---
slug: intro-to-ssr
title: How to server side render and stay hydrated in the process
date: '2019-04-07'
author: Thiago de Bastos
description: >-
  _An introduction to Server Side Rendering_
keywords:
  - ssr
  - server side rendering
  - SEO
  - react
  - next js
banner: "./banner.png"
bannerCredit:
  'Photo by [Some awesome photographer](#)'
---

## Client Side vs Server Side Rendering

Server-side rendering can reduce time to initial render, improve perceived
performance,SEO,  and social media sharing integration. To understand what
Server Side Rendering (SSR) is, and how you can reap the aforementioned
benefits, let's first dive into Client Side Rendering (CSR) for some context.

### Client Side Rendering CSR is the default method of most sites built with a

JavaScript framework - your server will serve a HTML page to the client with
script tags pointing to your client bundles. If you are using a framework like
React, Vue or Angular, the DOM will be empty at this stage. The   client then
parses your app's bundled code, transforming it into HTML and then injects that
parsed HTML into the DOM.

![banner-demo](images/banner.png)

As mentioned, CSR is the default method of serving an app, and it is therefore
the easiest - nothing more than developing the front-end app needs to be
considered. However, with ease, there come some tradeoffs.  Slow perceived
performance and initial render: The work of parsing your app bundle is
delegated to the client, meaning that how long it takes for your a user to
first interact with your app is now at the mercy of their network connection
and CPU power.  Poor SEO: Search engines cannot accurately crawl your website
since it will likely consist of not much more than a root div into which your
app is injected.  Poor social media sharing compatibility: An empty DOM also
means no meta-data, meaning no images, title or description to be passed along
via social-media sharing.

> Client side rendering results in poor user experience in medium to large
> sized apps, poor SEO and poor social media sharing.

### Server Side Rendering SSR is a technique for transforming your JavaScript

bundle into static HTML on the server before sending it through to the client
as part of the server/request response cycle. This gives the user something to
look at much sooner than with CSR, increasing perceived performance and a
faster initial page load.  While the user is busy contemplating how to next
interact with your app, the client does the busy work of parsing your app
bundle. If you are using a framework like React, this is when any necessary
event handlers will be attached to the relevant DOM nodes - a concept knows as
hydration which I will get to next.  Since SSR creates and serves static HTML,
rather than an empty DOM, it makes it easier for search engines to crawl your
site\* and for social media platforms to gather meta-data about your friends or
colleagues share it with their networks - who wants to look at  static link
when the next one down the page has a fancy image of a collapsing star?!

> Most search engines, sometimes including Google, cannot accurately and
> reliably crawl JavaScript applications.

But before you get too excited and decide that SSR and decide to make it our
only tool, some drawbacks of SSR must be acknowledged.

## Client Side Hydration TK
