import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { of, mergeMap, concatMap } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-observable-demo2',
  styleUrl: './observable-demo2.css',
  templateUrl: './observable-demo2.html',
})
export class ObservableDemo2 {
 httpClient = inject(HttpClient);

  ngOnInit() {
    // this.mergeMap_demo();
    this.concatMap_demo();
  }

  mergeMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5); // outer observable

    userPublisher.pipe(mergeMap((userId) => {
          return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`); // inner observable
        }),
      ).subscribe((cartResponse) => {
        console.log(cartResponse);
      });
  }

  concatMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5); // outer observable

    userPublisher.pipe(concatMap((userId) => {
          return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`); // inner observable
        }),
      ).subscribe((cartResponse) => {
        console.log(cartResponse);
      });
  }

}
