import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postSlice'
import { selectUsers } from '../users/userSlice'
import { nanoid } from '@reduxjs/toolkit';

export const AddPostForm = () => {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState('')
  const [userId, setUserId] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  const users = useSelector(selectUsers)

  const UsersOptions = users.map(user => (
    <option key={user.id} value={user.id}>{user.name}</option>
  ))

  const savePostHandle = () => {
    if (title && content) {
      dispatch(postAdded({
        title,
        content,
        userId
      }))
      setTitle('')
      setContent('')
    }
  }

  const canSave = !!(title) && !!(userId) && !!(content)
  
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
        <label htmlFor='postUser'>Post Author:</label>
        <select
          id='postUser'
          name='postUser'
          value={userId}
          onChange={onAuthorChanged}>
          <option value=''></option>
          {UsersOptions}
        </select>
        <label htmlFor='postContent'>Post content:</label>
        <textarea
          id='postContent'
          name='postContent'
          value={content}
          max-height='100px'
          onChange={onContentChanged} />
        
        <button type='button' onClick={savePostHandle} disabled={!canSave}>Save</button>
      </form>
    </section>
  )
}
