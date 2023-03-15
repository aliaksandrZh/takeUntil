import {Component, OnDestroy, OnInit} from "@angular/core";
import {SomeTimingService} from "../../services/some-timing.service";
import {Observable, takeUntil} from "rxjs";
import {TakeUntil} from "../../take-until";

@Component({
  selector: "some-component",
  template: `<h2>Some Component</h2>
  <div>{{time}}</div>`
})
export class SomeComponentComponent extends TakeUntil implements OnInit, OnDestroy {
  time: number = 0;

  constructor(private someService: SomeTimingService) {
    super();
  }

  ngOnInit() {
    console.log('SomeComponentComponent - init');

   this.someService.getTime()
     .pipe(
       takeUntil(this.$desrtoy)
     )
     .subscribe(t => this.time = t);
  }

  ngOnDestroy() {
    console.log('SomeComponentComponent - destroy');
    this.completeObservables();
  }
}
