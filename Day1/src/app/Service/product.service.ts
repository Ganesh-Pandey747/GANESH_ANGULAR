import { templateJitUrl } from '@angular/compiler'
import {Product} from '../Model/product'
export class ProductService
{
    [x: string]: any;
    getProductDetails() : Product[]
    {
         var temp = [
            new Product(101,'Laptop',25000),  //temp is a object
            new Product(102,'Computer',35000), 
        ]
        return temp ;
    }
    public getProduct(Id:number) {
        let products:Product[]=this.getProductDetails();
        return products.find(p => p.productId==Id);
    }
}