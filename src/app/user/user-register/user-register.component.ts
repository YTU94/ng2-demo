import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {flyIn} from '../../animations/fly-in';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  animations:[
    flyIn
  ]
})
export class UserRegisterComponent implements OnInit {
	user = new User(1,"admin","123456");

	submitted = false;

	onSubmit() { this.submitted == true; }

	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.user); }
  constructor() { }

  ngOnInit() {
  }

}
