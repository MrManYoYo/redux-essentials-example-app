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
    }
  },
})

export const selectPosts = state => state.posts;

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
