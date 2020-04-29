import * as actionTypes from "./actionTypes";

export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
};

export const storeResult = (counter) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldState = getState();
      // console.log(oldState); Don't Overuse it!
      dispatch(saveResult(counter));
    }, 2000);
  };
};

export const deleteResult = (resultId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: resultId,
  };
};
