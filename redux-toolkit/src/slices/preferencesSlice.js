import { createSlice } from "@reduxjs/toolkit"; // this uses Immer.js under the hood(internally). So we don't need to worry about mutability

// this object that we paas to CREATE a slice is called a CONFIGURATION OBJECT
const preferencesSlice = createSlice({
  name: "preferences",
  initialState: {
    isDarkMode: false,
  },

  //   replacement of action creater function
  //   this is combination of actions and reducers
  reducers: {
    // key value pair
    // name of the reducer is the key
    // reducer logic is the function which is "value against that key"
    // eslint-disable-next-line no-unused-vars
    toggleDarkMode: function (state, action) {
      // here  we are going crazy and mutating the original state
      // but redux toolkit is handling this and don't mutate the original state
      // it uses Immer.js internally and it creates a new state instead of muating this original state
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export default preferencesSlice;
