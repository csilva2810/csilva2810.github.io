import React, { useEffect } from "react"
import { ReactSVG } from "react-svg"
import classes from "classnames"
import { Link } from "gatsby"

import sunIcon from "../../assets/images/sun.svg"
import moonIcon from "../../assets/images/moon.svg"
import * as storage from "../../services/storage"

import useAvatars from "../../hooks/use-avatars"

import * as styles from "./header.module.css"

const themes = Object.freeze({
  light: "light",
  dark: "dark",
})

export default function Header({ isStatic, showHomeLink }) {
  const [theme, setTheme] = React.useState(() => {
    return storage.getItem("theme") || themes.light
  })
  const toggleTheme = () => {
    setTheme(prev => {
      return prev === themes.light ? themes.dark : themes.light
    })
  }
  const avatar = useAvatars()

  useEffect(() => {
    const [htmlElement] = document.getElementsByTagName("html")
    htmlElement.classList.remove(...Object.values(themes))
    htmlElement.classList.add(theme)
    storage.setItem("theme", theme)
  }, [theme])

  const headerClass = classes(styles.header, { [styles.isStatic]: isStatic })
  return (
    <header className={headerClass}>
      {showHomeLink && (
        <Link
          className={styles.backButton}
          to="/"
          arial-label="Navigate to home page"
        >
          <img src={avatar} alt="Carlos avatar" />
        </Link>
      )}

      <button
        className={styles.toggleButton}
        onClick={toggleTheme}
        aria-label={
          theme === themes.light
            ? "Light theme active. Switch to dark."
            : "Dark theme active. Switch to light."
        }
      >
        <ReactSVG
          className={styles.icon}
          src={theme === themes.light ? sunIcon : moonIcon}
        />
      </button>
    </header>
  )
}

Header.defaultProps = {
  isStatic: false,
  showHomeLink: false,
}
