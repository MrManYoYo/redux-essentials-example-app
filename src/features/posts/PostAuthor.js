import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../users/userSlice'

export const PostAuthor = ({ userId }) => {
  const users = useSelector(selectUsers)

  const author = users.find(user => user.id === userId)

  return (
    <span>By { author ? author.name : 'Unknow Author' }</span>
  )
}

export default PostAuthor
