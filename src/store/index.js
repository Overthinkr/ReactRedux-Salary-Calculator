import { configureStore } from "@reduxjs/toolkit";
import salarySlice from "./base-slice";
import hourSlice from "./hour-slice";

const store = configureStore({
  reducer: {
    basesalary: salarySlice.reducer,
    hours: hourSlice.reducer,
  },
});

export default store;
