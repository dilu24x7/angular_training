// shared.module.ts
import { NgModule } from "@angular/core";
import { MySignComponent } from "./mysign.component"
import { SearchDataPipe } from "../shared/pipes/search.pipe"
import { HttpClientModule } from "@angular/common/http"


@NgModule({
	declarations: [MySignComponent, SearchDataPipe], //only components
	exports: [MySignComponent, SearchDataPipe],
	imports: [HttpClientModule]
})
export class SharedModule {
	constructor() {
		console.log("Shared Module");
	}
}