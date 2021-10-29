import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './Model/product';
import { ProductService } from './Service/product.service';

@Component({
  selector: 'app-productDetails',
  template: `
    {{product?.name}}
  `,
  providers: [ProductService]

})
export class ProductDetailsComponent implements OnInit
{
  Id : any;
  product?: Product;
  sub: any;
  constructor(private _Activatedroute : ActivatedRoute,private _productService:ProductService )
  {
    
    
  }
  ngOnInit() // runs after constructor
  {
  //   this.sub=this._Activatedroute.paramMap.subscribe(params => { 
  //     console.log("i am oninit");
  //      this.Id = params.get('Id'); 
  //      console.log();
      
  //      let products=this._productService.getProductDetails();
  //      this.product=products.find(p => p.productId==this.Id);    
  //  });
  }
}