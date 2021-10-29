import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';// step 1
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; //step 3


const MyRoute:Routes=[     //step 4
{path:'Register', component:RegisterComponent},  //step 5
{path:'Login', component:LoginComponent},   //step 6
{path:'Home', component:HomeComponent}      //step 7
]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,ReactiveFormsModule,RouterModule.forRoot(MyRoute) //step 2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
