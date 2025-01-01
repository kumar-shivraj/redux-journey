export const combineReducers = (reducersMapping) => {
    const initialState = {}
   
    Object.keys(reducersMapping).forEach(id => initialState[id] = undefined)
    console.log(initialState)
  
    const combinedReducer = (state = initialState, action) => {
        let newState = { ...state }
  
        Object.entries(reducersMapping).forEach(([id, reducer]) => {
            newState[id] = reducer(newState[id], action)
            console.log(newState)
        })
  
        return newState
    }
  
    return combinedReducer
}