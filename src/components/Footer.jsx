import React from "react"
import footerData from "../data/footer"
import "../styles/styles.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        &copy; {footerData.author} {footerData.copyright}
      </p>
    </footer>
  )
}

export default Footer
