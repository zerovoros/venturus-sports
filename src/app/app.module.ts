import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatButtonModule, MatCheckboxModule, MatRadioModule, MatMenuModule, MatDividerModule, MatDialogModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserRegistrationComponent } from './components/user/user-registration/user-registration.component';
import { UsersPage } from './pages/users/users';
import { NewUserPage } from './pages/users/new/new';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { UserDialogComponent } from './components/user/user-dialog/user-dialog.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		UserListComponent,
		UserRegistrationComponent,
		UsersPage,
		NewUserPage,
		BreadcrumbComponent,
		UserDialogComponent,
		LoaderComponent
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
		MatProgressSpinnerModule,
		MatRadioModule,
		MatSnackBarModule,
		MatTableModule,
		ReactiveFormsModule
	],
	entryComponents: [UserDialogComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
