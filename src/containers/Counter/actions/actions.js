import * as actionCreators from "./action.creators";

export const actions = {
  onIncrementCounter: () => actionCreators.increment(),
  onDecrementCounter: () => actionCreators.decrement(),
  onAddFiveToCounter: () => actionCreators.addfive(5),
  onSubtractFiveFromCounter: () => actionCreators.subtractfive(5),
  onStoreResult: (counter) => actionCreators.storeResult(counter),
  onDeleteResult: (resultId) => actionCreators.deleteResult(resultId),
  onAddRandomToCounter: () => actionCreators.addRandomValue(),
  onSubtractRandomFromCounter: () => actionCreators.subtractRandomValue(),
};
