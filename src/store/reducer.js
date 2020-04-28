import cloneDeep from "lodash.clonedeep";
import * as actionTypes from "./actions";

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {
    case actionTypes.INCREMENT:
      newState.counter = state.counter + 1;
      return newState;

    case actionTypes.DECREMENT:
      newState.counter = state.counter - 1;
      return newState;

    case actionTypes.ADDFIVE:
      newState.counter = state.counter + action.value;
      return newState;

    case actionTypes.SUBTRACTFIVE:
      newState.counter = state.counter - action.value;
      return newState;

    case actionTypes.STORE_RESULT:
      newState.results = state.results.concat({
        id: new Date(),
        storedValue: state.counter,
      });
      return newState;

    case actionTypes.DELETE_RESULT:
      newState.results = state.results.filter(
        (result) => result.id !== action.id
      );
      return newState;

    default:
      return newState;
  }
};

export default reducer;
