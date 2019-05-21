// mysign.component.ts
import { Component, Input, EventEmitter, Output, OnChanges, OnDestroy, OnInit } from "@angular/core"

@Component({
	selector: "my-sign",
	template: `<h2>{{ title }}</h2>
	<form>
		UserName<input type="text" placeholder="Enter User Name" name="" #txtUser> <br>
		Password<input type="password" name="" #txtPwd> <br>
		<button class="btn btn-primary" type="button" (click)="handleButtonClick(txtUser.value,txtPwd.value)">{{ title }}
		</button>
	</form>
	`

})
export class MySignComponent implements OnDestroy, OnInit, OnChanges {
	@Input()
	title:string;

	@Output()
	myEvent = new EventEmitter()

	handleButtonClick(usr, pwd) {
		console.log(usr,pwd);
		this.myEvent.emit({
			'username': usr,
			'password': pwd
		})
	}

	constructor() {
		console.log("My Sign Constructor", this.title);
	}

	ngOnDestroy() {
		console.log("My Sign destroyed", this.title)
	}

	ngOnInit() {
		console.log("My Sign initialized", this.title)
	}

	ngOnChanges() {
		console.log("My Sign changed", this.title)
	}
}