import React from 'react'
import { useSelector } from 'react-redux'

import { selectPosts } from './postSlice'

import { Link } from 'react-router-dom'

import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

export const PostsList = () => {
  const posts = useSelector(selectPosts);

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.data))

  const renderedPosts = orderedPosts.map(post => (
    <article className='post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <div className='post-content'>{post.content}</div>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <Link to={`/posts/${post.id}`} className='button muted-button'>View Post</Link>
      <div>
        <ReactionButtons post={post}/>
      </div>
    </article>
  ))

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
