// app.component.ts
// whats this class meant for module/component
import { Component } from "@angular/core"

@Component({
	selector: "app-root",
	template: "<app-header></app-header><router-outlet></router-outlet>"
})
export class AppComponent {
	constructor() {
		console.log("App Component");
	}
}