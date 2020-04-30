import * as actionCreators from "./action.creators";

export default {
  onIncrementCounter: () => actionCreators.increment(),
  onDecrementCounter: () => actionCreators.decrement(),
  onAddFiveToCounter: () => actionCreators.addfive(5),
  onSubtractFiveFromCounter: () => actionCreators.subtractfive(5),
  onStoreResult: (counter) => actionCreators.storeResult(counter),
  onDeleteResult: (resultId) => actionCreators.deleteResult(resultId),
};
