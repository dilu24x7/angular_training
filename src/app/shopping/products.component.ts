import { Component, OnInit } from '@angular/core';
import { ProductService } from "../shared/services/product.service"
import { Product } from "../models/product.model"
import { CartService } from '../shared/services/cart.service'
import { CartItem } from '../models/cartitem.model'
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  products: Product[] = []
  currentDate = new Date()
  queryString = ""

  constructor(private productservice: ProductService, private cartservice: CartService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
  	// this.products = this.productservice.getProducts()
  	this.activatedRoute.params.subscribe(
  		(data) => {
  			console.log(data);
  			if(data.categoryID == undefined){
  				this.products = this.productservice.getProducts()
  			}else{
  				this.productservice.getProducts().filter((e) => e.categoryID == data.categoryID)
  			}
  		}
  	)
  }

  addProductToCart(product:Product){
  	this.cartservice.addCartItem(new CartItem(product.id, product.name, product.price, 1));
  }
  
}
