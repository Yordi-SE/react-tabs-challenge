import { createSlice } from "@reduxjs/toolkit";

export const activeSlice = createSlice({
  name: "active",
  initialState: { active: "1" },
  reducers: {
    activate: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { activate } = activeSlice.actions;

export default activeSlice.reducer;
