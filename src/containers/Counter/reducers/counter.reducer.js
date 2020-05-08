import * as actionTypes from "../actions/action.types";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  counterScore: 0,
  addRandomLoadingState: false,
  subtractRandomLoadingState: false,
};

export const counterReducer = createReducer(initialState, {
  [actionTypes.INCREMENT]: (state) => {
    state.counterScore = state.counterScore + 1;
  },
  [actionTypes.DECREMENT]: (state) => {
    state.counterScore = state.counterScore - 1;
  },
  [actionTypes.ADDFIVE]: (state, action) => {
    state.counterScore = state.counterScore + action.payload.value;
  },
  [actionTypes.SUBTRACTFIVE]: (state, action) => {
    state.counterScore = state.counterScore - action.payload.value;
  },
  [actionTypes.ADDRANDOM]: (state, action) => {
    state.counterScore = state.counterScore + action.payload.random;
  },
  [actionTypes.ADDRANDOMLOADING]: (state, action) => {
    state.addRandomLoadingState = action.payload.loadingState;
  },
  [actionTypes.SUBTRACTRANDOM]: (state, action) => {
    state.counterScore = state.counterScore - action.payload.random;
  },
  [actionTypes.SUBTRACTRANDOMLOADING]: (state, action) => {
    state.subtractRandomLoadingState = action.payload.loadingState;
  },
});
