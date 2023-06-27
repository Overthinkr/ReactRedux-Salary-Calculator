import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: null,
  },
  reducers: {
    setToken(state, action) {
      state.income = action.payload;
    },
  },
});

export const incomeActions = tokenSlice.actions;

export default tokenSlice;
