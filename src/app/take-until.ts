import {Subject} from "rxjs";

export class TakeUntil {
  $desrtoy = new Subject<void>();

  completeObservables() {
    this.$desrtoy.next();
    this.$desrtoy.complete();
    console.log('TakeUntil destroyed')
  }
}
