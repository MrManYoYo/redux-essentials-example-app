import React from 'react'
import { useSelector } from 'react-redux'
import { selectPosts   } from './postSlice'

import { Link } from 'react-router-dom'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const posts = useSelector(selectPosts);

  const post = posts.find((post) => post.id === postId)

  if (!post) {
    return (
      <section>
        <h2>页面未找到！</h2>
      </section>
    )
  }

  return (
    <section>
      <article className='post'>
        <h2>{post.title}</h2>
        <div className='post-content'>{post.content}</div>
        <Link to={`/editPost/${postId}`} className='button'>Edit Post</Link>
      </article>
    </section>
  )
}

export default SinglePostPage;
