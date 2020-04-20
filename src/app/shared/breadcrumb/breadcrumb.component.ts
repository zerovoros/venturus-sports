import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent {

	breadcrumb = [];
	url;

	constructor(private router: Router) {
		this.url = this.router.url;
		this.formatBreadcrumb();
	}

	formatBreadcrumb() {
		this.breadcrumb = this.url.split('/');
		this.breadcrumb.splice(0, 1);
	}

	navigate(index) {
		const route = this.breadcrumb.slice(0, index+1);
		this.router.navigate([route.join('/')]);
	}

}
