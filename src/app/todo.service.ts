import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos=[
    'task1',
    'task2',
    'task3'
  ]

  // todolist = new Subject()

  // constructor() {
  //   this.sendTodos();
  //  }

  //  sendTodos(){
  //   this.todolist.next(this.todos)
  //  }

  // dataEmitter =  new EventEmitter(string)();
  // this.dataEmitter.emit(data);
}
