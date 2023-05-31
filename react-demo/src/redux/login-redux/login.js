import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
  loading: false,
  success: false,
  token: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState ,
  reducers: {
    login: (state) => {
      state.success = true;
      state.token = "fakeToken";
    },
    logout: (state) => {
      state.success = false;
      state.token = null;
    },
  },
});
export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
