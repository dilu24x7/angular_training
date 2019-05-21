// product.model.ts
export class Product {
	// // 1. Define data members
	// public id:number
	// public name: string
	// public price: number
	// public description: string

	// // 2. Initialize data members
	// constructor(id:number, name:string, price:number, description:string) {
	// 	this.id = id;
	// 	this.name = name;
	// 	this.price = price;
	// 	this.description = description;
	// }

	// define and initialize in single place

	constructor(public id:number, public name:string, public price:number, public description:string){}
	
}