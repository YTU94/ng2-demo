import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { flyIn } from './animations/fly-in'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  	flyIn
  ]
})
export class AppComponent {
}
