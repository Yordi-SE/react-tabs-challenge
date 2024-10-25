import { configureStore } from "@reduxjs/toolkit";
import activeSlice from "./features/activeSlice";
import { apiSlice } from "./features/api/api";

export const store = configureStore({
  reducer: {
        active: activeSlice,
      [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});
