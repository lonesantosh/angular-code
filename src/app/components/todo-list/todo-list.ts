import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';

@Component({
  imports: [CommonModule],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList {

    TodoService = inject(TodoService);

  todoArr$ = this.TodoService.todoObs;

  deleteTodo(todoId: any) {
    this.TodoService.deleteToDo(todoId);
  }

}
