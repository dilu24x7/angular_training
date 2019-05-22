// app.module.ts
import { NgModule } from "@angular/core";
import { AppComponent } from './app.component'
import { AppHeaderComponent } from './app-header.component'
import { BrowserModule } from "@angular/platform-browser"
import { LoginModule } from "./login/login.module"
import { SharedModule } from "./shared/shared.module"
import { ShoppingModule } from "./shopping/shopping.module"
import { ListComponent, HomeComponent, NotFoundComponent } from "./menulinks.components"
import { ProductsComponent } from "./shopping/products.component"
import { Routes, RouterModule } from "@angular/router"
import { FormsModule} from "@angular/forms"
import { ProductService } from "./shared/services/product.service"
import { CartService } from "./shared/services/cart.service"

let appRoutes:Routes = [{path:"home", component:HomeComponent},
	{path:"home", component:HomeComponent},
	{path:"list", component:ListComponent, children: [
		{path:"", component: ProductsComponent},
		{path:":categoryID", component: ProductsComponent}
	]},
	{path:"login", loadChildren: "./login/login.module#LoginModule"}, //lazy loading
	{path:"", redirectTo: "home", pathMatch:"full"},
	{path:"**", component:NotFoundComponent}
]

@NgModule({
	// Register components
	declarations: [AppComponent, AppHeaderComponent, HomeComponent, ListComponent, NotFoundComponent],
	// Startup Component
	bootstrap: [AppComponent],
	// Module dependencies
	imports: [BrowserModule, ShoppingModule, RouterModule.forRoot(appRoutes, {useHash: true}), FormsModule],
	// Register Services
	providers: [ProductService, CartService]
})
export class AppModule {
	constructor() {
		console.log("App Module");
	}
}

// without browsermodule, normal modules are not capable to render custom tags