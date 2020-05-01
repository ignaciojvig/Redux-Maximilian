import { pipe } from "rxjs";
import { map } from "rxjs/operators";

export const responseHandler = () => pipe(map((x) => x.data));
