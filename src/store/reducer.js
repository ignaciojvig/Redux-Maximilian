const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "INCREMENT":
      newState.counter = state.counter + 1;
      return newState;

    case "DECREMENT":
      newState.counter = state.counter - 1;
      return newState;

    case "ADDFIVE":
      newState.counter = state.counter + 5;
      return newState;

    case "SUBTRACTFIVE":
      newState.counter = state.counter - 5;
      return newState;

    default:
      return newState;
  }
};

export default reducer;
