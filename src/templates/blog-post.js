import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "./blog-post.module.css"

deckDeckGoHighlightElement()

export default function BlogPost({ data }) {
  const {
    html,
    frontmatter: { title, thumbnail },
  } = data.markdownRemark

  return (
    <>
      <Seo title={title} />
      <Header showHomeLink />
      <div
        className={styles.coverContainer}
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        <div className={styles.coverGradient} />
      </div>
      <div className={styles.postContainer}>
        <Layout>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail
      }
    }
  }
`
