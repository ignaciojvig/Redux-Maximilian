import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { actions } from "./actions/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

export const Counter = () => {
  const dispatch = useDispatch();
  const ctr = useSelector((state) => state.counterReducer.counter);
  const storedResults = useSelector((state) => state.resultReducer.results);

  return (
    <div>
      <CounterOutput value={ctr} />
      <CounterControl
        label="Increment"
        clicked={() => dispatch(actions.onIncrementCounter())}
      />
      <CounterControl
        label="Decrement"
        clicked={() => dispatch(actions.onDecrementCounter())}
      />
      <CounterControl
        label="Add 5"
        clicked={() => dispatch(actions.onAddFiveToCounter())}
      />
      <CounterControl
        label="Subtract 5"
        clicked={() => dispatch(actions.onSubtractFiveFromCounter())}
      />
      <CounterControl
        label="Async Add a Random Between 1-10"
        clicked={() => dispatch(actions.onAddRandomToCounter())}
      />
      <CounterControl
        label="Async Subtract a Random Between 1-10"
        clicked={() => dispatch(actions.onSubtractRandomFromCounter())}
      />
      <hr />
      <button onClick={() => dispatch(actions.onStoreResult(ctr))}>
        Store Result
      </button>
      <ul>
        {storedResults.map((x) => (
          <li key={x.id} onClick={() => dispatch(actions.onDeleteResult(x.id))}>
            {x.storedValue}
          </li>
        ))}
      </ul>
    </div>
  );
};
