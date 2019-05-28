declare module "tailwind.macro" {
  import { SerializedStyles } from "@emotion/css"
  export default function(classNames: TemplateStringsArray): SerializedStyles
}
