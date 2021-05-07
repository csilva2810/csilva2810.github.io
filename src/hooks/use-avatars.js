import { useEffect, useState } from "react"

import avatar from "../assets/images/avatar.png"
import avatar2 from "../assets/images/avatar-2.png"
import avatar3 from "../assets/images/avatar-3.png"

export default function useAvatars() {
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
  }, [currentAvatar, avatars.length])

  return avatars[currentAvatar]
}
