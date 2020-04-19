import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/providers/user/user.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

	private initials;
	private menuItems = ['Friends List', 'Saved Items', 'Notifications', 'User Preferences'];
	private user;

	constructor(private userServ: UserService) {
		this.userServ.getUser().subscribe(user => {
			this.user = user
			this.getInitials();
		});
	}

	getInitials() {
		const nameArray = this.user.username.split(' ');
		const initialsArray = [];
		nameArray.forEach(element => initialsArray.push(element.substring(0, 1)));
		this.initials = initialsArray.join('');
	}

}
