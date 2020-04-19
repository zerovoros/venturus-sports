import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-users',
	templateUrl: './users.html',
	styleUrls: ['./users.scss'],
	encapsulation: ViewEncapsulation.None
})
export class UsersPage {

	categories = [
		{ title: 'Cycling', type: 'Sport type', icon: 'fa-puzzle-piece' },
		{ title: 'Advanced', type: 'Mode', icon: 'fa-trophy' },
		{ title: '30 miles', type: 'Route', icon: 'fa-map-signs' }
	];

	constructor() { }

}
