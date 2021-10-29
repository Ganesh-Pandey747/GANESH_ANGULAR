export class Product
{
    productId : Number;
    name : String;
    price : Number;
    constructor(pid:number,n:string,p:number)
    {
        this.name = n;
        this.price = p;
        this.productId = pid;
    }
}