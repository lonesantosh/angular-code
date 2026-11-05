import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { UserList } from '../user-list/user-list';
import { ProductList } from '../product-list/product-list';

@Component({
  imports: [
//DataBinding,
 //DirectivesDemo,
  //UserList,
  ProductList
 
  ],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {}
