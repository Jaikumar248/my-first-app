import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "../home/post.model";
import { LoanProducts } from "../loans/loan.model";


@Injectable({ providedIn: 'root'})
export class PostService {

    constructor(private http:HttpClient){}
   createProduct(products: {pname: string, pdesc: string, pprice: string}){
    this.http.post<{name: string}>('https://complete-http-request-default-rtdb.firebaseio.com/products.json',products)
    .subscribe((response)=>{
      console.log(response)
      this.fetchProducts();
    });
   }

   fetchProducts(){
    return this.http.get< {[key: string]: LoanProducts}>('https://complete-http-request-default-rtdb.firebaseio.com/products.json')
    .pipe(map((res) =>{
      const products=[];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key], id: key})
        }
        
      }
      return products;
    }))
  

   }
   deleteProduct(id: string){
    this.http.delete('https://complete-http-request-default-rtdb.firebaseio.com/products/'+id+'.json')
    .subscribe();

   }
   deleteAllProducts(){
    this.http.delete('https://complete-http-request-default-rtdb.firebaseio.com/products.json')
    .subscribe();
   }
   updateProduct(id: string, value: LoanProducts){
    this.http.put('https://complete-http-request-default-rtdb.firebaseio.com/products/'+id+'.json',value )
    .subscribe()
   }
}