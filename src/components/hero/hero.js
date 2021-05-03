import React from "react"

import * as styles from "./hero.module.css"

export default function Hero({ children }) {
  return <div className={styles.hero}>{children}</div>
}
