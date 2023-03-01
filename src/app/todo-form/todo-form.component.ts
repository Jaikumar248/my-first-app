import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  // constructor(private ts: TodoService){

  // }
  // todos = []

  // ngOnInit(): void {
  //   this.ts.todolist.subscribe(
  //     (data) => {
  //       console.log(data)
  //     }
  //   )
  //   this.ts.sendTodos()
  // }
  ngOnInit(): void {
    
  }
  enteredText: string;

  OnBtnClick(){
    console.log(this.enteredText)
  }
}
