// app-header.component.ts
import { Component } from "@angular/core"

@Component({
	selector: "app-header",
	// template: "Header Component" //output for your tag
	templateUrl: "./header.component.html"
})
export class AppHeaderComponent {
	constructor() {
		console.log("Header Component constructor");
	}
}