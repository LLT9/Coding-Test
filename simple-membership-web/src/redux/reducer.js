import { createSlice } from "@reduxjs/toolkit";

const initState = {
  token: null,
  userName: null,
};

const dataSlice = createSlice({
  name: "dataStorer",
  initState,
  reducers: {
    SIGN_IN: (state) => {
      return state;
    },
    SIGN_OUT: () => {
      return initState;
    },
  },
});

// const dataReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "SIGN_IN":
//       return action.payload.userData;
//     case "SIGN_OUT":
//       return state;

//     default:
//       return state;
//   }
// };
export const { SIGN_IN, SIGN_OUT } = dataSlice.actions;
export default dataSlice.reducer;
