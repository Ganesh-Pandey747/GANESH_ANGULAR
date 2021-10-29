import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const MyRoute: Routes=[
  {path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(MyRoute)
  ]
})
export class HomeModule { }
