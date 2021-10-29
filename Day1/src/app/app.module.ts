import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './productDetails.compnent';


const MyRoute : Routes = [
  {path:'product', component: ProductComponent},
  {path:'product/:Id', component : ProductDetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent, ProductComponent, ProductDetailsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(MyRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
