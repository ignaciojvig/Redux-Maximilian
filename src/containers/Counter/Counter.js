import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { actions } from "./actions/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { Button } from "antd";

export const Counter = () => {
  const dispatch = useDispatch();

  const counterState = useSelector((state) => state.counter);
  const storedResults = useSelector((state) => state.result.results);

  return (
    <div>
      <CounterOutput value={counterState.counterScore} />
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
      <Button
        type="primary"
        loading={counterState.loadingState}
        onClick={() => dispatch(actions.onAddRandomToCounter())}
      >
        Async Add a Random Between 1-10
      </Button>
      <CounterControl
        label="Async Add a Random Between 1-10"
        clicked={() => dispatch(actions.onAddRandomToCounter())}
      />
      <CounterControl
        label="Async Subtract a Random Between 1-10"
        clicked={() => dispatch(actions.onSubtractRandomFromCounter())}
      />
      <hr />
      <button
        onClick={() =>
          dispatch(actions.onStoreResult(counterState.counterScore))
        }
      >
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
