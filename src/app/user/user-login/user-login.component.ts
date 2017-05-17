import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import {flyIn} from '../../animations/fly-in';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  animations:[
    flyIn
  ]
})
export class UserLoginComponent implements OnInit {
	user = new User(1,"admin","123456");

	submitted = false;

	onSubmit() { this.submitted == true; }

	
	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.user); }

  constructor() { }

  ngOnInit() {
  }

}
