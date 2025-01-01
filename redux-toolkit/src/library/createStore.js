const createStore = (reducer) => {
    let state;

    const subscribers = [];

    const getState = () => {
        return state;
    }

    const dispatch = (action) => {
        console.log('Invoked dispatch()', action);
        state = reducer(state, action);
        console.log(state);
        subscribers.forEach(callback => callback());
    }

    dispatch({});

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