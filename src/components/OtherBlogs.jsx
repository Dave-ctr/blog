import React from "react"
import OtherBlogLink from "./OtherBlogLink"
import otherBlogsData from "../data/otherBlogs"
import "../styles/styles.css"

const OtherBlogs = () => {
  return (
    <div className='other-blogs'>
      {otherBlogsData
        .map((blog) => (
          <OtherBlogLink
            key={blog.id}
            blog={blog}
          />
        ))}
    </div>
  )
}

export default OtherBlogs
