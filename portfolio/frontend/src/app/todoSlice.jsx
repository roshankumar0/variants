// todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    name: [],
    age: 20,
  },
  reducers: {
    nameChange: (state, action) => {
      state.name.push(action.payload);
    },
    remove: (state, action) => {
      // Use filter to create a new array excluding the name to be removed
      state.name = state.name.filter((name, index) => index !== action.payload);
    },
  },
});

export const { nameChange, remove } = todoSlice.actions;
export default todoSlice.reducer;
