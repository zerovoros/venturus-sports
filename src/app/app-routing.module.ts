import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersPage } from './pages/users/users';
import { NewUserPage } from './pages/users/new/new';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'users',
		pathMatch: 'full'
	},
	{
		path: 'users',
		component: UsersPage
	},
	{
		path: 'users/new',
		component: NewUserPage
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
