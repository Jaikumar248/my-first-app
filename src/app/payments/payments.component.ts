import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  data="Pass to data using view child";

  passToParent(){
    return this.data;
  }
  @Output() parent = new EventEmitter();
  message="passing the data using output"
  passToParentOutput(){
    this.parent.emit(this.message);
  }

  @Input() d1 

}
