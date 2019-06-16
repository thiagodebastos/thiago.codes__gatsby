import pkgJson from "../package.json"

export default function postTemplate(title: string, slug: string) {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth()
  const year = today.getFullYear()
  const formattedDate = `${year}-${month}-${day}`

  const author = pkgJson.author.name

  return `---
slug: ${slug}
title: ${title}
date: ${formattedDate}
author: ${author}
description: An introduction to Server Side Rendering
keywords:
  - ssr
  - server side rendering
  - SEO
  - react
  - next js
banner: ./images/banner.png
bannerCredit: "Image by [Katerina Limpitsouni](https://undraw.co/)"
---`
}
