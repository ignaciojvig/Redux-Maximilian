import { from } from "rxjs";
import { finalize } from "rxjs/operators";
import { counterAPIService } from "../services/counter.apiservice";
import { responseHandler } from "../../../helpers/";
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
        responseHandler(),
        finalize(() =>
          dispatch(loadingDispatch(actionTypes.ADDRANDOMLOADING, false))
        )
      )
      .subscribe((x) => dispatch(addRandomValueToCounter(x)));
  };
};

export const subtractRandomValue = () => {
  return (dispatch) => {
    dispatch(loadingDispatch(actionTypes.SUBTRACTRANDOMLOADING, true));

    from(counterAPIService.getRandomInteger())
      .pipe(
        responseHandler(),
        finalize(() =>
          dispatch(loadingDispatch(actionTypes.SUBTRACTRANDOMLOADING, false))
        )
      )
      .subscribe((x) => dispatch(subtractRandomValueFromCounter(x)));
  };
};
