import React from "react"

import * as styles from "./card.module.css"

export default function Card({ children }) {
  return <div className={styles.card}>{children}</div>
}
