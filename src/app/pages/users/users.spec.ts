import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPage } from './users';

describe('UsersPage', () => {
	let component: UsersPage;
	let fixture: ComponentFixture<UsersPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ UsersPage ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UsersPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
