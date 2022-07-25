import React from 'react'
import { useSelector } from 'react-redux'

import { selectPosts } from './postSlice'

import { Link } from 'react-router-dom'

import PostAuthor from './PostAuthor'

export const PostsList = () => {
  const posts = useSelector(selectPosts);

  const renderedPosts = posts.map(post => (
    <article className='post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <div className='post-content'>{post.content}</div>
      <PostAuthor userId={post.user} />
      <Link to={`/posts/${post.id}`} className='button muted-button'>View Post</Link>
    </article>
  ))

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
