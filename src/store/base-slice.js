import { createSlice } from "@reduxjs/toolkit";

const salarySlice = createSlice({
  name: "basesalary",
  initialState: {
    basesalary: 0,
  },
  reducers: {
    setSalary(state, action) {
      state.basesalary = action.payload;
    },
  },
});

export const salaryActions = salarySlice.actions;

export default salarySlice;
