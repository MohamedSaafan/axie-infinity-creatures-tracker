import { createSlice } from "@reduxjs/toolkit";
import { create } from "domain";

const initialState = "";

const withAuthSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    changePassword: (state, action) => {
      state += action.payload;
      return state;
    },
  },
});

export const { changePassword } = withAuthSlice.actions;

export default withAuthSlice.reducer;
