// category.component.ts
import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../shared/services/category.service"
import { Category } from "../models/category.model"

@Component({
	selector: 'app-category',
	templateUrl: "./category.component.html"
})
export class CategoryComponent implements OnInit {
	categories:Category[] = []
	fromCategory = new Category(null, null)
	constructor(private categoryservice: CategoryService) {}

	ngOnInit() {
		this.categoryservice.getCategories().subscribe(
			(data) => {
				this.categories = data;
			}, (err) => {
				console.log("Error", err);
			})
	}

	save() {
		if (this.fromCategory.id == undefined) {
			this.categoryservice.addCategory(this.fromCategory).subscribe(
				(data) => {
					console.log(data);
					this.categories.push(data)
					this.fromCategory = new Category(null, null)
				}, err => {
					console.log(err);
				}
			)
		} else {
			this.categoryservice.updateCategory(this.fromCategory).subscribe(
				(data) => {
					console.log(data);
					let idx = this.categories.findIndex((e) => e.id == data.id)
					this.categories[idx] = data;
				}, err => {
					console.log(err);
				}
			)			
		}
	}

	delete(id:number) {
		this.categoryservice.deleteCategory(id).subscribe(
			(data) => {
				console.log(data);
				let idx = this.categories.findIndex((e) => e.id == id)
				this.categories.splice(idx, 1);
			}, (err) => {
				console.log(err);
			}
		)
	}

	edit(selectedCategory:Category) {
		// this.fromCategory = selectedCategory // this will change instantly which we dont want.
		Object.assign(this.fromCategory, selectedCategory) // javascript method
	}
}