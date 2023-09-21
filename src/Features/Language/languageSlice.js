import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLanguage: "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLang } = languageSlice.actions;
export default languageSlice.reducer;
