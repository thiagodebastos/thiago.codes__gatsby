import { css } from "@emotion/core"
import tw from "tailwind.macro"
import * as normalize from "normalize.css"

export const base = css`
  ${normalize};

  html {
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: auto;
    font-smooth: always;
    font-size: 18px;

    &::-webkit-scrollbar {
      ${tw`w-4 `}
    }

    &::-webkit-scrollbar-track {
      ${tw`bg-white`};
    }

    &::-webkit-scrollbar-thumb {
      ${tw`bg-indigo-200`};
    }
  }

  body {
    ${tw`font-sans`};
  }
`

export const syntax = css`
  code[class*="language-"],
  pre[class*="language-"] {
    ${tw`font-mono`};
  }
  /* Code blocks */
  pre[class*="language-"] {
    overflow: auto;
    ${tw`p-5`};
  }

  pre[class*="language-"]::-moz-selection {
    /* Firefox */
    background: hsl(207, 4%, 16%);
  }

  pre[class*="language-"]::selection {
    /* Safari */
    background: hsl(207, 4%, 16%);
  }

  /* Text Selection colour */
  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    ${tw`bg-gray-pale text-violet-300 rounded-sm py-1 px-2`};
    white-space: normal;
  }

  .token.attr-name {
    color: rgb(173, 219, 103);
  }

  .token.comment {
    ${tw`text-gray-300 italic`}
  }

  .token.string,
  .token.url {
    color: rgb(173, 219, 103);
  }

  .token.variable {
    color: rgb(214, 222, 235);
    ${tw`font-bold`};
  }

  .token.number {
    color: rgb(247, 140, 108);
  }

  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: rgb(130, 170, 255);
  }

  .token.punctuation {
    color: rgb(199, 146, 234);
  }

  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: "italic";
  }

  .token.class-name {
    color: rgb(255, 203, 139);
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    ${tw`text-fuschia-400 font-bold`}
    background: unset;
  }

  .token.boolean {
    color: rgb(255, 88, 116);
  }

  .token.property {
    color: rgb(128, 203, 196);
  }

  .token.namespace {
    color: rgb(178, 204, 214);
  }

  pre[data-line] {
    padding: 1em 0 1em 3em;
    position: relative;
  }
  pre[data-line] {
    padding: 1em 0 1em 3em;
    position: relative;
  }
  .gatsby-highlight-code-line {
    ${tw`bg-pink-pale`}
    display: block;
    width: 100%;
    /* paddings and margins in here should line up with the article paddings and
    margins set up in tailwind config */
    margin-right: -2rem;
    margin-left: -2rem;
    padding-left: 1.75rem; /* takes border-left into account */
    padding-right: 2rem;
    border-left: 0.25rem solid pink;
    padding-bottom: 0.25rem;
    padding-top: 0.25rem;
  }

  .gatsby-highlight {
    /* margins match article padding. The negative margins will pull the code
    syntax box to the blog article's full width, without padding */
    ${tw`
      -ml-8 -mr-8 mb-8
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
      ${tw`bg-indigo-pale rounded-lg`}
    }
  }

  .gatsby-highlight pre[class*="language-"] {
    ${tw`bg-white p-8`};
    flex: 1 0 auto;
  }
`

const globalStyles = [base, syntax]

export default globalStyles
