// product.service.ts
import { Injectable } from "@angular/core"
import { Product } from "src/app/models/product.model"

@Injectable()
export class ProductService {
	private productsData:Product[] = []
	constructor(){
		this.productsData = [
			new Product(1, 'Bravia', 56000, "Sony TV", 2),
			new Product(1, 'Xiaomi 4K', 39000, "Xiaomi TV", 3),
			new Product(1, 'Panasonic 4K', 66000, "Panasonic TV", 3),
			new Product(1, 'LG 4K', 56000, "LG TV", 2),
		]
	}

	getProducts(): Product[]{
		return this.productsData;
	}
}