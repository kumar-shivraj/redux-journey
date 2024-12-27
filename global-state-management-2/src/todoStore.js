import createStore from "./library/createStore";

const initialState = {
    "isDarkMode": false,
}

const toggleDarkMode = (state) => {
    console.log(state.isDarkMode);
    state.isDarkMode = !(state.isDarkMode);
    console.log(state.isDarkMode);
}

const store = createStore(initialState, toggleDarkMode);

export default store;