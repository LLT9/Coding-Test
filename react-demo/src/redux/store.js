import { configureStore } from "@reduxjs/toolkit";
import  loginReducer  from "./login-redux/login.js";
export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
