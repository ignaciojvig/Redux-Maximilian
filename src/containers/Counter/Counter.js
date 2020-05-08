import React from "react";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "./actions/actions";

import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { Button } from "antd";

export const Counter = () => {
  const dispatch = useDispatch();

  const counterState = useSelector((state) => state.counter);
  const storedResults = useSelector((state) => state.result.results);

  return (
    <div>
      <CounterOutput value={counterState.counterScore} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "1em 0",
        }}
      >
        <Button
          type="primary"
          onClick={() => dispatch(actions.onIncrementCounter())}
        >
          Increment
        </Button>

        <Button
          type="primary"
          onClick={() => dispatch(actions.onDecrementCounter())}
        >
          Decrement
        </Button>

        <Button
          type="primary"
          onClick={() => dispatch(actions.onAddFiveToCounter(5))}
        >
          Add 5
        </Button>

        <Button
          type="primary"
          onClick={() => dispatch(actions.onSubtractFiveFromCounter(5))}
        >
          Subtract 5
        </Button>

        <Button
          type="primary"
          loading={counterState.addRandomLoadingState}
          onClick={() => dispatch(actions.onAddRandomToCounter())}
        >
          Async Add a Random Between 1-10
        </Button>

        <Button
          type="primary"
          loading={counterState.subtractRandomLoadingState}
          onClick={() => dispatch(actions.onSubtractRandomFromCounter())}
        >
          Async Subtract a Random Between 1-10
        </Button>
      </div>

      <hr />

      <Button
        type="primary"
        onClick={() =>
          dispatch(actions.onStoreResult(counterState.counterScore))
        }
      >
        Store Result
      </Button>

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
