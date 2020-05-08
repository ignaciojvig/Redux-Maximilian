import { pipe } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { showNotification } from "../../components/Notification/notification";

export const responseHandler = () =>
  pipe(
    map((x) => x.data),
    catchError(() => showNotification())
  );
