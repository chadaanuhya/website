import { Component,OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  [x:string]:any;
  public Products:any=[];
  public grandTotal!:number;
  public cardItemList:any=[];
  constructor(private cartservice:CartService){}
  ngOnInit():void{
    this.cartservice.getProducts().subscribe(res=>{
      this.Products=res;
      this.grandTotal=this.cartservice.getTotalPrice();
    })
  }
removeItem(product:any){
  this.cartservice.removeCartItem(product);
}
emptycart(){
  this.cartservice.removeAllCart();
}
minus(product:any){
  this.cartservice.Minus(product);
  this.grandTotal=this.cartservice.getTotalPrice();
}
plus(product:any){
  this.cartservice.Plus(product);
  this.grandTotal=this.cartservice.getTotalPrice();
}
}
