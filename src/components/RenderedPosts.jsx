//C:\Users\Dave-Work\Desktop\workspace\Sprint5\react-blog-challenge\src\components\RenderedPosts.jsx

import React, { useEffect } from "react"
import axios from "axios"
import "../styles/styles.css"

const RenderedPosts = ({ posts, setPosts }) => {
  useEffect(() => {
    fetchPosts()

    // Fetch new posts every 5 seconds
    const interval = setInterval(fetchPosts, 5000)

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(interval)
    }
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:3001/api/posts")
      setPosts(response.data)
    } catch (error) {
      console.error("Error fetching posts <=> RenderedPosts:", error)
    }
  }

  return (
    <>
      {posts.map((post) => (
        <div
          postId={post.postId}
          className='posts'
          key={post.postId}>
          <h2>{post.title}</h2>
          <p>{post.blogContent.text}</p>
          <p>Date: {post.date}</p>
          <p>Comment Count: {post.commentCount}</p>
          <p>Leave Your Mark: {post.comments}</p>
        </div>
      ))}
    </>
  )
}

export default RenderedPosts
