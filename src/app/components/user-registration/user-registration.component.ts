import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-user-registration',
	templateUrl: './user-registration.component.html',
	styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

	form: FormGroup;
	frequencies = ['always', 'sometimes', 'never'];
	weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			city: [''],
			daysOfWeek: [''],
			email: ['', [Validators.required, Validators.email]],
			name: ['', Validators.required],
			rideInGroup: ['', Validators.required],
			username: ['', Validators.required]
		})
	}

	ngOnInit() {
	}

	get city() { return this.form.get('city') }
	get email() { return this.form.get('email') }
	get daysOfWeek() { return this.form.get('rideInGroup') }
	get name() { return this.form.get('name') }
	get rideInGroup() { return this.form.get('rideInGroup') }
	get username() { return this.form.get('username') }

}