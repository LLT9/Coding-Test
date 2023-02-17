import { createSlice } from '@reduxjs/toolkit'

// setup the init state
const initialState = {
  auth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // a function to change the auth state
    changeAuthState: (state) => {
      state.auth = !state.auth
    },
  },
})


export const { changeAuthState } = authSlice.actions

// some selector to select the auth state
export const selectAuth = (state) => state.auth.auth

export default authSlice.reducer