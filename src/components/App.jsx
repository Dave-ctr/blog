//C:\Users\Dave-Work\Desktop\workspace\Sprint5\react-blog-challenge\src\components\App.jsx

import React, { useState, useEffect } from "react"
import "../styles/styles.css"
import axios from "axios"
import Header from "./header"
import Footer from "./footer"
import OtherBlogs from "./OtherBlogs"
import RenderedPosts from "./RenderedPosts"
import PostForm from "./PostForm"
import CommentsSection from "./CommentsSection"

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts")
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts))
    } else {
      setPosts([])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts))
  }, [posts])

  const handlePostSubmission = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost])
  }

  // JSON request - Fetch posts from the backend API
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/api/posts")
      .then((response) => {
        setPosts(response.data)
      })
      .catch((error) => {
        console.error("Error fetching posts <=> App:", error)
      })
  }, [])

  return (
    <>
      <div className={"container"}>
        <Header className={"header"} />
        <div className={"content"}>
          <OtherBlogs className={"other-blogs"} />
          <RenderedPosts
            prop='postId'
            className={"posts"}
            posts={posts}
            setPosts={setPosts}
          />
        </div>
        <div>
          <PostForm
            onSubmit={handlePostSubmission}
            className={"post-form"}
            setPosts={setPosts}
          />
          <CommentsSection className={"comments"} />
        </div>
        <Footer className={"footer"} />
      </div>
    </>
  )
}

export default App
