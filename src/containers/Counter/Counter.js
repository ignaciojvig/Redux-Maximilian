import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { counterSlice, asyncActions } from "./counter.slice";
import { resultSlice } from "./result.slice";

import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { Button } from "antd";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterActions = counterSlice.actions;
  const resultActions = resultSlice.actions;

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
          onClick={() => dispatch(counterActions.INCREMENT())}
        >
          Increment
        </Button>

        <Button
          type="primary"
          onClick={() => dispatch(counterActions.DECREMENT())}
        >
          Decrement
        </Button>

        <Button
          type="primary"
          onClick={() => dispatch(counterActions.ADDFIVE(5))}
        >
          Add 5
        </Button>

        <Button
          type="primary"
          onClick={() => dispatch(counterActions.SUBTRACTFIVE(5))}
        >
          Subtract 5
        </Button>

        <Button
          type="primary"
          loading={counterState.addRandomLoadingState}
          onClick={() => dispatch(asyncActions.ADDRANDOM())}
        >
          Async Add a Random Between 1-10
        </Button>

        <Button
          type="primary"
          loading={counterState.subtractRandomLoadingState}
          onClick={() => dispatch(asyncActions.SUBTRACTRANDOM())}
        >
          Async Subtract a Random Between 1-10
        </Button>
      </div>

      <hr />

      <Button
        type="primary"
        onClick={() =>
          dispatch(resultActions.STORE_RESULT(counterState.counterScore))
        }
      >
        Store Result
      </Button>

      <ul>
        {storedResults.map((x) => (
          <li
            key={x.id}
            onClick={() => dispatch(resultActions.DELETE_RESULT(x.id))}
          >
            {x.storedValue}
          </li>
        ))}
      </ul>
    </div>
  );
};
