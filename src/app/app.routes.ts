import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {ChangePwdComponent} from './user/change-pwd/change-pwd.component';
import {HomeComponent} from './home/home.component';
import {AddComponent} from './add/add.component';
export const appRoutes=([
	// {
	// 	path: 'home',
	// 	loadChildren: './home/home.module#HomeModule'
	// },
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'add',
		component: AddComponent
	},
	{
		path: 'change-pwd',
		component: ChangePwdComponent
	},
	{
		path: 'user',
		component: UserComponent
	},
	{
		path: 'login',
		component: UserLoginComponent
	},
	{
		path: 'register',
		component: UserRegisterComponent
	},
	{ 
		path: '',   
		redirectTo: '/home', 
		pathMatch: 'full'
	}
])