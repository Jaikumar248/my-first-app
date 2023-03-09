import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild(`productsForms`) form: NgForm;
  editMode: boolean = false;
  currentProductId: string;
  constructor( private http: HttpClient, private productService: PostService){

  }
  ngOnInit(): void {
    this.fetchProducts();
  }

  onProductsFetch(){
    this.fetchProducts();
  }
  onProductsCreate(products: {pname: string, pdesc: string, pprice: string}){
    if(this.editMode)
   this.productService.createProduct(products);
    else
    this.productService.updateProduct(this.currentProductId, products)
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
    this.currentProductId = id;
    // get the product based on id
    let currentProduct = this.allProducts.find((p) => {
     return p.id === id
     
    })
    console.log(this.form)
    this.form.setValue({
      pname: currentProduct.pname,
      pdesc: currentProduct.pdesc,
      pprice: currentProduct.pprice
    });
    this.editMode = true;
    
    

  }
    

}
