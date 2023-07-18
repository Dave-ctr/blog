//C:\Users\Dave-Work\Desktop\workspace\Sprint5\react-blog-challenge\src\components\PostForm.jsx

import React, { useState } from "react"
import "../styles/styles.css"
import { v4 as uuidv4 } from "uuid"

const PostForm = ({ onSubmit, setPosts }) => {
  const [newPost, setNewPost] = useState({
    title: "",
    blogContent: "",
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const currentDate = new Date().toLocaleDateString()
    const formattedDate = currentDate.replace(/\//g, "-")
    const postId = uuidv4() // Generate a unique postId using uuidv4()
    const submittedPost = {
      postId, // Assign the generated postId
      title: newPost.title,
      date: formattedDate,
      commentCount: 0,
      blogContent: { text: newPost.blogContent },
    }

    onSubmit(submittedPost)
    setNewPost({
      title: "",
      blogContent: "",
    })
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        postId,
        title: newPost.title,
        date: formattedDate,
        commentCount: 0,
        blogContent: { text: newPost.blogContent },
      },
    ])
  }

  return (
    <>
      <div
        setPosts='setPosts'
        className='post-form'
        form
        onSubmit={handleSubmit}>
        <label> Create a New Post</label>
        <input>
          <p
            type='text'
            name='title'
            value={newPost.title}
            onChange={handleInputChange}>
            Title:
          </p>
        </input>
      </div>
      <br />
      <label>
        Blog Content:
        <textarea
          name='blogContent'
          value={newPost.blogContent}
          onChange={handleInputChange}></textarea>
      </label>
      <br />
      <button
        className='post-form-button'
        type='submit'>
        Add Post
      </button>
    </>
  )
}

export default PostForm
