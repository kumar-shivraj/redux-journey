const createStore = (initialState, handler) => {
    const state = initialState;

    const subscribers = []

    const getState = () => {
        return state;
    }

    const dispatch = () => {
        console.log('Invoked Dispatch');
        handler(state);
        subscribers.forEach(callback => callback());
    }

    const subscribe = (callback) => {
        subscribers.push(callback);
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

export default createStore;