import { Link } from "gatsby"
import React from "react"

import Card from "../card"
import * as styles from "./post.module.css"

export default function Post({ post }) {
  const {
    timeToRead,
    excerpt,
    fields: { slug },
    frontmatter: { thumbnail, title, date, tags },
  } = post

  return (
    <Card>
      <div className={styles.post}>
        <div className={styles.thumbContainer}>
          <img
            className={styles.thumb}
            src={`${thumbnail}/400x400`}
            alt={title}
          />
        </div>
        <div className={styles.content}>
          <Link to={slug}>
            <h2 className={styles.title}>{title} </h2>
          </Link>
          <p className={styles.date}>
            {date}
            <span className={styles.timeToRead}>{timeToRead} min read</span>
          </p>
          <p className={styles.excerpt}>{excerpt}</p>
          {tags.length && (
            <ul className={styles.tags}>
              {tags.map(tag => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Card>
  )
}
