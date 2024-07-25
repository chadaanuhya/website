import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cardItemList:any=[];
  public Products=new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
    return this.Products.asObservable();
  }
  setProduct(product:any){
    this.cardItemList.push(...product);
    this.Products.next(product);
  }
  addtoCart(product:any){
    this.cardItemList.push(product);
    this.Products.next(this.cardItemList);
    this.getTotalPrice();
    console.log(this.cardItemList)
  }
  getTotalPrice():number{
    let grandTotal=0;
    this.cardItemList.map((a:any)=>{
      grandTotal+=(a.total*a.quantity);
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cardItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cardItemList.splice(index,1)

}
    })
    this.Products.next(this.cardItemList);
  }
  removeAllCart(){
    this.cardItemList=[]
    this.Products.next(this.cardItemList);

  }
  Plus(product:any){
    if(product.quantity!=8){
      product.quantity+=1;
      this.getTotalPrice();
      console.log(this.getTotalPrice());
    }
  }
  Minus(product:any){
    if(product.quantity!=1){
      product.quantity-=1;
      this.getTotalPrice();
      console.log(this.getTotalPrice())
    }
  }

}
