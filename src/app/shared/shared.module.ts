// shared.module.ts
import { NgModule } from "@angular/core";
import { MySignComponent } from "./mysign.component"

@NgModule({
	declarations: [MySignComponent],
	exports: [MySignComponent]
})
export class SharedModule {
	constructor() {
		console.log("Shared Module");
	}
}