// signin.component.ts
import { Component } from "@angular/core"

@Component({
	selector: "sign-in",
	template:`
	<h2>Welcome {{ userName }}</h2>
	<my-sign [title]="signInHeading" (myEvent)="handleMyEvent($event)"></my-sign>`

})
export class SignInComponent {
	userName = "Guest"
	signInHeading = "Sign In"
	constructor() {
		console.log("SignIn Component")
	}
	handleMyEvent(obj) {
		this.userName = obj.username;
	}
}