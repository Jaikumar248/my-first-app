import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { filter, from, interval, map, Observable, of, range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="";
  // show(fc, p, grp){
  //   console.log(fc,p);
  //   console.log(grp);
  // }
  // show(form){
   
    // form.setValue({
    //   username:'jaikumar',
    //   password:'jaikumr'
    // })
    // console.log(form.value);
    // form.control.patchValue({
    //   username:'jaikumar',
    //   password: 'jaikumar123'
    // })
  // }

  // login = new FormGroup({
  //   uname  :new FormControl(),
  //   password: new FormControl()
  // })
  
  // show(){
  //   console.log(this.login.controls['uname']);
  // }

  // regForm = new FormGroup({
  //   uname: new FormControl("jai",[Validators.required, Validators.minLength(6)]),
  //   email: new FormControl("abc@gmail.com",[Validators.required, Validators.email])
  // })

  // show(){
  //   console.log(this.regForm);
  // }

//  testForm = new FormGroup({
//   mobileNums: new FormArray([
//     new FormControl(),
//     new FormControl()
//    ])
//  })

//  test(){
//   console.log(this.testForm);
//  }

// onAddHobby(){

// }
//  users = new FormArray([
//    new FormControl('ABC'),
//    new FormControl('xyz')
// ]);

  // constructor(private fb: FormBuilder){
   
  // }
  // regForm = this.fb.group(
  //   {
  //     name:[null, Validators.required],
  //     email:[null, Validators.required],
  //     mobile: [],
  //     skills: this.fb.array(
  //       [
  //         [],
  //         []
  //       ]
  //     )


  //   }
  // )

  // regForm = new FormGroup({
  //   username: new FormControl(null, [Validators.required, this.usernameCheck])
  // });


  // uppercaseTest(c){
  //   let pattern =/[A-Z]/
  //   if(pattern.test(c.value)) {

  //     return null
      
  //   }
  //   else {
  //     return {'noupper': true}
  //   }
  // }
  // show() {
  //   console.log(this.regForm);
  // }
 

  // usernameCheck(control): Promise<any>{
    
  //   let response=new Promise(
  //     (resolve, reject)=>{
  //      let users=["user1", "user2", "user3"]
  //      let name = control.value;
  //      setTimeout(() =>{
  //       if(users.indexOf(name)>=0){
  //         resolve({"duplicateuser": true})
  //        }
  //        else {
  //         resolve(null)
  //        }
  //      }, 2000)
      
  //     }
  //   )
  //   return response;
  // }


  // num: number;
  // constructor(){
  //   this.num=30
  // }
  // wish = "hello good evening";
  // constructor(){

  // }
  // ngAfterViewInit(): void {
  //   console.log("view init called")
  // }
  // ngAfterViewChecked(): void {
  //   console.log("view checked called")
  // }
  // counter=0;
  // updateCounter(){
  //   this.counter+=1;
  // }
  // obs = new Observable((nums)=>{

  //   nums.next(100);
  //   nums.next("jaikumar");
  //   nums.next("hello")
  // })

  // ngOnInit(): void {
  //   this.obs.subscribe(
  //     data=>console.log(data),
  //     err=>console.log(err),
  //     ()=>console.log("complete")
  //   )
  // }
  // ngOnInit(): void {
  //   from([3,5,4]).subscribe(
  //     (data)=>{
  //       console.log(data)
  //     }
  //   )
  //   range(5,7).subscribe(
  //     (data)=>{
  //       console.log(data);
  //     }
  //   )
  //   interval(1000).subscribe(
  //     (data)=>{
  //       console.log(data)
  //     }
  //   )
  //   let obs=of(3,4,5,6,7).pipe(
  //     map(
  //       (data)=>{
  //         return "hello"
  //       }
  //     )
  //   )
  //   obs.subscribe(
  //     (data)=>{
  //       console.log(data);
  //     }
  //   )

  //   let obs1=of(1,2,3,4).pipe(
  //     filter(
  //       (data)=>{
  //         return data>2
  //       }
  //     )
  //   )
  //   obs1.subscribe(
  //     (data)=>{
  //       console.log("jai")
  //     }
  //   )
  // }
//   show(f:any){
//     console.log(f)
//   }
//   regForm = new FormGroup({
//     uname: new FormControl("John",[Validators.required, Validators.minLength(8)] ),
//     email: new FormControl("abc@gmail.com", [Validators.email, Validators.required])
//   })
  

// testForm = new FormGroup({
//   mobileNums : new FormArray(
//     [new FormControl(),
//     new FormControl()
//     ]
//   )
// })

// test() {
//    let mobilenums = this.testForm.get('mobileNums') as FormArray

//    mobilenums.push(new FormControl(null, Validators.required))
// }

// constructor( private  fb: FormBuilder){
 
// }
// regForm1 = this.fb.group({
//   name: [null, Validators.required],
//   email: [null, Validators.required],
//   mobiles:this.fb.array(
//   [
//     [],
//     []
//   ]
//   )
// })

// regForm2 = new FormGroup({
//   username: new FormControl(null, Validators.required, this.usernameCheck)
// })

// users = [
//   "user1", "user2", "user3"
// ]
// // users.indexof("user1")

// usernameCheck(control): Promise<any>{
//   let response = new Promise(
//     (resolve, reject)=>{
//       let name = control.value;

//       if(this.users.indexOf(name)>0){
//         resolve({"duplicateuser":true})
//       }
//       else {
//         resolve(null);
//       }
//     }
//   )
//   return response
 
// }

// upperCaseTest(c){

//   let pattern = /A-Z/
//   if(pattern.test(c.value)){
//     return null
//   }
//   return {'noupper':true}
 
// }

// constructor(private http:HttpClient){}

// getData(){
//   this.http.get("https://fakestoreapi.com/products?limit=5")
//   .subscribe((data)=>{
//     console.log(data)
//   }
//   )
// }

users = [
  {
    "id":1,
    "name": "jai",
    "email": "abc@gmail.com"
  },
  {
    "id":2,
    "name":"abc",
    "email":"xyz@gmail.com"
  },
  {
    "id":3,
    "name":"abc1",
    "email":"xyz@gmail.com"
  }
]

constructor(private http: HttpClient){

}

receiveData(event: string){
console.log(event);
}





}
