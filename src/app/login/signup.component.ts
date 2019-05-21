// signup.component.ts
import { Component } from "@angular/core"

@Component({
	selector: "sign-up",
	template:`<my-sign [title]="signInHeading"></my-sign>`

})
export class SignUpComponent {
	signInHeading = "Sign Up"
	constructor() {
		console.log("Sign up Component")
	}
}