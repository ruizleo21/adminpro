import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription;

  constructor() {
   this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
  retornaIntervalo(): Observable<number> {
    return interval(100)
            .pipe(
              // take(10),
              map(valor => valor + 1),
              filter(valor => valor % 2 === 0),
            );
  }


}
