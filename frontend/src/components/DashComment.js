import React, { useState } from 'react'

function DashComment({ comment, updateComment, id, name, deleteComment }) {
  const [formOpen, setFormOpen] = useState(false)
  const [editedComment, setEditedComment] = useState(comment)

  function toggleForm() {
    setFormOpen(!formOpen)
  }

  function handleChange(event) {
    setEditedComment(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    updateComment(id, editedComment)
    toggleForm()
  }

  function handleDelete(event) {
    event.preventDefault();
    deleteComment(id);
  }

  return (
    <div>
      {formOpen ? (
        <form>
          <label>
            Comment:
            <input type="text" value={editedComment} onChange={handleChange} />
          </label>
          <button type="submit" onClick={handleSubmit}>
            Edit your comment for {name}
          </button>
        </form>
      ) : (
        <div>
            <p>{name}: {comment}</p>
              <button onClick={toggleForm}>Edit Comment</button>
              <button onClick={handleDelete}>Delete Comment</button>
        </div>)}
    </div>
    )
}

export default DashComment;