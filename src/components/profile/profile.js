import React, { useEffect, useState } from "react"
import { ReactSVG } from "react-svg"

import avatar from "../../assets/images/avatar.png"
import avatar2 from "../../assets/images/avatar-2.png"
import avatar3 from "../../assets/images/avatar-3.png"
import linkedInIcon from "../../assets/images/linkedin.svg"
import twitterIcon from "../../assets/images/twitter.svg"
import githubIcon from "../../assets/images/github.svg"
import emailIcon from "../../assets/images/email.svg"

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
  const [avatars] = useState([avatar, avatar2, avatar3])
  const [currentAvatar, setCurrentAvatar] = useState(0)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentAvatar(prev => {
        const next = (prev + 1) % avatars.length
        return next
      })
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [currentAvatar])

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={avatars[currentAvatar]}
        alt="Carlos avatar"
      />
      <h3 className={styles.title}>Hi, I'm Carlos!</h3>
      <p>I'm a Front-End engineer from São Paulo, Brazil. 🇧🇷</p>
      <ul className={styles.contactList}>
        {contactInfo.map(({ name, link, icon }) => (
          <li key={name}>
            <a href={link} className={styles.link}>
              <ReactSVG src={icon} alt={name} className={styles.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
