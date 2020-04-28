import cloneDeep from "lodash.clonedeep";
import * as actionTypes from "../actions";

const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {
    case actionTypes.STORE_RESULT:
      newState.results = state.results.concat({
        id: new Date(),
        storedValue: action.result,
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

export default resultReducer;
