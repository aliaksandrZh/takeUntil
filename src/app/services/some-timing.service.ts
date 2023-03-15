import {Injectable} from "@angular/core";
import {finalize, interval, map, tap} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SomeTimingService {
  getTime() {
    return interval(5000)
      .pipe(
        map(v => Date.now()),
        tap(v => console.log('getTime', v)),
        finalize(() => console.log('getTime is done'))
      )
  }
}
