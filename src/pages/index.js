import React from "react"

import Header from "../components/header"
import Profile from "../components/profile"
import Hero from "../components/hero"
import SEO from "../components/seo"

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Header />
      <Hero>
        <Profile />
      </Hero>
    </>
  )
}
