import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service'
import { CartItem } from '../models/cartitem.model'

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styles: []
})
export class CartitemsComponent implements OnInit {

  cartItems:CartItem[] = []

  constructor(private cartservice:CartService) { }

  ngOnInit() {
  	this.cartItems = this.cartservice.getCartItems()
  }

  deleteFromCart(idx) {
  	this.cartservice.removeCartItem(idx)
  }

  totalAmount(): number {
  	let total = 0;
  	for (let cartitem of this.cartItems) {
  		total += cartitem.price * cartitem.qty
  	}
  	return total;
  }

}
