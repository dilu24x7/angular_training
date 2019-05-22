// category.service.ts
import { Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Category } from "src/app/models/category.model"

// no need to register in the root module
@Injectable({providedIn: 'root'})
export class CategoryService {
	private restURL = "http://localhost:3000/wscategories"
	// injecting http service to categoryService, return type of all httpClient methods are observable
	// events of the observable are listened using subscribe method
	// when we receive data, onNext() is triggered
	constructor(private http:HttpClient) {}
	getCategories() {
		return this.http.get<Category[]>(this.restURL)
	}

	addCategory(newcategory:Category) {
		return this.http.post<Category>(this.restURL, newcategory)
	}

	deleteCategory(id:number) {
		return this.http.delete(this.restURL+'/'+id)
	}

	updateCategory(modifiedCategory:Category) {
		return this.http.put<Category>(this.restURL+'/'+modifiedCategory.id, modifiedCategory)
	}
}