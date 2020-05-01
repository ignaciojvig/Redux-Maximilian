import * as actionTypes from "../actions/action.types";
import { updateState } from "../../../helpers/";

const initialState = {
  counterScore: 0,
  addRandomLoadingState: false,
  subtractRandomLoadingState: false,
};

const counterScoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateState(state, { counterScore: state.counterScore + 1 });

    case actionTypes.DECREMENT:
      return updateState(state, { counterScore: state.counterScore - 1 });

    case actionTypes.ADDFIVE:
      return updateState(state, {
        counterScore: state.counterScore + action.value,
      });

    case actionTypes.SUBTRACTFIVE:
      return updateState(state, {
        counterScore: state.counterScore - action.value,
      });

    case actionTypes.ADDRANDOM:
      return updateState(state, {
        counterScore: state.counterScore + action.random,
      });

    case actionTypes.ADDRANDOMLOADING:
      return updateState(state, {
        addRandomLoadingState: action.loadingState,
      });

    case actionTypes.SUBTRACTRANDOM:
      return updateState(state, {
        counterScore: state.counterScore - action.random,
      });

    case actionTypes.SUBTRACTRANDOMLOADING:
      return updateState(state, {
        subtractRandomLoadingState: action.loadingState,
      });

    default:
      return state;
  }
};

export default counterScoreReducer;
