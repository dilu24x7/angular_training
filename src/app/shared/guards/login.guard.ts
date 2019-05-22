// login.guard.ts
import { Injectable } from "@angular/core"
import { CanActivate } from "@angular/router"
import { LoginService } from "../services/login.service"

@Injectable({ providedIn: 'root'})
export class LoginGuard implements CanActivate {
	constructor(private loginservice:LoginService) {}
	canActivate() {
		return this.loginservice.getIsAdminLoggedIn();
	}
}