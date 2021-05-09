import React from "react"
import { ReactSVG } from "react-svg"

import linkedInIcon from "../../assets/images/linkedin.svg"
import twitterIcon from "../../assets/images/twitter.svg"
import githubIcon from "../../assets/images/github.svg"
import emailIcon from "../../assets/images/email.svg"

import useAvatars from "../../hooks/use-avatars"

import * as styles from "./profile.module.css"

const contactInfo = [
  {
    name: "Carlos Github",
    link: "https://github.com/csilva2810",
    icon: githubIcon,
  },
  {
    name: "Carlos LinkedIn",
    link: "https://www.linkedin.com/in/carlos-silva/",
    icon: linkedInIcon,
  },
  {
    name: "Carlos Twitter",
    link: "https://twitter.com/csilva2810",
    icon: twitterIcon,
  },
  {
    name: "Carlos E-mail",
    link: "mailto:csilva2810@gmail.com",
    icon: emailIcon,
  },
]

export default function Profile() {
  const avatar = useAvatars()

  return (
    <div className={styles.container}>
      <img className={styles.image} src={avatar} alt="Carlos avatar" />
      <p className={styles.title}>Hi, I'm Carlos!</p>
      <p>
        I'm a Front-End engineer from São Paulo, Brazil.{" "}
        <span role="img" aria-label="Brazil flag">
          🇧🇷
        </span>
      </p>
      <ul className={styles.contactList}>
        {contactInfo.map(({ name, link, icon }) => (
          <li key={name}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <ReactSVG src={icon} alt={name} className={styles.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
