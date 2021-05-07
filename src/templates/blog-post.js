import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"

deckDeckGoHighlightElement()

export default function BlogPost({ data }) {
  const { html, frontmatter } = data.markdownRemark
  return (
    <>
      <Seo title={frontmatter.title} />
      <Header showHomeLink isStatic />
      <Layout>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
