import { Component, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child2-demo',
  styleUrl: './child2-demo.css',
  templateUrl: './child2-demo.html',
  outputs: ['eventToEmitCValue'],

})
export class Child2Demo {

  b = 200;
  c = 300;

  eventToEmitCValue = new EventEmitter();
  sendDataToParent() {
    this.eventToEmitCValue.emit(this.c);
  }

}
