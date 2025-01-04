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

export default todoSlice;
