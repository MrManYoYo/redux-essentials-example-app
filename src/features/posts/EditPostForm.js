import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { postUpdated, selectPosts } from './postSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params

  const posts = useSelector(selectPosts)
  const target = posts.find(post => post.id === postId)

  const dispatch = useDispatch()
  const history = useHistory()

  const [title, setTitle] = useState(target.title)
  const [content, setContent] = useState(target.content)


  const savePostHandle = () => {
    if (title && content) {
      dispatch(postUpdated({
        id: postId,
        title,
        content
      }))
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>编辑帖子</h2>
      <form>
        <label htmlFor='postTitle'>Post Title: </label>
        <input type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Please enter post title'
        />
        <label htmlFor='postContent'>Post Content: </label>
        <textarea
          id='postContent'
          name='postContent'
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder='Please enter post content'
        ></textarea>
        <button type='button' onClick={savePostHandle}>Save Post</button>
      </form>
    </section>
  )

}

export default EditPostForm
