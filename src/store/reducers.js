import { combineReducers } from "redux";

import { counterSlice } from "../containers/Counter/reducers/counter.reducer";
import { resultReducer } from "../containers/Counter/reducers/result.reducer";

export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  result: resultReducer,
});
