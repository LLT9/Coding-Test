import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'authReducer',
  initialState: {
    isLogin: false,
    loginError: false,
    correctUsername: 'admin',
    correctPwd: 'Admin&8181',
  },
  reducers: {
    login(state, action) {
      if (
        action.payload.username === state.correctUsername &&
        action.payload.password === state.correctPwd
      ) {
        console.log(action.payload);
        state.isLogin = true;
        state.loginError = false;
      } else {
        state.isLogin = false;
        state.loginError = true;
      }
    },
    logout(state, action) {
      state.isLogin = false;
      state.loginError = false;
      console.log('logout');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
