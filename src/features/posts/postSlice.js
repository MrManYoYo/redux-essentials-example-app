import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [
    { id: '1', title: 'First Post', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'Hello!!' },
  ],
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload)
    },
    postUpdated: (state, action) => {
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    }
  },
})

export const selectPosts = state => state.posts;

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
