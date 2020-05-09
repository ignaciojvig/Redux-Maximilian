import { combineReducers } from "redux";

import { counterSlice } from "../containers/Counter/counter.slice";
import { resultSlice } from "../containers/Counter/result.slice";

export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  result: resultSlice.reducer,
});
