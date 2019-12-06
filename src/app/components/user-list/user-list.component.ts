import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MatTableDataSource } from '@angular/material';
import { UserService } from 'src/app/providers/user/user.service';

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

	constructor(public userServ: UserService) {
		this.filter.valueChanges.subscribe(val => this.filterTable());
	}

	ngOnInit() {
		this.getData();
	}

	filterTable() {
		console.log(this.filter.value);
	}

	async getData() {
		const albums: any = await this.userServ.getAlbums().toPromise();
		const photos: any = await this.userServ.getPhotos().toPromise();
		const posts: any = await this.userServ.getPosts().toPromise();
		const users: any = await this.userServ.getUsers().toPromise();

		users.map((user, index) => {
			const publications = [];
			let photoAmount = 0;
			posts.map(post => { if (post.userId == user.id) publications.push(post); });
			albums.map((album, index) => {
				const pics = [];
				photos.map(photo => { if (photo.albumId == album.id) pics.push(photo) });
				if (album.userId == user.id) photoAmount += pics.length;
				albums[index] = Object.assign({ photos: pics }, album);
			});
			users[index] = Object.assign({ albums: albums, photoAmount: photoAmount, posts: publications }, user);
		});

		this.dataSource.data = users;
	}

}
