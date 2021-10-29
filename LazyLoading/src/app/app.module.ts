import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const MyRoute: Routes=[
  {path: 'about', component: AboutComponent},     //eager loading is happening here
  /*{path: 'home', component: HomeComponent} */  ///eager loading is happening here
  {path: 'home', loadChildren: ()=> import('./home/home.module')    //lazy loading is happening here
.then(m=>m.HomeModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(MyRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
