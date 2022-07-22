import React, { useState } from 'react';

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

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
        
        <button type='button'>Save</button>
      </form>
    </section>
  )
}
