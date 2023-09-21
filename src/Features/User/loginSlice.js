import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loginState: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginState: (state) => {
      state.loginState = true;
    },
    logout: () => initialState,
  },
});

export const { setLoginState, logout } = loginSlice.actions;
export default loginSlice.reducer;
