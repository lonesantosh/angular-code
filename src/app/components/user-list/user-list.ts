
import { Component } from '@angular/core';

import * as data from './user_data.json';
import { RouterLink } from '@angular/router';



@Component({
  imports: [RouterLink],

  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList {

  userArr = (data as any).default; // inside class

  constructor(){
    console.log(data); // { default : []}
  }
}
