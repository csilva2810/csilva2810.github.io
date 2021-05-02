import React from "react"

import Header from "../components/header"
import Profile from "../components/profile"
import * as styles from "./index.module.css"

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.hero}>
        <Profile />
      </div>
    </>
  )
}
