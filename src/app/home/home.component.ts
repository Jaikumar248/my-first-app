import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval, map, of } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
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

// childData : string = "Data from child Component";
// @Output() childStringData = new EventEmitter();

// sendData(){
//   this.childStringData.emit(this.childData)
// }
postForm: FormGroup;
posts;

constructor(private http: HttpClient) {}

ngOnInit(): void {
  this.postForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required)
  });
  this.getPosts();
    this.http.get(`https://complete-http-request-default-rtdb.firebaseio.com/posts.json`)
    .subscribe((response)=>{
      console.log(response)
    })
}
getPosts(){
  this.http.get('https://complete-http-request-default-rtdb.firebaseio.com/posts.json')
  .pipe(map((response : {[key: string]: Post})=>{
    let posts = [];
    for (let key in response){
      posts.push({...response[key], key});

    }
    return posts;
  }))
  .subscribe((response) => {
   this.posts=response;
  })

}
oncreatePost(){
  const postData = this.postForm.value;
  console.log(postData)
  this.http.post('https://complete-http-request-default-rtdb.firebaseio.com/posts.json', postData).subscribe(response => {
    this.getPosts();

  })
}


}

