// To test preferencesReducer()
let expected = { isDarkMode: true, filterStatus: "all" }
let currState = { isDarkMode: false, filterStatus: "all" }

let action = toggleDarkMode();
let actual = preferencesReducer(currState, action);

if (JSON.stringify(expected) != JSON.stringify(actual)) {
  throw `Expected: ${expected} but received ${actual}`
} else {
  console.log("Test passed for TOGGLE_DARK_MODE")
}

// To test todoReducer()
expected = { isDarkMode: false, filterStatus: "active" }
currState = { isDarkMode: false, filterStatus: "all" }
action = changeFilterStatus("active");
actual = todoReducer(currState, action);

if (JSON.stringify(expected) != JSON.stringify(actual)) {
  throw `Expected: ${expected} but received ${actual}`
} else {
  console.log("Test passed for CHANGE_FILTER_STATUS")
}
