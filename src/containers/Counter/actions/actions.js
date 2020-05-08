import * as asyncActionCreators from "./async.action.creators";

import { createAction } from "@reduxjs/toolkit";
import * as actionTypes from "./action.types";

export const onIncrementCounter = createAction(actionTypes.INCREMENT);

export const onDecrementCounter = createAction(actionTypes.DECREMENT);

export const onAddFiveToCounter = createAction(actionTypes.ADDFIVE, (value) => {
  return {
    payload: {
      value: value,
    },
  };
});

export const onSubtractFiveFromCounter = createAction(
  actionTypes.SUBTRACTFIVE,
  (value) => {
    return {
      payload: {
        value: value,
      },
    };
  }
);

export const onStoreResult = createAction(
  actionTypes.STORE_RESULT,
  (counter) => {
    return {
      payload: {
        result: counter,
      },
    };
  }
);

export const onDeleteResult = createAction(
  actionTypes.DELETE_RESULT,
  (resultId) => {
    return {
      payload: {
        id: resultId,
      },
    };
  }
);

export const onAddRandomToCounter = () =>
  asyncActionCreators.addOrSubtractRandomLoading(
    actionTypes.ADDRANDOM,
    actionTypes.ADDRANDOMLOADING
  );

export const onSubtractRandomFromCounter = () =>
  asyncActionCreators.addOrSubtractRandomLoading(
    actionTypes.SUBTRACTRANDOM,
    actionTypes.SUBTRACTRANDOMLOADING
  );
