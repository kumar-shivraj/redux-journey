import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoReducer",
  initialState: {
    filterStatus: "all",
  },
  reducers: {
    changeFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

console.log("todo slice : ", todoSlice);
// we need to export the actions as well in order to dispatch that
export const { changeFilterStatus } = todoSlice.actions;
export default todoSlice.reducer;
