import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ChangePwdComponent } from './user/change-pwd/change-pwd.component';

import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app.routes';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    ChangePwdComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
