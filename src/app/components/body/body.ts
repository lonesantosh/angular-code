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
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { ObservableDemo3 } from '../observable-demo3/observable-demo3';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';
import { TodoList } from '../todo-list/todo-list';
import { TodoAdd } from '../todo-add/todo-add';
import { HttpDemo2 } from '../http-demo2/http-demo2';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { FormDemo1 } from '../form-demo1/form-demo1';
import { TemplateFormDemo } from '../template-form-demo/template-form-demo';
import { ModelFormDemo1 } from '../model-form-demo1/model-form-demo1';
import { SignalFormDemo } from '../signal-form-demo/signal-form-demo';
import { DynamicForm } from '../dynamic-form/dynamic-form';

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
   // ObservableDemo1,
    //ObservableDemo2,
    //ObservableDemo3,
   // SubjectDemo1
    //TodoAdd,
    //TodoList
    //HttpDemo2
    //SignalDemo1
    //FormDemo1
    //TemplateFormDemo
    //ModelFormDemo1
   // SignalFormDemo
    DynamicForm


],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {

  flag = true;
}
