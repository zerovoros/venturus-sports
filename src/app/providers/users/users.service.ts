import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UsersService {

	constructor(private http: HttpClient) { }

	getUsers() {
		return this.http.get('https://jsonplaceholder.typicode.com/users');
	}

	getAlbums() {
		return this.http.get('https://jsonplaceholder.typicode.com/albums');
	}

	getPhotos() {
		return this.http.get('https://jsonplaceholder.typicode.com/photos');
	}

	getPosts() {
		return this.http.get('https://jsonplaceholder.typicode.com/posts');
	}

	postUsers(body) {
		const users = localStorage.users ? JSON.parse(localStorage.users) : [];
		users.push(body)
		localStorage.setItem('users', JSON.stringify(users));
	}
}
