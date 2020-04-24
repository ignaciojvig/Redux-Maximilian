const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "INC_COUNTER") {
    newState.counter = state.counter + 1;
    return newState;
  } else if (action.type === "ADD_COUNTER") {
    newState.counter = state.counter + action.value;
    return newState;
  } else {
    return newState;
  }
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log("[Subscription] ", store.getState());
});

// Dispatching Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
