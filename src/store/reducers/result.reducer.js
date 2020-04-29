import * as actionTypes from "../actions/actionTypes";
import { updatedState } from "../utility";

const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updatedState(state, {
        results: state.results.concat({
          id: new Date(),
          storedValue: action.result,
        }),
      });

    case actionTypes.DELETE_RESULT:
      return updatedState(state, {
        results: state.results.filter((result) => result.id !== action.id),
      });

    default:
      return state  ;
  }
};

export default resultReducer;
