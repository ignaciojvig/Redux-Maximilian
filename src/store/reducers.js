import { combineReducers } from "redux";

import counterReducer from "../containers/Counter/reducers/counter.reducer";
import resultReducer from "../containers/Counter/reducers/result.reducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  result: resultReducer,
});
