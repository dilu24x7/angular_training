// app-header.component.ts
import { Component } from "@angular/core"
import { LoginService } from "./shared/services/login.service"

@Component({
	selector: "app-header",
	// template: "Header Component" //output for your tag
	templateUrl: "./header.component.html"
})
export class AppHeaderComponent {
	constructor(private loginservice:LoginService) {
		console.log("Header Component constructor");
	}

	isAdminLoggedIn() {
		return this.loginservice.getIsAdminLoggedIn()
	}
}