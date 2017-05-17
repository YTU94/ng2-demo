import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { userRoutes } from './user.routes';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    RouterModule.forChild(userRoutes)
  ],
  exports: [

  ],
  providers: [

  ]
})
export class UserModule { }