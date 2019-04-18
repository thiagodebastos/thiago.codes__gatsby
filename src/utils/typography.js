import Typography from "typography"
import "../fonts/fonts.css"

export const fonts = {
  thin: "Lora Thin",
  light: "Lora Light",
  regular: "Lora Regular",
  semibold: "Lora Semibold",
  bold: "Lora Bold",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen-Sans",
    "Ubuntu",
    "Cantarell",
    "Helvetica Neue",
    "sans-serif",
  ],
}

const typography = new Typography({
  theme: "default",
  baseFontSize: "21px",
  baseLineHeight: 1.666,
  scaleRatio: 2,
  headerFontFamily: [fonts.bold, fonts.fallback],
  bodyFontFamily: [fonts.regular, fonts.fallback],
})

// Hot reload typography in development.
//if (process.env.NODE_ENV !== "production") {
//  typography.injectStyles()
//}

export default typography
