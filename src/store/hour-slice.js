import { createSlice } from "@reduxjs/toolkit";

const hourSlice = createSlice({
  name: "hours",
  initialState: {
    hours: 0,
  },
  reducers: {
    setHours(state, action) {
      state.hours = action.payload;
    },
  },
});

export const hourActions = hourSlice.actions;

export default hourSlice;
