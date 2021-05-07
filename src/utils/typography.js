import Typography from "typography"
import theme from "typography-theme-fairy-gates"

theme.bodyColor = "inherit"
theme.headerColor = "inherit"
theme.googleFonts = [
  ...theme.googleFonts,
  {
    name: "Source Code Pro",
    styles: ["400", "600"],
  },
]
theme.overrideThemeStyles = (test, options, styles) => {
  return {
    a: {
      color: "var(--primary-color)",
      textDecoration: "none",
      textShadow: "none",
      backgroundImage: "none",
    },
    code: {
      fontFamily: ["Source Code Pro", "monospace"].join(","),
    },
  }
}

const typography = new Typography(theme)

export const { scale, rhythm, options } = typography
export default typography
