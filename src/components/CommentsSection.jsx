//C:\Users\Dave-Work\Desktop\workspace\Sprint5\react-blog-challenge\src\components\CommentsSection.jsx

import React, { useState } from "react"

const CommentsSection = ({ postId }) => {
  const [commentList, setCommentList] = useState([])
  const [expanded, setExpanded] = useState(false)
  const [newCommentText, setNewCommentText] = useState("")

  const toggleComments = () => {
    setExpanded((prevExpanded) => !prevExpanded)
  }

  const handleCommentChange = (event) => {
    setNewCommentText(event.target.value)
  }

  const handleSubmitComment = (event) => {
    event.preventDefault()

    if (newCommentText.trim() !== "") {
      const newComment = {
        postId: postId,
        text: newCommentText,
      }

      setCommentList((prevComments) => [...prevComments, newComment])
      setNewCommentText("")
    }
  }

  return (
    <div className={"comments"}>
      <h4>Comments</h4>
      {expanded ? (
        <>
          {commentList.map((comment, index) => (
            <div key={indx}>{comment.text}</div>
          ))}
          <form onSubmit={handleSubmitComment}>
            <input
              type='text'
              value={newCommentText}
              onChange={handleCommentChange}
              placeholder='Enter your comment'
            />
            <button type='submit'>Submit</button>
          </form>
          <button onClick={toggleComments}>Collapse</button>
        </>
      ) : (
        <button onClick={toggleComments}>
          View {commentList.length} Comments
        </button>
      )}
    </div>
  )
}

export default CommentsSection
