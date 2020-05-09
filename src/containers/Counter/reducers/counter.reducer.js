import { createSlice } from "@reduxjs/toolkit";

import { asyncActions } from "../actions/async.actions";

const initialState = {
  counterScore: 0,
  addRandomLoadingState: false,
  subtractRandomLoadingState: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    INCREMENT: (state) => {
      state.counterScore = state.counterScore + 1;
    },
    DECREMENT: (state) => {
      state.counterScore = state.counterScore - 1;
    },
    ADDFIVE: (state, action) => {
      state.counterScore = state.counterScore + action.payload.value;
    },
    SUBTRACTFIVE: (state, action) => {
      state.counterScore = state.counterScore - action.payload.value;
    },
    ADDRANDOMLOADING: (state, action) => {
      console.log(action);
      state.addRandomLoadingState = action.payload.loadingState;
    },
    SUBTRACTRANDOMLOADING: (state, action) => {
      state.subtractRandomLoadingState = action.payload.loadingState;
    },
  },
  extraReducers: {
    [asyncActions.ADDRANDOM.fulfilled]: (state, action) => {
      state.counterScore = state.counterScore + action.payload.random;
    },
    [asyncActions.SUBTRACTRANDOM.fulfilled]: (state, action) => {
      state.counterScore = state.counterScore - action.payload.random;
    },
  },
});
