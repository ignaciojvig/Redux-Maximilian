import cloneDeep from "lodash.clonedeep";

export const updateState = (previousState, updatedProperties) => {
  return {
    ...cloneDeep(previousState),
    ...updatedProperties,
  };
};