import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
//  todos=[
//   'task1',
//   'task2',
//   'task3'

//  ]
//  todoList = new Subject()
//  constructor(){
//   this.sendTodos()
//  }
//  sendTodos(){
//   this.todoList.next(this.todos)
//  }
//  addNewTodo(t:string){
//   this.todos.push(t);
//   this.sendTodos();
//  }

s1 = new BehaviorSubject("This is behavior subject")
constructor(){
  this.s1.next("simple Subject")
}
}
