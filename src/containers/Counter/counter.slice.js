import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { counterAPI } from "./counter.api";

const initialState = {
  counterScore: 0,
  addRandomLoadingState: false,
  subtractRandomLoadingState: false,
};

export const asyncActions = {
  ADDRANDOM: createAsyncThunk("ADDRANDOM", async (loadingAction, thunkAPI) => {
    thunkAPI.dispatch(loadingAction({ loadingState: true }));

    const response = await counterAPI.getRandomInteger();

    thunkAPI.dispatch(loadingAction({ loadingState: false }));

    return {
      random: response.data,
    };
  }),
  SUBTRACTRANDOM: createAsyncThunk(
    "SUBTRACTRANDOM",
    async (loadingAction, thunkAPI) => {
      thunkAPI.dispatch(loadingAction({ loadingState: true }));

      const response = await counterAPI.getRandomInteger();

      thunkAPI.dispatch(loadingAction({ loadingState: false }));

      return {
        random: response.data,
      };
    }
  ),
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
