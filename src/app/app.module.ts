// app.module.ts
import { NgModule } from "@angular/core";
import { AppComponent } from './app.component'
import { AppHeaderComponent } from './app-header.component'
import { BrowserModule } from "@angular/platform-browser"
import { LoginModule } from "./login/login.module"
import { ShoppingModule } from "./shopping/shopping.module"
import { ListComponent, HomeComponent, NotFoundComponent } from "./menulinks.components"
import { Routes, RouterModule } from "@angular/router"
import { FormsModule} from "@angular/forms"

let appRoutes:Routes = [{path:"home", component:HomeComponent},
	{path:"home", component:HomeComponent},
	{path:"list", component:ListComponent},
	{path:"", redirectTo: "home", pathMatch:"full"},
	{path:"**", component:NotFoundComponent}
]

@NgModule({
	// Register components
	declarations: [AppComponent, AppHeaderComponent, HomeComponent, ListComponent, NotFoundComponent],
	// Startup Component
	bootstrap: [AppComponent],
	// Module dependencies
	imports: [BrowserModule, LoginModule, ShoppingModule, RouterModule.forRoot(appRoutes), FormsModule]
})
export class AppModule {
	constructor() {
		console.log("App Module");
	}
}

// without browsermodule, normal modules are not capable to render custom tags