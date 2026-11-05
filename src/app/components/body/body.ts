import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { UserList } from '../user-list/user-list';
import { ProductList } from '../product-list/product-list';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { EmployeeCrud } from '../employee-crud/employee-crud';

@Component({
  imports: [
//DataBinding,
 //DirectivesDemo,
  //UserList,
  //ProductList,
  //PipesDemo,
  //ParentDemo,
  EmployeeCrud
 

  ],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {}
