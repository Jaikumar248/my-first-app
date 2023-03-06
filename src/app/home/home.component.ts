import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { interval, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
//   @Input() cdata: any;
// ngOnChanges(changes): void{
//   console.log("on changes");
//   console.log(changes)
// }
  //  constructor(){
  //   console.log("constructor")
  //  }
  //  ngOnInit(): void {
  //    console.log("ngOnInit")
  //  }

  // ngOnInit(){
  //   interval(1000).subscribe( next, count => {
  //     console.log(count);
  //   })
  // }
 
// }
// function next(value: number): void {
//   throw new Error('Function not implemented.');

// @Output() customeve = new EventEmitter()
//   message = "pass to parent"
//  p
// }asstoParent(){
//  this.customeve.emit(this.message)

childData : string = "Data from child Component";
@Output() childStringData = new EventEmitter();

sendData(){
  this.childStringData.emit(this.childData)
}


}

