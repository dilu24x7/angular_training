// menulinks.components.ts
import { Component } from "@angular/core"
import { CategoryService } from "./shared/services/category.service"
import { Category } from "./models/category.model"

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
	templateUrl: "./list.component.html"
})
export class ListComponent {
	categoryLinks:Category[] = []
	constructor(private categoryservice: CategoryService){}
	ngOnInit() {
		this.categoryservice.getCategories().subscribe((data) => this.categoryLinks=data, (err) => console.log("Error", err))
	}
}

@Component({
	selector: "not-found",
	template: `<h1>Angular gone crazy!</h1>`
})
export class NotFoundComponent {
	
}