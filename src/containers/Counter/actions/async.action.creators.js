import { counterAPIService } from "../services/counter.apiservice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const asyncActions = {
  ADDRANDOM: createAsyncThunk("ADDRANDOM", async (loadingAction, thunkAPI) => {
    thunkAPI.dispatch(loadingAction({ loadingState: true }));

    const response = await counterAPIService.getRandomInteger();

    thunkAPI.dispatch(loadingAction({ loadingState: false }));

    return {
      random: response.data,
    };
  }),
  SUBTRACTRANDOM: createAsyncThunk(
    "SUBTRACTRANDOM",
    async (loadingAction, thunkAPI) => {
      thunkAPI.dispatch(loadingAction({ loadingState: true }));

      const response = await counterAPIService.getRandomInteger();

      thunkAPI.dispatch(loadingAction({ loadingState: false }));

      return {
        random: response.data,
      };
    }
  ),
};
