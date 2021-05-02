import React, { useEffect } from "react"
import { ReactSVG } from "react-svg"

import sunIcon from "../assets/images/sun.svg"
import moonIcon from "../assets/images/moon.svg"
import * as styles from "./header.module.css"

const themes = Object.freeze({
  light: "light",
  dark: "dark",
})

export default function Header() {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem("theme") || themes.light
  })
  const toggleTheme = () => {
    setTheme(prev => {
      return prev === themes.light ? themes.dark : themes.light
    })
  }

  useEffect(() => {
    const [htmlElement] = document.getElementsByTagName("html")
    htmlElement.classList.remove(...Object.values(themes))
    htmlElement.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <header className={styles.header}>
      <button
        className={styles.toggleButton}
        onClick={toggleTheme}
        title={
          theme === themes.light
            ? "Switch to dark theme"
            : "Switch to light theme"
        }
      >
        <ReactSVG
          src={theme === themes.light ? sunIcon : moonIcon}
          alt={
            theme === themes.light ? "Light theme active" : "Dark theme active"
          }
          className={styles.icon}
        />
      </button>
    </header>
  )
}
