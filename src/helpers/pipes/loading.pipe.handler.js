import { pipe } from "rxjs";
import { tap, finalize } from "rxjs/operators";
import { loadingDispatch } from "../../store/utility-actions/utility.actions.creators";

export const loadingHandler = (dispatch, actionType) =>
  pipe(
    tap(() => dispatch(loadingDispatch(actionType, true))),
    finalize(() =>
      // Timeout for mock purposes only !!!!
      // Just to be able to see the loading triggering on and off
      setTimeout(() => {
        dispatch(loadingDispatch(actionType, false));
      }, 4000)
    )
  );
