import * as React from "react"
import tw from "tailwind.macro"
import { Card } from "./"
import img from "../../public/temp_card_image.png"

const CardGrid: React.FunctionComponent = () => {
  return (
    <div
      css={tw`
        flex
        flex-wrap
        flex-column
        content-around
        -mb-6
        md:-mx-4
      `}
    >
      {Array.from(Array(6), (_, i) => (
        <Card bgImgUrl={img} key={i} />
      ))}
    </div>
  )
}

export default CardGrid
