export const initialState = {
  count: 0,
};
export const reducers = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }
  // If no action type matches, return the current state
  return state;
};
