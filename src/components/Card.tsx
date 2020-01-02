import * as React from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

interface CardProps {
  bgImgUrl: string
}

function Card({ bgImgUrl }: CardProps): React.ReactElement {
  return (
    <div
      css={tw`rounded overflow-hidden shadow-lg mx-auto mb-6 md:px-4 md:w-1/3 max-w-sm`}
    >
      <div
        css={css`
          ${tw`bg-cover bg-center h-64`}
          background-image: url(${bgImgUrl});
        `}
      />
      <div css={tw`px-6 py-4`}>
        <div css={tw`font-bold text-xl mb-2`}>Qantas</div>
        <p>Credit card selector tool</p>
      </div>
      <div css={tw`px-6 py-4`}>
        <span
          css={tw`inline-block bg-cyan-100 rounded-full px-3 py-1 text-sm font-semibold text-cyan-700 mr-2`}
        >
          #react
        </span>
        <span
          css={tw`inline-block bg-cyan-100 rounded-full px-3 py-1 text-sm font-semibold text-cyan-700 mr-2`}
        >
          #contentful
        </span>
        <span
          css={tw`inline-block bg-cyan-100 rounded-full px-3 py-1 text-sm font-semibold text-cyan-700`}
        >
          #redux
        </span>
      </div>
    </div>
  )
}

export default Card
