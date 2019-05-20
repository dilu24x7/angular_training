// menulinks.components.ts
import { Component } from "@angular/core"

@Component({
	selector: "app-home",
	template: `<h1>Welcome to my Shopping App</h1> ONEWAY<input type="number" value={{count}}/>
	MVVM<input type="number" [(ngModel)]="count"/>
	{{count}}<button class="btn btn-primary" (click)="incrementCount()">+</button>`
})
export class HomeComponent {
	mycontent:string = "My Sample Content"
	count = 0
	incrementCount() {
		this.count++
	}
}

@Component({
	selector: "app-list",
	template: `Shopping List`
})
export class ListComponent {
	
}

@Component({
	selector: "not-found",
	template: `<h1>Angular gone crazy!</h1>`
})
export class NotFoundComponent {
	
}