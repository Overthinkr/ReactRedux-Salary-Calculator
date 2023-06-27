import { configureStore } from "@reduxjs/toolkit";
import salarySlice from "./base-slice";
import hourSlice from "./hour-slice";
import incomeSlice from "./income-slice";
import tokenSlice from "./token-slice";

const store = configureStore({
  reducer: {
    basesalary: salarySlice.reducer,
    income: incomeSlice.reducer,
    hours: hourSlice.reducer,
    token: tokenSlice.reducer,
  },
});

export default store;
