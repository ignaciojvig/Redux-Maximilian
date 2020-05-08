import { rootReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

//export const store = createStore(
//  rootReducer,
//  composeEnhancers(applyMiddleware(thunk))
//);

export const store = configureStore({ reducer: rootReducer });
