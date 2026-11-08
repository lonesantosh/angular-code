import { Component } from '@angular/core';
import { HeavyComponent } from '../heavy-component/heavy-component';

@Component({
  imports: [
    HeavyComponent
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
