import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MatTableDataSource } from '@angular/material';
import { UsersService } from 'src/app/providers/users/users.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {

	columns = ['username', 'name', 'email', 'city', 'ride', 'days', 'posts', 'albums', 'photos', 'actions'];
	dataSource = new MatTableDataSource();
	filter: FormControl = new FormControl('');
	frequency = ['Always', 'Sometimes', 'Never'];
	weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	users = [];

	constructor(
		private dialog: MatDialog,
		private userServ: UsersService
	) {
		this.filter.valueChanges.subscribe(val => this.filterTable());
	}

	ngOnInit() {
		this.getData();
	}

	filterTable() {
		this.dataSource.filter = this.filter.value.trim();
	}

	async getData() {
		const albums: any = await this.userServ.getAlbums().toPromise();
		const photos: any = await this.userServ.getPhotos().toPromise();
		const posts: any = await this.userServ.getPosts().toPromise();
		let users: any = await this.userServ.getUsers().toPromise();

		users.map((user, index) => {
			const publications = [];
			posts.map(post => { if (post.userId == user.id) publications.push(post); });
			users[index] = Object.assign({
				albums: [],
				photoAmount: 0,
				posts: publications,
				rideInGroup: this.frequency[Math.floor(Math.random() * this.frequency.length)],
				days: this.randomizeDays()
			}, user);
			albums.map((album, i) => {
				const pics = [];
				photos.map(photo => { if (photo.albumId == album.id) pics.push(photo) });
				albums[i] = Object.assign({ photos: pics }, album);
				if (album.userId == user.id) {
					users[index].photoAmount += pics.length;
					users[index].albums.push(albums[i]);
				}
			});
		});

		if (localStorage.users) users = users.concat(JSON.parse(localStorage.users));

		this.users = users;
		this.dataSource.data = users;
	}

	randomizeDays() {
		let limit = Math.floor(Math.random() * this.weekdays.length);
		if (limit == 0) limit++;
		const days = [];
		for (let i=0; i<limit; i++) {
			const day = this.weekdays[Math.floor(Math.random() * this.weekdays.length)];
			if (!days.includes(day)) days.push(day);
			// else i--;
		}

		return this.sortDays(days);
	}

	sortDays(days: any[]) {
		const sortedDays = [];
		this.weekdays.forEach(day => { if (days.includes(day)) sortedDays.push(day) });
		return sortedDays;
	}

	displayDays(days: any[]) {
		if (days.length == 5 && !days.includes('sun') && !days.includes('sat')) return 'Week days';
		else if (days.length == 2 && days.includes('sun') && days.includes('sat')) return 'Weekends';
		else if (days.length == 7) return 'Every day';
		else return days.join(', ');
	}

	removeUser(index) {
		const dialog = this.dialog.open(UserDialogComponent);

		dialog.afterClosed().subscribe(response => {
			console.log(response);
			if (response) {
				this.users.splice(index, 1);
				this.dataSource.data = this.users;
			}
		});
	}

}
