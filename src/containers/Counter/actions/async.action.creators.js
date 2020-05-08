import { from } from "rxjs";
import { finalize } from "rxjs/operators";
import { counterAPIService } from "../services/counter.apiservice";
import { responseHandler } from "../../../helpers";

import { createAction } from "@reduxjs/toolkit";

export const addOrSubtractRandomLoading = (actionType, loadingActionType) => {
  return (dispatch) => {
    dispatch(
      createAction(loadingActionType, () => {
        return {
          payload: {
            loadingState: true,
          },
        };
      })()
    );

    from(counterAPIService.getRandomInteger())
      .pipe(
        responseHandler(),
        finalize(() => {
          dispatch(
            createAction(loadingActionType, () => {
              return {
                payload: {
                  loadingState: false,
                },
              };
            })()
          );
        })
      )
      .subscribe((x) =>
        dispatch(
          createAction(actionType, () => {
            return {
              payload: {
                random: x,
              },
            };
          })()
        )
      );
  };
};
