import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PostService } from '../services/post.services';
import { LoanProducts } from './loan.model';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  allProducts: LoanProducts[] = [];
  constructor( private http: HttpClient, private productService: PostService){

  }
  ngOnInit(): void {
    this.fetchProducts();
  }

  onProductsFetch(){
    this.fetchProducts();
  }
  onProductsCreate(products: {pname: string, pdesc: string, pprice: string}){
   this.productService.createProduct(products);
  }

  private fetchProducts(){

    this.productService.fetchProducts().subscribe((products) => {
      this.allProducts =products
    })
  }
  onDeleteProduct(id: string){
  this.productService.deleteProduct(id);
  }
  onDeleteProductAll(){
   this.productService.deleteAllProducts();
  }
  onEditProduct(id: string){
    // get the pr
  }

}
