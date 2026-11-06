import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { UserList } from '../user-list/user-list';
import { ProductList } from '../product-list/product-list';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { EmployeeCrud } from '../employee-crud/employee-crud';
import { Demo1 } from '../demo1/demo1';
import { Demo2 } from '../demo2/demo2';
import { HttpDemo1 } from '../http-demo1/http-demo1';
import { EmployeeCrudHttp } from '../employee-crud-http/employee-crud-http';
import { UserCrudHttp } from '../user-crud-http/user-crud-http';
import { CommentList } from '../comment-list/comment-list';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';

@Component({
  imports: [
    //DataBinding,
    //DirectivesDemo,
    //UserList,
    //ProductList,
    //PipesDemo,
    //ParentDemo,
    //EmployeeCrud,
    //Demo1,
    //Demo2,
    //HttpDemo1,
   // EmployeeCrudHttp,
    //UserCrudHttp,
    //CommentList
    ObservableDemo1



],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {

  flag = true;
}
