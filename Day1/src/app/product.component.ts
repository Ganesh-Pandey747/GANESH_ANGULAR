import { Component } from '@angular/core';
import { Product } from './Model/product';
import { ProductService } from './Service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html', 
  providers : [ProductService] // IOC Container or registering the service class for memory allocation
 
})
export class ProductComponent 
{
  // at this point we have to call register endpoint to submit the data in backend, if service returns zero means unable to create membership otherwise... 
    temp : Product[] = []; // array declaration 
    constructor(private productService:ProductService) // product : className
    {

    }
    PersonList() : void
    {
        this.temp =  this.productService.getProductDetails();
    }
}
