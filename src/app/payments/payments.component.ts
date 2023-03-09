import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  constructor(private ts:TodoService){

  }
  ngOnInit(): void {
    this.ts.s1.subscribe((data:any) =>{
      console.log(data)
    })
  }

}
