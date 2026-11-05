import { Component } from '@angular/core';
import { MathService } from '../../services/math-service';
import { ObjectUtilService } from '../../services/object-util-service';

@Component({
  imports: [],
  selector: 'app-demo1',
  styleUrl: './demo1.css',
  templateUrl: './demo1.html',
})
export class Demo1 {

   timerId: any;

  constructor(private mathService:MathService, private utilService:ObjectUtilService) {  // Dependency Injection
    this.timerId = setInterval(() => {
      console.log('I am SetInterval from Demo-1');
    }, 1000);
  }

  ngOnInit() {
    console.log('Demo-1 ngOnInit');

    console.log(`Sum is: ${this.mathService.sum([10,20,30,40,50])}`);
    console.log(`Average is: ${this.mathService.average([10,20,30,40,50])}`);

    console.log('is object empty? ', this.utilService.isEmpty({}));
    console.log('is object empty? ', this.utilService.isEmpty({a:10}));
  }
  ngOnDestroy() {
    console.log('Demo-1 ngOnDestroy');
    clearInterval(this.timerId);
  }

}
