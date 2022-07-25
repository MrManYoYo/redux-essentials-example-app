import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'users',
  initialState: [
    { id: '0', name: 'User1' },
    { id: '1', name: 'User2' },
    { id: '2', name: 'User3' },
  ],
  reducers: {},
})

export const selectUsers = state => state.users

export default userSlice.reducer
