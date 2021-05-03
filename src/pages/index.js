import React from "react"

import Header from "../components/header"
import Profile from "../components/profile"
import Hero from "../components/hero"

export default function Home() {
  return (
    <>
      <Header />
      <Hero>
        <Profile />
      </Hero>
    </>
  )
}
