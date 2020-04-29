import * as actionTypes from "./actionTypes";

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
