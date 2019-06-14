import { css } from "@emotion/core"
import tw from "tailwind.macro"
import * as normalize from "normalize.css"

export const base = css`
  ${normalize};

  html {
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: auto;
    font-smooth: always;

    &::-webkit-scrollbar {
      ${tw`w-2 lg:w-4`}
    }

    &::-webkit-scrollbar-track {
      ${tw`bg-violet-pale`};
    }

    &::-webkit-scrollbar-thumb {
      ${tw`bg-pink-200 rounded-lg`};
    }
  }

  *::selection {
    ${tw`bg-pink-200`}
  }

  body {
    ${tw`font-sans`};
  }

  hr {
    ${tw`border-none border-solid border-t-8 border-pink-pale w-2/3 my-8`};
  }
`

export const syntax = css`
  /* Code blocks */
  code[class*="language-"],
  pre[class*="language-"] {
    ${tw`font-mono`};
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    ${tw`bg-gray-pale text-violet-300 rounded-sm py-1 px-2`};
    white-space: normal;
  }

  .token.attr-name {
    ${tw`text-lime`}
  }

  .token.comment {
    ${tw`text-gray-300 italic`}
  }

  .token.string,
  .token.url {
    ${tw`text-lime`}
  }

  .token.variable {
    ${tw`text-indigo font-bold`};
  }

  .token.number {
    ${tw`text-orange`}
  }

  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    ${tw`text-indigo-400`}
  }

  .token.punctuation {
    ${tw`text-pink-300`}
  }

  .token.selector,
  .token.doctype {
    ${tw`text-indigo-400 italic`}
  }

  .token.class-name {
    ${tw`text-pink-400`}
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    ${tw`text-fuschia-400 font-bold`}
    background: unset;
  }

  .token.boolean {
    ${tw`text-red`}
  }

  .token.property {
    ${tw`text-teal-400`}
  }

  .token.namespace {
    ${tw`text-indigo-300`}
  }

  pre[data-line] {
    ${tw`py-4 pl-12`}
    position: relative;
  }

  .gatsby-highlight-code-line {
    ${tw`bg-pink-pale`}
    /* paddings and margins in here should line up with the article paddings and
    margins set up in tailwind config */
    padding-left: 1.75rem; /* takes border-left into account */
    ${tw`
      -ml-8 -mr-8
      pr-8 py-1
      w-full
      block
      border-0 border-solid border-l-4 border-pink-200
    `}
  }

  .gatsby-highlight {
    /* margins match article padding. The negative margins will pull the code
    syntax box to the blog article's full width, without padding */

    ${tw`
      -ml-8 -mr-8 mt-8
      flex
      overflow-auto
      md:rounded-lg
      bg-white
      shadow
      md:shadow-md
    `};

    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      ${tw`h-3 w-3`}
    }

    &::-webkit-scrollbar-track {
    }

    &::-webkit-scrollbar-thumb {
      ${tw`bg-red-pale rounded-lg`}
    }
  }

  .gatsby-highlight pre[class*="language-"] {
    ${tw`bg-white p-8`};
    flex: 1 0 auto;
  }

  article {
    blockquote + *,
    .gatsby-highlight + * {
      ${tw`mt-8`}
    }

    blockquote {
      /** BUG: border-style is not applied to individual sides
       * tailwindcss issue https://github.com/tailwindcss/tailwindcss/issues/920#issuecomment-49/2423037
       */
      ${tw`
        -ml-8 -mr-8 mt-8
        py-2 px-6
        border-solid border-0 border-l-8 border-red-pale
        italic font-serif
      `}
    }
  }
`

const globalStyles = [base, syntax]

export default globalStyles
