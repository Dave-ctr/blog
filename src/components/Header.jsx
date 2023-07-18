import React from "react"
import header from "../data/header"
import "../styles/styles.css"

function Header() {
  const { title, link } = header

  return (
    <p className='header'>
      {title} {link}
    </p>
  )
}

export default Header
