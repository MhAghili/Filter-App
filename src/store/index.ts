import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filter-slice";

const store = configureStore({
  reducer: { filters: filtersSlice.reducer },
});

export default store;
export type FilterDispatch = typeof store.dispatch;
