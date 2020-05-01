import { pipe } from "rxjs";
import { finalize } from "rxjs/operators";
import { loadingDispatch } from "../../store/utility-actions/utility.actions.creators";

export const loadingHandler = (dispatch, actionType) =>
  pipe(
    finalize(
      () => dispatch(loadingDispatch(actionType, false))
    )
  );
