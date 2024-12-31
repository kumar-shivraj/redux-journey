import { CHANGE_FILTER_STATUS, TOGGLE_DARK_MODE } from "./types";

/*  ACTION CREATERS START HERE  */
export function changeFilterStatus(newStatus) {
  return {
    type: CHANGE_FILTER_STATUS,
    payload: newStatus,
  };
}

export function toggleDarkMode() {
  return {
    type: TOGGLE_DARK_MODE,
  };
}

//  responsibility of creating an action object now lies with these above function
//  which we can now import in all our other components
//  known as action creaters

/*  ACTION CREATERS END  */
