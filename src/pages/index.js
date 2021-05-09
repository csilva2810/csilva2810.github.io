import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Profile from "../components/profile"
import Hero from "../components/hero"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Post from "../components/post"

import * as styles from "./index.module.css"

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <Seo title="Home" />
      <Header />
      <Hero>
        <Profile />
      </Hero>
      <Layout>
        <section className={styles.postSection}>
          <h1>Articles</h1>
          {posts.map(({ node: post }) => (
            <div key={post.id} className={styles.postContainer}>
              <Post post={post} />
            </div>
          ))}
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            tags
            thumbnail
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 70, truncate: true)
        }
      }
    }
  }
`
