import { createSlice } from "@reduxjs/toolkit";

const incomeSlice = createSlice({
  name: "income",
  initialState: {
    income: 0,
  },
  reducers: {
    setIncome(state, action) {
      state.income = action.payload;
    },
  },
});

export const incomeActions = incomeSlice.actions;

export default incomeSlice;
