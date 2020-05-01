import * as actionTypes from "./action.types";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const addfive = (value) => {
  return {
    type: actionTypes.ADDFIVE,
    value,
  };
};

export const subtractfive = (value) => {
  return {
    type: actionTypes.SUBTRACTFIVE,
    value,
  };
};

export const storeResult = (counter) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: counter,
  };
};

export const deleteResult = (resultId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: resultId,
  };
};

export const addRandomValueToCounter = (randomValue) => {
  return {
    type: actionTypes.ADDRANDOM,
    random: randomValue,
  };
};

export const subtractRandomValueFromCounter = (randomValue) => {
  return {
    type: actionTypes.SUBTRACTRANDOM,
    random: randomValue,
  };
};
