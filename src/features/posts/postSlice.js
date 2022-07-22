import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [
    { id: '1', title: 'First Post', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'Hello!!' },
  ],
  reducers: {},
})

export const selectPosts = state => state.posts;

export default postsSlice.reducer
