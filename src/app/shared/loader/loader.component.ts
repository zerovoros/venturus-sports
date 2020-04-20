import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LoaderComponent {

	@ViewChild("loader", null) loader: any;
	hidden: boolean = true;
	text: string = "";

	/* DEFAULT VALUES */
	diameter = 100;
	mode = "indeterminate"; // determinate || interteminate
	strokeWidth = 5;
	time = 0;
	value = 0;

	constructor() { }

	newLoader(loader?: any, text?: string) {
		this.hidden = false;
		if (loader) {
			this.diameter = loader.diameter ? loader.diameter : 50;
			this.mode = loader.mode ? loader.mode : "indeterminate";
			this.strokeWidth = loader.strokeWidth ? loader.strokeWidth : 5;
			this.time = loader.time ? loader.time : 0;
			this.value = loader.value ? loader.value : 0;
		}
		if (text) this.text = text;
		if (this.value != 0) setTimeout(() => { this.stopLoader(); }, this.value * 1000);
	}

	updateLoaderProgress(value: number, text?: string) {
		this.value = value;
		if (value == 100) this.stopLoader();
		if (text) this.text = text;
		else this.text = `${value}%`;
	}

	uploadLoaderText(text: string) { this.text = text; }

	stopLoader() {
		this.hidden = true;
		this.text = "";
		this.value = 0;
	}
}
