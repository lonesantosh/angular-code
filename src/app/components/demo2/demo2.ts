import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math-service';
import { ObjectUtilService } from '../../services/object-util-service';

@Component({
  imports: [],
  selector: 'app-demo2',
  styleUrl: './demo2.css',
  templateUrl: './demo2.html',
})
export class Demo2 {

   mathService = inject(MathService); // Dependency Injection
  objectUtilService = inject(ObjectUtilService);

  ngOnInit() {
    console.log('Demo-2 ngOnInit');

    console.log(`Sum is: ${this.mathService.sum([10, 20, 30])}`);
    console.log(`Index of max number is: ${this.mathService.indexOfMax([30, 10, 50, 20, 40])}`);

    console.log(`Is object Empty? ${this.objectUtilService.isEmpty({})}`)
    console.log(`Is object Empty? ${this.objectUtilService.isEmpty({courseName:'angular'})}`)
  }
  ngOnDestroy() {
    console.log('Demo-2 ngOnDestroy');
  }

}
