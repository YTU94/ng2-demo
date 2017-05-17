import { Component, OnInit } from '@angular/core';

import { flyIn } from '../animations/fly-in';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  animations: [ flyIn ]
})
export class AddComponent implements OnInit {
	public modleName = ""; 
	public classify = "默认";
  constructor() { }

  ngOnInit() {
  }

}
