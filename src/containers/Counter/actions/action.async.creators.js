import { from } from "rxjs";
import { counterAPIService } from "../services/counter.apiservice";
import { loadingHandler, responseHandler } from "../../../helpers/";
import {
  addRandomValueToCounter,
  subtractRandomValueFromCounter,
} from "./action.creators";

import * as actionTypes from "./action.types";

export const addRandomValue = () => {
  return (dispatch) => {
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
    from(counterAPIService.getRandomInteger())
      .pipe(
        loadingHandler(dispatch, actionTypes.SUBTRACTRANDOMLOADING),
        responseHandler()
      )
      .subscribe((x) => dispatch(subtractRandomValueFromCounter(x)));
  };
};
