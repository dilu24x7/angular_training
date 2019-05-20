// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

console.log("inside main.ts file");
var Things = "asdasd"
for (let i = Things.length - 1; i >= 0; i--) {
	console.log(Things[i])
};
// console.log(i);
let m = function(){
	return "JPMC"
};
console.log(m);
// arrow fn
let f = () => "BLR"
console.log(f());

// type annotation - Explicit decl
let n: number;
// n = "ABC"; 
n = 40;

function add(a:number, b:number) : number {
	return a + b;
}

// type inference - Implicit decl

let s = "ABC";
// s = add(20, 40)

// Primitive Type: string number boolean
// Special: any, void
// Array: []/Array
// Function Types: Function (capital datatype and small letter definition)
// Object Types: {}
// Custom Type: Class, Interface, Enums

// custom tags are called components
// module (folder) -> inside that components (files)

// 1. define the component
// 2. register component in a module
// 3. use component in HTML 

function display() {
	console.log("Display function");
}