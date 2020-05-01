import * as actionCreators from "./action.creators";
import * as actionAsyncCreators from "./action.async.creators";

export const actions = {
  onIncrementCounter: () => actionCreators.increment(),
  onDecrementCounter: () => actionCreators.decrement(),
  onAddFiveToCounter: () => actionCreators.addfive(5),
  onSubtractFiveFromCounter: () => actionCreators.subtractfive(5),
  onStoreResult: (counter) => actionCreators.storeResult(counter),
  onDeleteResult: (resultId) => actionCreators.deleteResult(resultId),

  onAddRandomToCounter: () => actionAsyncCreators.addRandomValue(),
  onSubtractRandomFromCounter: () => actionAsyncCreators.subtractRandomValue(),
};
