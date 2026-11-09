import { Component } from '@angular/core';
import { HeavyComponent } from '../heavy-component/heavy-component';
import { MaterialDemo } from '../material-demo/material-demo';

@Component({
  imports: [
   // HeavyComponent
   MaterialDemo
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

   heavyComponent:any;

  constructor() {
    import('../heavy-component/heavy-component').then(m => {
      this.heavyComponent = m.HeavyComponent;
    });
  }

}
