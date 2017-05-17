import { Component,OnInit, OnChanges, Input, trigger, state, style, animate, transition } from '@angular/core';

import { flyIn } from '../animations/fly-in';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ // 动画的内容
    flyIn
  ]
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
