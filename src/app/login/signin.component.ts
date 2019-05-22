// signin.component.ts
import { Component } from "@angular/core"
import { LoginService } from "../shared/services/login.service"
import { Router } from "@angular/router"

@Component({
	selector: "sign-in",
	template:`
	<h2>Welcome {{ userName }}</h2>
	<my-sign [title]="signInHeading" (myEvent)="handleMyEvent($event)"></my-sign>`

})
export class SignInComponent {
	userName = "Guest"
	signInHeading = "Sign In"
	constructor(private loginservice:LoginService, private router: Router) {
		console.log("SignIn Component")
	}
	handleMyEvent(obj) {
		this.userName = obj.username;
		if(this.loginservice.isValidUser(obj.username, obj.password)) {
			this.router.navigate(['/categories']);
		} else {
			this.router.navigate(['login/error']);
		};
	}
}