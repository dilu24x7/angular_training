// cart.service.ts
import { Injectable } from "@angular/core"
import { CartItem } from "src/app/models/cartitem.model"

@Injectable()
export class CartService {
	private cartData: CartItem[] = []

	getCartItems() {
		return this.cartData;
	}

	addCartItem(cartitem:CartItem) {
		this.cartData.push(cartitem);
	}

	removeCartItem(idx:number) {
		this.cartData.splice(idx, 1)
	}

	// removeCartItem(cartitem:CartItem) {
	// 	this.cartData.splice(this.cartData.indexOf(cartitem),1)
	// }
}