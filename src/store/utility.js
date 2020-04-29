import cloneDeep from "lodash.clonedeep";

export const updatedState = (previousState, updatedProperties) => {
  return {
    ...cloneDeep(previousState),
    ...updatedProperties,
  };
};
