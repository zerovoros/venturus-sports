import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/providers/users/users.service';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-user-registration',
	templateUrl: './user-registration.component.html',
	styleUrls: ['./user-registration.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class UserRegistrationComponent {

	form: FormGroup;
	frequencies = ['Always', 'Sometimes', 'Never'];
	tips = [
		{ title: 'Need help?', icon: 'far fa-life-ring' },
		{ title: 'Why register?', icon: 'fas fa-heartbeat' },
		{ title: 'What people are saying...', icon: 'far fa-smile' }
	];
	weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	constructor(
		private fb: FormBuilder,
		private snackbar: MatSnackBar,
		private userServ: UsersService
	) {
		this.form = this.fb.group({
			address: this.fb.group({ city: [''] }),
			days: [[], [Validators.required, Validators.minLength(1)]],
			email: ['', [Validators.required, Validators.email]],
			name: ['', Validators.required],
			rideInGroup: ['', Validators.required],
			username: ['', Validators.required]
		})
	}

	pushDay(event, value) {
		const days = this.days.value;
		if (event) days.push(value);
		else days.splice(days.indexOf(value), 1);
		this.days.setValue(days);
	}

	sortDays(days) {
		const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
		const sortedDays = [];
		weekdays.forEach(day => { if (days.includes(day)) sortedDays.push(day) });
		return sortedDays;
	}

	clearForm() {
		this.city.patchValue(null);
		this.email.patchValue(null);
		this.days.patchValue([]);
		this.name.patchValue(null);
		this.rideInGroup.patchValue(null);
		this.username.patchValue(null);

		this.city.setErrors(null);
		this.email.setErrors(null);
		this.days.setErrors(null);
		this.name.setErrors(null);
		this.rideInGroup.setErrors(null);
		this.username.setErrors(null);
	}

	save(data) {
		data.days = this.sortDays(data.days);
		this.userServ.postUsers(data);
		this.snackbar.open('New user created', '', {duration: 4000});
		this.clearForm();
	}

	get city() { return this.form.get('address').get('city') }
	get email() { return this.form.get('email') }
	get days() { return this.form.get('days') }
	get name() { return this.form.get('name') }
	get rideInGroup() { return this.form.get('rideInGroup') }
	get username() { return this.form.get('username') }

}
