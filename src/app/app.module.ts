import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatButtonModule, MatCheckboxModule, MatRadioModule, MatMenuModule, MatDividerModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UsersPage } from './pages/users/users';
import { NewUserPage } from './pages/users/new/new';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		UserListComponent,
		UserRegistrationComponent,
		UsersPage,
		NewUserPage,
		BreadcrumbComponent,
		UserDialogComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatButtonModule,
		MatCheckboxModule,
		MatDialogModule,
		MatDividerModule,
		MatFormFieldModule,
		MatInputModule,
		MatMenuModule,
		MatRadioModule,
		MatTableModule,
		ReactiveFormsModule
	],
	entryComponents: [UserDialogComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
