---
slug: "watch-for-typescript-errors-in-vscode-in-3-steps"
title: Watch for TypeScript errors in VSCode in 3 steps
date: "2019-05-28"
author: Thiago de Bastos
description: Because reporting errors for open files only sucks.
keywords:
  - tutorial
  - beginner
  - vscode
  - productivity
  - ide
  - typescript
banner: ./images/banner.png
bannerCredit: "Image by [Katerina Limpitsouni](https://undraw.co/)"
---

Visual Studio Code is my go-to editor for working with TypeScript. You just can’t go wrong with intellisense, auto-complete and errors from open files printed in the problems tab.

Up until last week though, I would still have a terminal window open, running a task that would watch for TS errors. This is because without configuration, VSCode’s Problems tab only prints TS errors from open files, resulting in missed type errors — unless of-course, you just enjoy utilising all of that RAM to keep every file in your project open at all times 😱.

For those of us who would like to keep whatever sanity we may have left after working with JS and TS, here is a 3 step configuration that results in all your project’s TS type errors printed to the problems console, without keeping open every file in your project.

## 3 easy steps to success

1. Add a watch script to your package.json:

```json
"scripts": {
    "watch": "tsc --watch --noEmit --project './tsconfig.json'"
  },
```

2. Create a tasks.jsonfile in your .vscodefolder:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "npm",
      "script": "watch",
      "problemMatcher": "$tsc-watch",
      "isBackground": true,
      "presentation": {
        "reveal": "always",
        "revealProblems": "onProblem"
      }
    }
  ]
}
```

3. In VSCode, open the `Command Palette`, search for and select `Tasks: Run Task`, and finally choose `npm: watch`.

And voila! VSCode opens a terminal with the running task, and all type errors are sent through to the Problems tab. No more missed type errors 🙌

### Performance issues</h4>

VSCode settings such as `autoSave` can cause performance issues, especially on larger projects. This is because the type check task will re-run on every save, and those changes have to then be filtered and propagated to VSCode's Problems tab each time. To prevent this, set `autoSave` to `false` in your workspace settings.
