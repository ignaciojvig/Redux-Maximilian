import * as actionTypes from "../actions/actionTypes";
import { updatedState } from "../utility";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updatedState(state, { counter: state.counter + 1 });

    case actionTypes.DECREMENT:
      return updatedState(state, { counter: state.counter - 1 });

    case actionTypes.ADDFIVE:
      return updatedState(state, { counter: state.counter + action.value });

    case actionTypes.SUBTRACTFIVE:
      return updatedState(state, { counter: state.counter - action.value });

    default:
      return state;
  }
};

export default counterReducer;
