import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';

@Component({
  imports: [],
  selector: 'app-todo-add',
  styleUrl: './todo-add.css',
  templateUrl: './todo-add.html',
})
export class TodoAdd {

 TodoService = inject(TodoService);

  addToDo(todoText: string) {
    this.TodoService.addNewTodo({ value: todoText });
  }

}
