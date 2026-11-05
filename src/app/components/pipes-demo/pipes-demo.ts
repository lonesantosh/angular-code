import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlphaNumeric } from '../../custom-directives/alpha-numeric';
import { MySortPipe } from '../../custom_pipes/my-sort-pipe';
import { OrdinalPipe } from '../../custom_pipes/ordinal-pipe';
import { RemainingPipe } from '../../custom_pipes/remaining-pipe';

@Component({
  imports: [

    CommonModule, FormsModule,
    RemainingPipe, OrdinalPipe, AlphaNumeric,
    MySortPipe
  ],
  selector: 'app-pipes-demo',
  styleUrl: './pipes-demo.css',
  templateUrl: './pipes-demo.html',
})
export class PipesDemo {

  userName = 'sAnTosH lOnE';
  salary = 5000;
  dateObj = new Date();

  user = { name: 'Santosh', role: 'Engineer', add: 'Nanded', age: 29 };
  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota'];

  msg = 'Hello';
  num = 21;

  numArr = [50, 10, 40, 30, 20];

}
