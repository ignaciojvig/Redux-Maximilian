import * as actionTypes from "../actions/action.types";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  results: [],
};

export const resultReducer = createReducer(initialState, {
  [actionTypes.STORE_RESULT]: (state, action) => {
    state.results.concat({
      id: new Date(),
      storedValue: action.payload.result,
    });
  },
  [actionTypes.DELETE_RESULT]: (state, action) => {
    state.results = state.results.filter(
      (result) => result.id !== action.payload.id
    );
  },
});
