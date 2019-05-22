// signout.component.ts
import { Component, OnInit} from "@angular/core"
import { LoginService } from "../shared/services/login.service"

@Component({
	selector: "app-signout",
	template: `signout`

})
export class SignOutComponent implements OnInit {
	constructor(private loginservice:LoginService) {}
	ngOnInit() {
		this.loginservice.setIsAdminLoggedIn(false);
	}
}