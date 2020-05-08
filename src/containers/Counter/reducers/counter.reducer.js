import * as actionTypes from "../actions/action.types";
import { updateState } from "../../../helpers/";

const initialState = {
  counterScore: 0,
  addRandomLoadingState: false,
  subtractRandomLoadingState: false,
};

const counterScoreReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateState(state, { counterScore: state.counterScore + 1 });

    case actionTypes.DECREMENT:
      return updateState(state, { counterScore: state.counterScore - 1 });

    case actionTypes.ADDFIVE:
      return updateState(state, {
        counterScore: state.counterScore + action.payload.value,
      });

    case actionTypes.SUBTRACTFIVE:
      return updateState(state, {
        counterScore: state.counterScore - action.payload.value,
      });

    case actionTypes.ADDRANDOM:
      return updateState(state, {
        counterScore: state.counterScore + action.payload.random,
      });

    case actionTypes.ADDRANDOMLOADING:
      return updateState(state, {
        addRandomLoadingState: action.payload.loadingState,
      });

    case actionTypes.SUBTRACTRANDOM:
      return updateState(state, {
        counterScore: state.counterScore - action.payload.random,
      });

    case actionTypes.SUBTRACTRANDOMLOADING:
      return updateState(state, {
        subtractRandomLoadingState: action.payload.loadingState,
      });

    default:
      return state;
  }
};

export default counterScoreReducer;
