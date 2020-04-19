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
}
