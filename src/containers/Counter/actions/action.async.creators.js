import { from } from "rxjs";
import { counterAPIService } from "../services/counter.apiservice";
import { loadingHandler, responseHandler } from "../../../helpers/";
import {
  addRandomValueToCounter,
  subtractRandomValueFromCounter,
} from "./action.creators";

import * as actionTypes from "./action.types";
import { loadingDispatch } from "../../../store/utility-actions/utility.actions.creators";

export const addRandomValue = () => {
  return (dispatch) => {
    dispatch(loadingDispatch(actionTypes.ADDRANDOMLOADING, true));
    from(counterAPIService.getRandomInteger())
      .pipe(
        loadingHandler(dispatch, actionTypes.ADDRANDOMLOADING),
        responseHandler()
      )
      .subscribe((x) => dispatch(addRandomValueToCounter(x)));
  };
};

export const subtractRandomValue = () => {
  return (dispatch) => {
    dispatch(loadingDispatch(actionTypes.SUBTRACTRANDOMLOADING, true));
    from(counterAPIService.getRandomInteger())
      .pipe(
        loadingHandler(dispatch, actionTypes.SUBTRACTRANDOMLOADING),
        responseHandler()
      )
      .subscribe((x) => dispatch(subtractRandomValueFromCounter(x)));
  };
};
