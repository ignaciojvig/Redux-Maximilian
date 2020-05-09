import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
};

export const resultSlice = createSlice({
  name: "result",
  initialState: initialState,
  reducers: {
    STORE_RESULT: (state, action) => {
      state.results.concat({
        id: new Date(),
        storedValue: action.payload.result,
      });
    },
    DELETE_RESULT: (state, action) => {
      state.results = state.results.filter(
        (result) => result.id !== action.payload.id
      );
    },
  },
});
