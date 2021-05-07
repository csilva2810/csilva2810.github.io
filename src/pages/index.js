import React from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/header"
import Profile from "../components/profile"
import Hero from "../components/hero"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Card from "../components/card"

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
        <div className={styles.postList}>
          <h1 className={styles.postListTitle}>Articles</h1>
          {posts.map(({ node: post }) => (
            <Link key={post.id} to={post.fields.slug}>
              <Card>
                <h3 className={styles.postTitle}>{post.frontmatter.title} </h3>
                <h4 className={styles.postDate}>
                  {post.frontmatter.date}
                  <span className={styles.timeToRead}>
                    {post.timeToRead} min read
                  </span>
                </h4>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                {post.frontmatter.tags && (
                  <ul className={styles.tags}>
                    {post.frontmatter.tags.split(",").map(tag => (
                      <li key={tag} className={styles.tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
