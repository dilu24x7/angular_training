// login.module.ts
import {RouterModule, Routes} from "@angular/router"
import { SignInComponent } from "./signin.component"
import { SignUpComponent } from "./signup.component"
import { SignOutComponent } from "./signout.component"
import { ErrorComponent } from "./error.component"
import { SharedModule } from "../shared/shared.module"
import { NgModule } from "@angular/core";

let loginRoutes:Routes = [
	{path: "signin", component: SignInComponent},
	{path: "signup", component: SignUpComponent},
	{path: "signout", component: SignOutComponent},
	{path: "error", component: ErrorComponent}
]

@NgModule({
	declarations: [SignInComponent,SignUpComponent, SignOutComponent, ErrorComponent],
	imports: [RouterModule.forChild(loginRoutes), SharedModule]
	
})
export class LoginModule {
	constructor() {
		console.log("Login Module");
	}
}