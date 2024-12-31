import { CHANGE_FILTER_STATUS } from "../actions/types";

function todoReducer(
  state = {
    filterStatus: "active",
  },
  action
) {
  switch (action.type) {
    case CHANGE_FILTER_STATUS:
      return {
        ...state,
        filterStatus: action.payload,
      };
    default:
      return state;
  }
}

export default todoReducer;
