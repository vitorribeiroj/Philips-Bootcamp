import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Array<Todo> = [];
  todo: Todo = {
    id: 0,
    title: '',
    done: false
  }

  constructor() { }

  ngOnInit(): void {

    let items = localStorage.getItem('todos');

    if(items){
      this.todos = JSON.parse(items);
    }
   

  }

  addTodo(title: string){
    const id = this.todos.length + 1;
    this.todos.push({
      id: id,
      title: title,
      done: false
    })
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeToDo(todo: any){
    let indice = this.todos.indexOf(todo);
    this.todos.splice(indice,1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
