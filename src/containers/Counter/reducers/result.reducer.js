import * as actionTypes from "../actions/action.types";
import { updateState } from "../../../helpers/";

const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateState(state, {
        results: state.results.concat({
          id: new Date(),
          storedValue: action.payload.result,
        }),
      });

    case actionTypes.DELETE_RESULT:
      return updateState(state, {
        results: state.results.filter((result) => result.id !== action.payload.id),
      });

    default:
      return state;
  }
};

export default resultReducer;
