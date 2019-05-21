import { Component, OnInit } from '@angular/core';
import { ProductService } from "../shared/services/product.service"
import { Product } from "../models/product.model"
import { CartService } from '../shared/services/cart.service'
import { CartItem } from '../models/cartitem.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  products: Product[] = []
  currentDate = new Date()
  queryString = ""

  constructor(private productservice: ProductService, private cartservice: CartService) { }

  ngOnInit() {
  	this.products = this.productservice.getProducts()
  }

  addProductToCart(product:Product){
  	this.cartservice.addCartItem(new CartItem(product.id, product.name, product.price, 1));
  }
  
}
