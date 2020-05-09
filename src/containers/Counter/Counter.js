import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "./reducers/counter.reducer";

import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { Button } from "antd";
import { asyncActions } from "./actions/async.actions";

export const Counter = () => {
  const dispatch = useDispatch();
  const { actions } = counterSlice;

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
        <Button type="primary" onClick={() => dispatch(actions.INCREMENT())}>
          Increment
        </Button>

        <Button type="primary" onClick={() => dispatch(actions.DECREMENT())}>
          Decrement
        </Button>

        <Button type="primary" onClick={() => dispatch(actions.ADDFIVE(5))}>
          Add 5
        </Button>

        <Button
          type="primary"
          onClick={() => dispatch(actions.SUBTRACTFIVE(5))}
        >
          Subtract 5
        </Button>

        <Button
          type="primary"
          loading={counterState.addRandomLoadingState}
          onClick={() =>
            dispatch(asyncActions.ADDRANDOM(actions.ADDRANDOMLOADING))
          }
        >
          Async Add a Random Between 1-10
        </Button>

        <Button
          type="primary"
          loading={counterState.subtractRandomLoadingState}
          onClick={() =>
            dispatch(asyncActions.SUBTRACTRANDOM(actions.SUBTRACTRANDOMLOADING))
          }
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
