// login.module.ts
import {RouterModule, Routes} from "@angular/router"
import { SignInComponent } from "./signin.component"
import { SignUpComponent } from "./signup.component"
import { SharedModule } from "../shared/shared.module"
import { NgModule } from "@angular/core";

let loginRoutes:Routes = [
	{path: "signin", component: SignInComponent},
	{path: "signup", component: SignUpComponent}
]

@NgModule({
	declarations: [SignInComponent,SignUpComponent],
	imports: [RouterModule.forChild(loginRoutes), SharedModule]
	
})
export class LoginModule {
	constructor() {
		console.log("Login Module");
	}
}