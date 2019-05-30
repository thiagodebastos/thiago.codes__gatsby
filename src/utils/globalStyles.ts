import { css } from "@emotion/core"
import tw from "tailwind.macro"
import * as normalize from "normalize.css"

export const base = css`
  ${normalize};

  html {
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: auto;
    font-smooth: always;
  }

  body {
    background-color: ${tw`bg-white`};
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
    padding: 1.3125rem;
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
    border-radius: 0.3em;
    background: white;
    color: #cc99cd;
    padding: 0.25em 0.25em 0.15em;
    white-space: normal;
  }

  .token.attr-name {
    color: rgb(173, 219, 103);
  }

  .token.comment {
    color: rgb(128, 147, 147);
  }

  .token.string,
  .token.url {
    color: rgb(173, 219, 103);
  }

  .token.variable {
    color: rgb(214, 222, 235);
    font-weight: bold;
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
    color: #ffa7c4;
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
    background-color: #f5eeee;
    display: block;
    margin-right: -1.3125rem;
    margin-left: -1.3125rem;
    padding-right: calc(1.3125rem - 0.25em);
    padding-left: calc(1.3125rem - 0.25em);
    border-left: 0.25em solid pink;
  }

  .gatsby-highlight {
    margin-bottom: 1.75rem;
    margin-left: -1.3125rem;
    margin-right: -1.3125rem;
    border-radius: 10px;
    background-color: whitesmoke;
    -webkit-overflow-scrolling: touch;
    overflow: auto;
  }

  /* TODO: make media query respond to ems */
  @media (max-width: 882px) {
    .gatsby-highlight {
      border-radius: 0;
    }
  }

  .gatsby-highlight pre[class*="language-"] {
    float: left;
    min-width: 100%;
    background-color: whitesmoke;
  }
`

const globalStyles = [base, syntax]

export default globalStyles
