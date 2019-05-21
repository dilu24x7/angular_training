// search.pipe.ts
// defining custom pipes - pipe decorator, implement pipetransform, register under declarations
import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
	name: 'searchData'
})
export class SearchDataPipe implements PipeTransform{
	transform(input:any[], queryString:string, field_name:string){
		console.log(queryString);
		if(queryString != "" && queryString != undefined && field_name != undefined) {
			return input.filter((e) => e[field_name].toLowerCase().indexOf(queryString.toLowerCase()) > -1)
		} else {
			return input;
		}
	}
}