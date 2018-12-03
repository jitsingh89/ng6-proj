import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: any;

  constructor(private _todoService : TodoService) { }

  ngOnInit() {
    this._todoService.getTodos().subscribe( (data) => {     
      this.todos = data;
      console.log(this.todos);
    })
  }

}
