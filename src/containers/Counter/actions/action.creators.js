import * as actionTypes from "./action.types";
import { counterAPIService } from "../services/counter.apiservice";

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

const addRandomValueToCounter = (randomValue) => {
  return {
    type: actionTypes.ADDRANDOM,
    random: randomValue,
  };
};

const subtractRandomValueFromCounter = (randomValue) => {
  return {
    type: actionTypes.SUBTRACTRANDOM,
    random: randomValue,
  };
};

export const addRandomValue = () => {
  return async (dispatch) => {
    const randomValue = await counterAPIService.getRandomInteger();
    dispatch(addRandomValueToCounter(randomValue.data));
  };
};

export const subtractRandomValue = () => {
  return async (dispatch) => {
    const randomValue = await counterAPIService.getRandomInteger();
    dispatch(subtractRandomValueFromCounter(randomValue.data));
  };
};
