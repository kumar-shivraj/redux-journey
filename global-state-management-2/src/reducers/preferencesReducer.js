import { TOGGLE_DARK_MODE } from "../actions/types";

function preferencesReducer(
  state = {
    isDarkMode: true,
    // isDarkMode: false,
  },
  action
) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
}

export default preferencesReducer;
