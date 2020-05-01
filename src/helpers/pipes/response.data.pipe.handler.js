import { pipe } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";
import { showNotification } from "../../components/Notification/notification";

export const responseHandler = () =>
  pipe(
    tap((x) => {
      // This tap will use a random number to throw an error at a frequency of 30% of its executions
      // This is for debug purposes only! Which is to show the RxJs pipes working!
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber < 3) {
        throw new Error("Ixi maluco");
      }
    }),
    map((x) => x.data),
    catchError(() => showNotification())
  );
