import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { postAdded } from './postSlice'
import { nanoid } from '@reduxjs/toolkit';

export const AddPostForm = () => {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const savePostHandle = () => {
    if (title && content) {
      dispatch(postAdded({
        id: nanoid(),
        title,
        content
      }))
    }
  }
  
  return (
    <section>
      <h2>Add a new post.</h2>
      <form>
        <label htmlFor='postTitle'>
          Post title:
        </label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChanged} />

        <label htmlFor='postContent'>Post content:</label>
        <textarea
          id='postContent'
          name='postContent'
          value={content}
          max-height='100px'
          onChange={onContentChanged} />
        
        <button type='button' onClick={savePostHandle}>Save</button>
      </form>
    </section>
  )
}
