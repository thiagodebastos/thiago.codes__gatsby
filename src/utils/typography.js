import Typography from "typography"
import "../fonts/fonts.css"

export const fonts = {
  regular: "Fira Sans Regular",
  medium: "Fira Sans Medium",
  italic: "Fira Sans Italic",
  code: "Fira Code, menlo, monaco, monospace",
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
  headerFontFamily: [fonts.medium, fonts.fallback],
  bodyFontFamily: [fonts.regular, fonts.fallback],
  overrideStyles: ({ rhythm }) => ({
    pre: { fontFamily: fonts.code },
    code: { fontFamily: fonts.code },
    blockquote: {
      fontFamily: fonts.italic,
      position: "relative",
      background: "whitesmoke",
      borderLeft: "4px solid pink",
      marginLeft: 0,
      marginRight: 0,
      padding: "1.3125rem",
      letterSpacing: "1px",
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
