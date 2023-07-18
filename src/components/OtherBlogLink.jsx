import React from "react"
import "../styles/styles.css"

function OtherBlogLink({ blog }) {
  const handleClick = () => {
    window.location.href = blog.link
  }

  return (
    <div className='other-blog-link'>
      <button
        className='other-blog-link-button'
        onClick={handleClick}>
        <div>
          <h2>{blog.resourceTitle}</h2>
        </div>
      </button>
    </div>
  )
}

export default OtherBlogLink
