import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Features/User/loginSlice";
import languageReducer from "./Features/Language/languageSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    language: languageReducer,
  },
});
